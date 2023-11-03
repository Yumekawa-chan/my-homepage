import React from "react";
import Link from "next/link";
import Header from "../components/Header";  
import Footer from "../components/Footer";  

function Custom404() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-100 to-purple-200">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl text-pink-600 font-bold">404 - Page Not Found</h1>
        <p className="text-purple-600">Sorry, the page you are looking for does not exist.</p>
        <Link href="/">
          <a className="text-pink-400 hover:text-pink-600">Go back to home</a>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Custom404;
