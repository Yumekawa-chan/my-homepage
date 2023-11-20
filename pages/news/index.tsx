import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import "../../app/globals.css";
import rehypeRaw from "rehype-raw";

interface NewsArticle {
  slug: string;
  content: string;
  date?: string;
}

interface NewsProps {
  articles: NewsArticle[];
}

const News: NextPage<NewsProps> = ({ articles }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 relative overflow-y-auto">
      <Header />
      <div className="flex-grow p-4 md:p-8">
        {articles.map((article) => (
          <div
            key={article.slug}
            className="mb-8 p-6 shadow-lg rounded-lg bg-white"
          >
            {article.date && (
              <div className="text-gray-600 text-sm mb-2">
                {new Date(article.date).toLocaleDateString("ja-JP")}
              </div>
            )}
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {article.content}
            </ReactMarkdown>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), "public", "md-folder"));

  const articles = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), "public", "md-folder", filename),
      "utf-8"
    );
    const { data, content } = matter(markdownWithMeta);

    return {
      slug,
      content,
      date: data.date,
    };
  });

  const sortedArticles = articles
    .sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    })
    .slice(0, 5);

  return {
    props: {
      articles: sortedArticles,
    },
  };
};

export default News;
