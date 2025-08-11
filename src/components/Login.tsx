import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setMessage(error ? error.message : "Login berhasil");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm p-6 space-y-4">
      <h2 className="text-2xl font-semibold">Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full border p-2"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full border p-2"
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Masuk
      </button>
      {message && <p className="text-sm text-gray-600">{message}</p>}
    </form>
  );
};

export default Login;
