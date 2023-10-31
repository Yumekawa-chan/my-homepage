import Link from 'next/link';

function Header() {
  return (
    <header className="bg-pink-400 text-white py-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/"><span className="text-2xl font-bold hover:text-pink-200 cursor-pointer">Yumekawa Holdings</span></Link>
          <nav className="space-x-4">
            <Link href="/top"><span className="hover:text-pink-200 cursor-pointer">Top</span></Link>
            <Link href="/about"><span className="hover:text-pink-200 cursor-pointer">About me</span></Link>
            <Link href="/application"><span className="hover:text-pink-200 cursor-pointer">Application</span></Link>
            <Link href="/contact"><span className="hover:text-pink-200 cursor-pointer">Contact</span></Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
