import { useEffect, useState } from "react";
import { fetchStudents } from "@/integrations/supabase/students";

interface Student {
  id: number;
  name: string;
}

const Absensi = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStudents()
      .then((data) => setStudents(data as Student[]))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Absensi</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="space-y-2">
        {students.map((student) => (
          <li key={student.id} className="border p-2 rounded">
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Absensi;
