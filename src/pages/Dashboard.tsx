import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import { supabase } from "@/integrations/supabase/client";

const Dashboard = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role") || "siswa";
  const [showSidebar, setShowSidebar] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user?.email) {
        setEmail(data.user.email);
      }
    });
  }, []);

  const menus: Record<string, { name: string; path: string }[]> = {
    admin: [
      { name: "Dashboard", path: "/dashboard" },
      { name: "Manage Users", path: "/dashboard/users" },
    ],
    guru: [
      { name: "Dashboard", path: "/dashboard" },
      { name: "My Classes", path: "/dashboard/classes" },
    ],
    siswa: [
      { name: "Dashboard", path: "/dashboard" },
      { name: "My Courses", path: "/dashboard/courses" },
    ],
    wali: [
      { name: "Dashboard", path: "/dashboard" },
      { name: "Reports", path: "/dashboard/reports" },
    ],
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen">
      <div className={`${showSidebar ? "block" : "hidden md:block"}`}>
        <Sidebar items={menus[role] || []} />
      </div>
      <div className="flex flex-1 flex-col">
        <Navbar
          onLogout={handleLogout}
          onToggleMenu={() => setShowSidebar(!showSidebar)}
          role={role}
          email={email}
        />
        <main className="flex-1 p-4">
          <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
          <p>Your role: {role}</p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
