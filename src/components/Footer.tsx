import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-secondary rounded-xl">
                <BookOpen className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Madrasah Digital</h3>
                <p className="text-sm text-primary-foreground/80">Sistem Terpadu</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Memajukan pendidikan Islam dengan teknologi modern untuk masa depan yang lebih baik.
            </p>
            <div className="flex space-x-3">
              <Button variant="secondary" size="icon">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="secondary" size="icon">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="secondary" size="icon">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Menu Utama</h4>
            <div className="space-y-2">
              {["Dashboard", "Akademik", "Manajemen", "E-Library", "Forum"].map((item) => (
                <Button key={item} variant="ghost" className="justify-start p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">
                  {item}
                </Button>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Fitur Utama</h4>
            <div className="space-y-2">
              {["Absensi Digital", "Raport Online", "Pembayaran SPP", "Ujian Online", "Notifikasi"].map((item) => (
                <Button key={item} variant="ghost" className="justify-start p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">
                  {item}
                </Button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-secondary" />
                <span className="text-sm">support@madrasahdigital.id</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-secondary" />
                <span className="text-sm">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="text-sm">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Madrasah Digital. Hak cipta dilindungi undang-undang.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Button variant="ghost" className="text-xs p-0 h-auto text-primary-foreground/60 hover:text-primary-foreground">
              Kebijakan Privasi
            </Button>
            <Button variant="ghost" className="text-xs p-0 h-auto text-primary-foreground/60 hover:text-primary-foreground">
              Syarat & Ketentuan
            </Button>
            <Button variant="ghost" className="text-xs p-0 h-auto text-primary-foreground/60 hover:text-primary-foreground">
              Bantuan
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;