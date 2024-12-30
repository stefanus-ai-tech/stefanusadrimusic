import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const menuItems = [
  { name: "Instruments", path: "/instruments" },
  { name: "Film Scoring", path: "/film-scoring" },
  { name: "Commercial", path: "/commercial" },
  { name: "SFX", path: "/sfx" },
  { name: "Production", path: "/production" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

interface SidebarProps {
  onClose?: () => void;
}

export const Sidebar = ({ onClose }: SidebarProps) => {
  const location = useLocation();

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white p-8 flex flex-col border-r border-gray-100">
      {/* Close button for mobile */}
      <button
        onClick={onClose}
        className="md:hidden absolute top-4 right-4 p-2 rounded-md hover:bg-gray-100"
      >
        <X className="h-6 w-6 text-gray-600" />
      </button>

      <div className="mb-12 pt-4 md:pt-0">
        <Link to="/" className="block">
          {/* Profile Photo */}
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
              alt="Stefanus Adri Irawan"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-serif mb-1 text-center">Stefanus Adri Irawan</h1>
          <p className="text-gray-600 text-center">Music Production</p>
        </Link>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={onClose}
                className={cn(
                  "block py-2 px-4 rounded-md transition-colors",
                  location.pathname === item.path
                    ? "bg-wine text-white"
                    : "hover:bg-wine/10"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="mt-auto pt-8 flex gap-4 justify-center">
        <a href="#" className="text-gray-600 hover:text-wine">
          <span className="sr-only">SoundCloud</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.56 8.87V17h8.76c1.85 0 3.35-1.5 3.35-3.35 0-1.85-1.5-3.35-3.35-3.35-.22 0-.44.02-.65.07C19.13 6.98 16.52 5 13.44 5c-.66 0-1.3.1-1.88.27v3.6z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-600 hover:text-wine">
          <span className="sr-only">Instagram</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-600 hover:text-wine">
          <span className="sr-only">YouTube</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};