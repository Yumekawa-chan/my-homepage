// pages/about.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import "../../app/globals.css";

function About() {
  return (
    <div
      className="flex flex-col h-screen bg-gradient-to-br from-pink-100 to-purple-200 relative overflow-y-auto"
      style={{ fontFamily: "DotGothic16" }}
    >
      <Header />
      <div className="flex-grow flex flex-col p-8">
        <div className="text-center mb-8">
          <h1
            className="text-7xl font-bold text-pink-600 shadow-text md:text-5xl sm:text-4xl"
            style={{ zIndex: 1 }}
          >
            About Me
          </h1>
        </div>
        <section className="mb-8">
          <h2 className="text-3xl text-purple-600 mb-4">
            Personal Information
          </h2>
          <p>Name: Mikihiro Suzuki</p>
          <p>Affiliation: Tokyo Denki University (Since April 2020)</p>
        </section>
        <section className="mb-8">
          <h2 className="text-3xl text-purple-600 mb-4">Publications</h2>
          {/* List your publications here */}
        </section>
        <section className="mb-8">
          <h2 className="text-3xl text-purple-600 mb-4">Skills</h2>
          {/* List your skills here */}
        </section>
        <section className="mb-8">
          <h2 className="text-3xl text-purple-600 mb-4">Portfolio</h2>
          {/* Showcase your projects here */}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default About;
