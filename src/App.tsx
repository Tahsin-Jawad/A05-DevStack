import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export type Technology = {
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
    import("./data/technologies.json")
      .then((module) => {
        setTechnologies(module.default);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load technologies:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0714] text-white">
      <Navbar />
      <Hero />

      <section
        id="technologies"
        className="px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold">
            Explore Technologies
          </h2>

          <p className="mt-3 text-gray-400">
            {technologies.length} technologies available.
          </p>

          {loading ? (
            <div className="mt-10 flex justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <p className="mt-8 text-gray-400">
              Technology data loaded successfully.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;