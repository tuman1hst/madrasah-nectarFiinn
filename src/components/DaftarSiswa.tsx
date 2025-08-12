import { useEffect, useState } from "react";
import { fetchStudents } from "@/integrations/supabase/students";

interface Student {
  id: number;
  name: string;
}

const DaftarSiswa = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    fetchStudents().then((data) => setStudents(data as Student[]));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Daftar Siswa</h2>
      <ul className="list-disc pl-5 space-y-1">
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DaftarSiswa;
