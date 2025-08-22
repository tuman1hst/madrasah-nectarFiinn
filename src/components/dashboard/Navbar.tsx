import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onLogout: () => void;
  onToggleMenu: () => void;
  role: string;
  email?: string;
}

const Navbar = ({ onLogout, onToggleMenu, role, email }: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between border-b p-4">
      <Button variant="outline" className="md:hidden" onClick={onToggleMenu}>
        Menu
      </Button>
      <div className="flex-1" />
      <div className="flex items-center space-x-4">
        <NavLink to="/" className="text-sm">
          Home
        </NavLink>
        <span className="text-sm capitalize">{email || role}</span>
        <Button variant="ghost" onClick={onLogout}>
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
