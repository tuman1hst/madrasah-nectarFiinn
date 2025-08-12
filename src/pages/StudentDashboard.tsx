import { Button } from "@/components/ui/button";
import { useAuth, signOut } from "@/lib/auth";

const StudentDashboard = () => {
  const { user } = useAuth();
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Siswa Dashboard</h1>
      <p>Welcome, {user?.email}</p>
      <Button onClick={() => void signOut()}>Keluar</Button>
    </div>
  );
};

export default StudentDashboard;
