import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

// パステルカラーの配列
const pastelColors = [
  "rgba(255, 209, 220, 0.6)", // パステルピンク
  "rgba(255, 255, 179, 0.6)", // パステルイエロー
  "rgba(179, 255, 207, 0.6)", // パステルグリーン
  "rgba(255, 224, 179, 0.6)", // パステルオレンジ
  "rgba(179, 209, 255, 0.6)", // パステルブルー
];

// ランダムなパステルカラーを返す関数
function getRandomPastelColor() {
  const randomIndex = Math.floor(Math.random() * pastelColors.length);
  return pastelColors[randomIndex];
}

function Home() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-pink-100 to-purple-200 relative">
      <Header />

      <div className="flex-grow flex items-center justify-center relative">
        {/* 泡の要素を追加し、style属性でランダムな背景色を設定 */}
        <div
          className="bubble small"
          style={{
            top: "10%",
            left: "10%",
            "--bubble-color": getRandomPastelColor(),
          }}
        ></div>
        <div
          className="bubble medium"
          style={{
            top: "30%",
            left: "40%",
            "--bubble-color": getRandomPastelColor(),
          }}
        ></div>
        <div
          className="bubble large"
          style={{
            top: "50%",
            left: "70%",
            "--bubble-color": getRandomPastelColor(),
          }}
        ></div>
        <div
          className="bubble small"
          style={{
            top: "70%",
            left: "20%",
            "--bubble-color": getRandomPastelColor(),
          }}
        ></div>
        <div
          className="bubble medium"
          style={{
            top: "20%",
            left: "80%",
            "--bubble-color": getRandomPastelColor(),
          }}
        ></div>

        <Image
          src="/unicorn.png"
          alt="Yumekawa Unicorn"
          width={500}
          height={500}
          className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-40"
        />

        <div className="text-center z-20">
          <h1 className="text-7xl font-bold text-pink-600 shadow-text">
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
