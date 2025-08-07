export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-white">Kevin Conklin</div>
          <ul className="flex space-x-6">
            <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a></li>
            <li><a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a></li>
            <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}