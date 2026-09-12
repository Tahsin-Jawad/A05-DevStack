import { useEffect, useState } from "react";
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
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      return;
    }

    setStack([...stack, technology]);
  };

  const handleRemoveFromStack = (id: string) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <div className="min-h-screen bg-[#0b0714] text-white">
      <Navbar />

      <Hero />

      <section
        id="technologies"
        className="px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Explore Technologies
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-400">
              Discover the tools and technologies you need to build
              modern, scalable applications.
            </p>
          </div>

          {/* Category Filter */}
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

          {/* Technologies + Your Stack */}
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
            {/* Technology Cards */}
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
                      isAdded={stack.some(
                        (item) => item.id === technology.id
                      )}
                      onAdd={handleAddToStack}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Your Stack Sidebar */}
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