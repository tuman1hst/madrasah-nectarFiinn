import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, BookOpen, Award, Shield, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-madrasah.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Madrasah Digital System" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                ✨ Sistem Terdepan untuk Madrasah Modern
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-arabic text-secondary">بِسْمِ اللهِ</span>
                <br />
                Madrasah Digital
                <br />
                <span className="text-secondary">Terpadu</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Solusi komprehensif untuk mengelola seluruh aspek pendidikan madrasah. 
                Dari manajemen siswa hingga pembelajaran digital, semua terintegrasi dalam satu platform.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" className="text-lg">
                Mulai Sekarang
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Demo Sistem
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto mb-2 text-secondary" />
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm text-white/80">Siswa Aktif</div>
              </div>
              <div className="text-center">
                <BookOpen className="w-8 h-8 mx-auto mb-2 text-secondary" />
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-white/80">Guru Terdaftar</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-2 text-secondary" />
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-white/80">Kepuasan</div>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-secondary" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-white/80">Aman</div>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <Card className="gradient-card p-8 shadow-strong">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-primary">Login Sistem</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="admin" className="h-24 flex-col">
                    <Shield className="w-8 h-8 mb-2" />
                    <span>Admin</span>
                  </Button>
                  <Button variant="default" className="h-24 flex-col">
                    <Users className="w-8 h-8 mb-2" />
                    <span>Guru</span>
                  </Button>
                  <Button variant="secondary" className="h-24 flex-col">
                    <GraduationCap className="w-8 h-8 mb-2" />
                    <span>Siswa</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex-col">
                    <Users className="w-8 h-8 mb-2" />
                    <span>Wali</span>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Pilih role Anda untuk mengakses dashboard yang sesuai
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;