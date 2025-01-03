import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

const menuItems = [
  { name: 'Instruments', path: '/instruments' },
  { name: 'Film Scoring', path: '/film-scoring' },
  { name: 'Commercial', path: '/commercial' },
  { name: 'SFX', path: '/sfx' },
  { name: 'Production', path: '/production' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

interface SidebarProps {
  onClose?: () => void;
}

export const Sidebar = ({ onClose }: SidebarProps) => {
  const location = useLocation();

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white md:p-8 p-4 flex flex-col border-r border-gray-200">
      {/* Close button for mobile */}
      <button
        onClick={onClose}
        className="md:hidden absolute top-2 right-2 p-1 rounded-md hover:bg-gray-100">
        <X className="h-5 w-5 text-gray-600" />
      </button>

      <div className="mb-6 md:mb-12 pt-2 md:pt-0">
        <Link to="/" className="block" onClick={onClose}>
          {/* Profile Photo */}
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-2 md:mb-4 overflow-hidden">
            <img
              src="/2.png"
              alt="Stefanus Adri Irawan"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl md:text-2xl font-serif mb-0.5 md:mb-1 text-center">
            Stefanus Adri Irawan
          </h1>
          <p className="text-sm md:text-base text-gray-600 text-center">
            Music Production
          </p>
        </Link>
      </div>

      <nav className="flex-1">
        <ul className="space-y-1 md:space-y-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={onClose}
                className={cn(
                  'block py-1.5 md:py-2 px-3 md:px-4 rounded-md transition-colors text-sm md:text-base',
                  location.pathname === item.path
                    ? 'bg-wine text-white'
                    : 'hover:bg-wine/10'
                )}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto pt-4 md:pt-8 flex gap-4 justify-center"></div>
    </div>
  );
};
