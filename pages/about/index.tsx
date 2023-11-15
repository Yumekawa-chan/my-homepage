// pages/about.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import "../../app/globals.css";

function About() {
  return (
    <div
      className="flex flex-col min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 relative overflow-y-auto"
      style={{ fontFamily: "DotGothic16" }}
    >
      <Header />

      <section className="text-center p-4 md:p-8 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
          Mikihiro Suzuki
        </h1>
        <div className="mb-4">
          <Image
            src="/me.png"
            alt="Mikihiro Suzuki"
            width={300}
            height={300}
          />
        </div>
        <p className="text-xl text-purple-600 mb-8 text-center">
          Hi there👍 Call me Mikky! Despite creating such a cute website, I`m
          actually a burly guy who`s into hardcore weight training! 💪
          <br />
          At university, I`m studying Computer Vision.👀
          <br />
          Nice to meet you! 😎
        </p>
      </section>

      <div className="flex-grow flex flex-col p-4 md:p-8">
        <section className="text-center mb-8 w-full">
          <h2 className="text-2xl md:text-3xl text-purple-600 mb-4">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 shadow-md rounded-md flex flex-col items-center">
              <Image src="/python.png" alt="Python" width={120} height={120} />
              <h3 className="text-xl font-bold text-purple-600 mb-2">Python</h3>
              <p className="text-purple-400">
                My favorite language! I use it for machine learning and computer
                vision research, computations, and whenever in doubt, I start
                with this language!
              </p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md flex flex-col items-center">
              <Image src="/cpp.png" alt="C++" width={100} height={100} />
              <h3 className="text-xl font-bold text-purple-600 mb-2">C++</h3>
              <p className="text-purple-400">
                Super fast language! I use it especially with OpenCV. Still
                getting the hang of it, but planning to master it!
              </p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md flex flex-col items-center">
              <Image src="/js.png" alt="Javascript" width={100} height={100} />
              <h3 className="text-xl font-bold text-purple-600 mb-2">
                Javascript
              </h3>
              <p className="text-purple-400">
                This website is actually built with Next.js! Front-end
                development is fun as it`s visually rewarding!
              </p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md flex flex-col items-center">
              <Image src="/php.png" alt="PHP" width={150} height={150} />
              <h3 className="text-xl font-bold text-purple-600 mb-2">PHP</h3>
              <p className="text-purple-400">
                Working as a server-side engineer part-time! I use Laravel and
                Symfony.
              </p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md flex flex-col items-center">
              <Image src="/unity.png" alt="Unity" width={190} height={190} />
              <h3 className="text-xl font-bold text-purple-600 mb-2">Unity</h3>
              <p className="text-purple-400">
                Occasionally use it for research! Planning to develop VR
                applications!
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="flex-grow flex flex-col p-4 md:p-8">
        <section className="text-center mb-8 w-full">
          <h2 className="text-2xl md:text-3xl text-purple-600 mb-4">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 shadow-md rounded-md">
              <h3 className="text-xl font-bold text-purple-600 mb-2">
                Tokyo Denki University
              </h3>
              <p className="text-purple-400 mb-2">
                B.S. Student in Computer Science, 2020 - 2024
              </p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md">
              <h3 className="text-xl font-bold text-purple-600 mb-2">
                Tokyo Denki University
              </h3>
              <p className="text-purple-400 mb-2">
                M.S. Student in Computer Science, 2024 - Present
              </p>
            </div>
          </div>
        </section>

        <section className="text-center mb-8 w-full">
          <h2 className="text-2xl md:text-3xl text-purple-600 mb-4">
            Domestic Conference (Japanese)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 shadow-md rounded-md">
              <h3 className="text-xl font-bold text-purple-600 mb-2">
                単一のRGB-Dカメラで撮影した人物と死角領域の点群データ補間
              </h3>
              <p className="text-purple-400 mb-2">
                Forum on Information technology (FIT), 2023
              </p>
              <p className="text-purple-400 mb-4">
                Authors: Mikihiro Suzuki, Ken Eto, Yuko Ozasa
              </p>
              <span className="text-white bg-pink-400 px-4 py-2 rounded mr-2">
                Machine Learning
              </span>
              <span className="text-white bg-pink-400 px-4 py-2 rounded">
                Computer Vision
              </span>
            </div>

            {/* ... other conference entries ... */}
          </div>
        </section>

        <section className="text-center mb-8 w-full">
          <h2 className="text-2xl md:text-3xl text-purple-600 mb-4">Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 shadow-md rounded-md">
              <h3 className="text-xl font-bold text-purple-600 mb-2">
                AI INNOVATION AWARDS 2022
              </h3>
              <p className="text-purple-400 mb-2">
                Second Place out of 16 teams, 2021
              </p>
              <p className="text-purple-400 mb-4">
                Secured the second place among 16 teams! 🥈 Served as the team
                leader.
              </p>
              <a
                href="https://www.nttpc.co.jp/press/2022/04/202204211500.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white bg-pink-400 px-4 py-2 rounded hover:bg-pink-600">
                  Detail
                </button>
              </a>
            </div>
            {/* ... other awards entries ... */}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default About;
