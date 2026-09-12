import heroImage from "../assets/hero.png";

function Hero() {
  const scrollToTechnologies = () => {
    document
      .getElementById("technologies")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0b0714]"
    >
      <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">

        {/* Hero Content */}
        <div className="text-center lg:text-left">

          <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
            Build • Explore • Create
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <br />
            <span className="brand-gradient-text">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-400 lg:mx-0 lg:text-lg">
            Explore modern development technologies, discover
            the right tools for your projects, and build your
            own personalized technology stack.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <button
              onClick={scrollToTechnologies}
              className="btn rounded-full border-0 brand-gradient px-6 text-white"
            >
              Explore Technologies
            </button>

            <a
              href="#about"
              className="btn btn-outline rounded-full border-white/20 px-6 text-white hover:border-white hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Development technology stack"
            className="w-full max-w-lg object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;