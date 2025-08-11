import { Button } from "@/components/ui/button";
import { BookOpen, Users, GraduationCap, Settings } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-md border-b border-border shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 gradient-primary rounded-xl shadow-medium">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Madrasah Digital</h1>
              <p className="text-sm text-muted-foreground">Sistem Manajemen Terpadu</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="flex items-center space-x-2">
              <GraduationCap className="w-4 h-4" />
              <span>Akademik</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Manajemen</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>Admin</span>
            </Button>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              Masuk
            </Button>
            <Button variant="gradient" size="sm">
              Daftar
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;