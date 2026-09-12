import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/src/data/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0b0714] text-white">
        Loading technologies...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0714] text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="text-3xl font-bold">Dev Stack</h1>
        <p className="mt-2 text-gray-400">
          {technologies.length} technologies loaded successfully.
        </p>
      </main>
    </div>
  );
}

export default App;