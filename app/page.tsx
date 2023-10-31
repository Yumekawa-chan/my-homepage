import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1">
        <h1>Hello World!</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
