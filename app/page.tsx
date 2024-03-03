// pages/page.tsx
"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Snowflakes from "../components/Snowflakes"; // <-- Import Snowflakes component here
import Image from "next/image";
import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';

function Home() {
  return (
    <div
      className="flex flex-col h-screen bg-gradient-to-br from-pink-100 to-purple-200 relative"
      style={{ fontFamily: "DotGothic16" }}
    >
      <Snowflakes /> {/* <-- Add Snowflakes component here */}
      <Header />
      <div className="flex-grow flex items-center justify-center relative">
        <Image
          src="/unicorn.png"
          alt="Yumekawa Unicorn"
          width={500}
          height={500}
          className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-40"
          style={{ zIndex: 1 }}
        />

        <div className="text-center z-20">
          <h1
            className="text-7xl font-bold text-pink-600 shadow-text md:text-5xl sm:text-4xl"
            style={{ zIndex: 1 }}
          >
            Yumekawa Holdings
          </h1>
          <p className="text-2xl text-purple-600 mt-4 shadow-text">
            Kawaii Dreams, Real Possibilities
          </p>
          <div className="pt-3 text-pink-600">
            <Link href="https://github.com/Yumekawa-chan">
              <GitHubIcon style={{ fontSize: 40 }} />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
