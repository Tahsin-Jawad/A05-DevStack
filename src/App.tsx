import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-[#0b0714] text-white">
      <Navbar />
      <Hero />

      <section
        id="technologies"
        className="min-h-[400px] px-4 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold">
            Explore Technologies
          </h2>

          <p className="mt-3 text-gray-400">
            Choose the technologies you want to add to your stack.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;