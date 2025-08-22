import { supabase } from "./client";

export const fetchStudents = async () => {
  const { data, error } = await supabase.from("students").select("*");
  if (error) {
    throw error;
  }
  return data;
};
