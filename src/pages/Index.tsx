import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import RoleTable from "@/components/RoleTable";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <RoleTable />
      <Footer />
    </div>
  );
};

export default Index;
