export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-600">G-SONS IT Solutions</div>
        <div className="flex gap-6 items-center">
          <a href="#services" className="text-gray-700 hover:text-green-600">Services</a>
          <a href="#about" className="text-gray-700 hover:text-green-600">About</a>
          <a href="#contact" className="text-gray-700 hover:text-green-600">Contact</a>
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Book a Consultation
          </button>
        </div>
      </nav>
    </header>
  );
}
