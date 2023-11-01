import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image'; 

function Home() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-pink-100 to-purple-200 relative">
      <Header />

      <div className="flex-grow flex items-center justify-center relative">
        <Image 
          src="/unicorn.png"  
          alt="Yumekawa Unicorn" 
          width={500}
          height={500}  
          className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-40" 
        />

        <div className="text-center z-20">
          <h1 className="text-7xl font-bold text-pink-600 shadow-text">Yumekawa Holdings</h1>
          <p className="text-2xl text-purple-600 mt-4 shadow-text">Kawaii Dreams, Real Possibilities</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
