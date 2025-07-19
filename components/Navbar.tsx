// file: components/Navbar.tsx
"use client";
export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Bagian Kiri: Logo atau Nama */}
        <div className="text-xl font-bold">
          <a href="/">NamaAnda</a>
        </div>

        {/* Bagian Kanan: Link Navigasi */}
        <ul className="flex items-center space-x-6">
          <li>
            <a href="/projects" className="transition hover:text-gray-500">
              Projects
            </a>
          </li>
          <li>
            <a href="/about" className="transition hover:text-gray-500">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="transition hover:text-gray-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}