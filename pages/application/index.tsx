// pages/application.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../app/globals.css";

function Application() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 relative overflow-y-auto">
      <Header />
      
      <div className="flex-grow container mx-auto p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-600 mb-4">Applications</h1>
        
        {/* Application List Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Single Application Entry */}
          <div className="bg-white p-4 shadow-md rounded-md flex flex-col items-center transition duration-300 transform hover:bg-pink-200 hover:shadow-lg hover:scale-105">
            <img src="/keiba_icon.png" alt="Application 1" width={200} className="mb-4" />
            <h2 className="text-xl font-bold text-purple-600 mb-2">Thoroughbred Finance Manager</h2>
            <p className="text-purple-400 text-center">Track bets and balance your books on race day.</p>
          </div>
          
          {/* ...other application entries */}
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Application;
