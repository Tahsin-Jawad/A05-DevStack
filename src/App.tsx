import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import StackSidebar from "./components/StackSidebar";

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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [stack, setStack] = useState<Technology[]>([]);

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

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "Language",
    "Styling",
    "DevOps",
    "Tools",
  ];

  const filteredTechnologies =
    selectedCategory === "All"
      ? technologies
      : technologies.filter(
          (technology) => technology.category === selectedCategory
        );

  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack([...stack, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    
    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed from stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.error("All items removed from your stack!");
  };

  return (
    <div className="min-h-screen bg-[#0b0714] text-white">
      {/* Toast Notification Container */}
      <ToastContainer position="bottom-right" theme="dark" autoClose={3000} />

      <Navbar />

      <Hero />

      <section id="technologies" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Explore Technologies
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-400">
              Discover the tools and technologies you need to build modern,
              scalable applications.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`btn btn-sm rounded-full ${
                  selectedCategory === category
                    ? "border-0 brand-gradient text-white"
                    : "btn-outline border-white/15 text-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
            <div>
              {loading ? (
                <div className="flex justify-center py-20">
                  <span className="loading loading-spinner loading-lg"></span>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {filteredTechnologies.map((technology) => (
                    <TechnologyCard
                      key={technology.id}
                      technology={technology}
                      isAdded={stack.some((item) => item.id === technology.id)}
                      onAdd={handleAddToStack}
                    />
                  ))}
                </div>
              )}
            </div>

            <StackSidebar
              stack={stack}
              onRemove={handleRemoveFromStack}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;