
import { Link } from 'react-router-dom';
import { LayoutDashboard, Import, Archive } from 'lucide-react';
import { useNav } from '@/context/NavContext';
import { cn } from '@/lib/utils';

export default function Sidebar() {
  const { activePage, setActivePage } = useNav();

  const navItems = [
    {
      name: 'Dashboard',
      path: '/',
      icon: LayoutDashboard,
      value: 'dashboard' as const
    },
    {
      name: 'Import Invoice',
      path: '/import',
      icon: Import,
      value: 'import' as const
    },
    {
      name: 'Archive',
      path: '/archive',
      icon: Archive,
      value: 'archive' as const
    }
  ];

  return (
    <div className="h-screen w-1/4 bg-sidebar border-r border-gray-200 p-4 flex flex-col">
      <div className="text-xl font-bold mb-6 text-center">Invoice Explorer</div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                to={item.path}
                className={cn(
                  "flex items-center p-3 rounded-md transition-colors hover:bg-gray-100",
                  activePage === item.value 
                    ? "bg-primary text-primary-foreground" 
                    : "text-gray-700 hover:text-primary"
                )}
                onClick={() => setActivePage(item.value)}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
