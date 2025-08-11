import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  BookOpen, 
  GraduationCap, 
  CreditCard, 
  FileText, 
  MessageSquare,
  Calendar,
  Award,
  QrCode,
  Bell,
  Shield,
  Globe
} from "lucide-react";
import featuresImage from "@/assets/dashboard-features.jpg";

const features = [
  {
    icon: Users,
    title: "Manajemen Multi-Role",
    description: "Sistem otorisasi canggih untuk Admin, Guru, Siswa, dan Wali",
    badge: "Core Feature",
    color: "primary"
  },
  {
    icon: QrCode,
    title: "Absensi Digital",
    description: "Scan QR/Barcode untuk presensi yang akurat dan real-time",
    badge: "Smart Tech",
    color: "accent"
  },
  {
    icon: GraduationCap,
    title: "Raport Digital",
    description: "Input nilai dan raport elektronik terintegrasi",
    badge: "Academic",
    color: "secondary"
  },
  {
    icon: CreditCard,
    title: "Sistem Pembayaran",
    description: "Kelola komite dan SPP dengan tracking otomatis",
    badge: "Finance",
    color: "primary"
  },
  {
    icon: BookOpen,
    title: "E-Library",
    description: "Perpustakaan digital dengan koleksi lengkap",
    badge: "Digital",
    color: "accent"
  },
  {
    icon: FileText,
    title: "Ujian Online",
    description: "Platform ujian dengan penilaian otomatis",
    badge: "Assessment",
    color: "secondary"
  },
  {
    icon: MessageSquare,
    title: "Forum Diskusi",
    description: "Ruang kolaborasi untuk guru dan siswa",
    badge: "Communication",
    color: "primary"
  },
  {
    icon: Bell,
    title: "Notifikasi Real-time",
    description: "Alert via email, SMS, dan push notification",
    badge: "Instant",
    color: "accent"
  },
  {
    icon: Award,
    title: "Sistem Reward",
    description: "Motivasi siswa dengan sistem penghargaan",
    badge: "Motivation",
    color: "secondary"
  },
  {
    icon: Shield,
    title: "Keamanan Data",
    description: "Enkripsi tingkat enterprise untuk perlindungan data",
    badge: "Security",
    color: "primary"
  },
  {
    icon: Globe,
    title: "Integrasi Nasional",
    description: "Sinkronisasi dengan EMIS & SIMPATIKA",
    badge: "Integration",
    color: "accent"
  },
  {
    icon: Calendar,
    title: "Manajemen Arsip",
    description: "Sistem dokumen digital dengan pencarian cepat",
    badge: "Organization",
    color: "secondary"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            🚀 Fitur Unggulan
          </Badge>
          <h2 className="text-4xl font-bold text-primary mb-4">
            Solusi Lengkap untuk Madrasah Modern
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dari manajemen akademik hingga administrasi keuangan, semua kebutuhan madrasah 
            terintegrasi dalam satu platform yang mudah digunakan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 gradient-card border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl ${
                      feature.color === 'primary' ? 'bg-primary text-primary-foreground' :
                      feature.color === 'accent' ? 'bg-accent text-accent-foreground' :
                      'bg-secondary text-secondary-foreground'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg mb-2 text-foreground">{feature.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={featuresImage} 
              alt="Dashboard Features" 
              className="rounded-2xl shadow-strong"
            />
          </div>
          <div className="space-y-6">
            <Badge className="bg-accent/10 text-accent border-accent/20">
              💡 Teknologi Terdepan
            </Badge>
            <h3 className="text-3xl font-bold text-primary">
              Dashboard Intuitif untuk Setiap Role
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Setiap pengguna mendapatkan pengalaman yang disesuaikan dengan peran dan tanggung jawab mereka. 
              Interface yang intuitif memastikan adopsi yang cepat dan produktivitas maksimal.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Dashboard personal yang dapat dikustomisasi</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Notifikasi real-time berdasarkan prioritas</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Akses mobile-friendly untuk semua fitur</span>
              </div>
            </div>
            <Button variant="gradient" size="lg">
              Jelajahi Dashboard
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;