
import { createContext, useContext, useState, ReactNode } from 'react';

type ActivePage = 'dashboard' | 'import' | 'archive';

interface NavContextType {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export function NavProvider({ children }: { children: ReactNode }) {
  const [activePage, setActivePage] = useState<ActivePage>('dashboard');

  return (
    <NavContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error('useNav must be used within a NavProvider');
  }
  return context;
}
