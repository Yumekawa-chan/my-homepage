"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const pastelColors = [
  "rgba(255, 209, 220, 0.6)", // パステルピンク
  "rgba(255, 255, 179, 0.6)", // パステルイエロー
  "rgba(179, 255, 207, 0.6)", // パステルグリーン
  "rgba(255, 224, 179, 0.6)", // パステルオレンジ
  "rgba(179, 209, 255, 0.6)", // パステルブルー
];

function getRandomPastelColor() {
  const randomIndex = Math.floor(Math.random() * pastelColors.length);
  return pastelColors[randomIndex];
}

function generateBubbleStyle(position: {
  top: string;
  left: string;
}): React.CSSProperties {
  return {
    ...position,
    "--bubble-color": getRandomPastelColor(),
  } as React.CSSProperties;
}

function Home() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-pink-100 to-purple-200 relative">
      <Header />

      <div className="flex-grow flex items-center justify-center relative">
        <div
          className="bubble small"
          style={generateBubbleStyle({ top: "10%", left: "10%" })}
        ></div>
        <div
          className="bubble medium"
          style={generateBubbleStyle({ top: "30%", left: "40%" })}
        ></div>
        <div
          className="bubble large"
          style={generateBubbleStyle({ top: "50%", left: "70%" })}
        ></div>
        <div
          className="bubble small"
          style={generateBubbleStyle({ top: "70%", left: "20%" })}
        ></div>
        <div
          className="bubble medium"
          style={generateBubbleStyle({ top: "20%", left: "80%" })}
        ></div>

        <Image
          src="/unicorn.png"
          alt="Yumekawa Unicorn"
          width={500}
          height={500}
          className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-40"
        />

        <div className="text-center z-20">
          <h1 className="text-7xl font-bold text-pink-600 shadow-text md:text-5xl sm:text-4xl">
            Yumekawa Holdings
          </h1>
          <p className="text-2xl text-purple-600 mt-4 shadow-text">
            Kawaii Dreams, Real Possibilities
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
