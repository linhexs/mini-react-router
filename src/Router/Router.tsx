import React, { useState, useEffect, ReactNode } from 'react';
import { history, Location } from './history';
interface RouterContextProps {
  history: typeof history;
  location: Location;
}

export const RouterContext = React.createContext<RouterContextProps | null>(
  null,
);

export const Router: React.FC = ({ children }) => {
  const [location, setLocation] = useState(history.location);
  useEffect(() => {
    const unlisten = history.listen((local) => {
      setLocation(local);
    });
    return unlisten;
  }, []);

  return (
    <RouterContext.Provider value={{ history, location }}>
      {children}
    </RouterContext.Provider>
  );
};