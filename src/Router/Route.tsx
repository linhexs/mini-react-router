import { useLocation } from "./hooks";

interface RouteProps {
  path: string;
  children: JSX.Element;
}

export const Route = ({ path, children }: RouteProps) => {
  const { pathname } = useLocation();
  const matched = path === pathname;

  if (matched) {
    return children;
  }
  return null;
};
