import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../app/globals.css";

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wrfqdlp",
        "template_pf7cidb",
        form.current!,
        "BUU88JSKD2Nh3X07d"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current!.reset(); // フォームをリセット
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="flex flex-col min-h-screen bg-pink-100">
      {" "}
      {/* 背景色を変更する */}
      <Header />
      <div className="flex-grow container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-purple-500">Contact Me</h1>
        <div className="mb-4 text-purple-400">
          <p>Address:</p>
          <p>5 Asahi-cho, Senju, Adachi-ku, Tokyo, Japan</p>
          <p>
            Building No. 5, 10th Floor, Visual Perception & Recognition
            Laboratory
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-pink-500">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="border p-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-pink-500">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="border p-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 text-pink-500">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="border p-2 rounded"
              rows={5}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-pink-400 text-white py-2 px-4 rounded hover:bg-pink-500 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
