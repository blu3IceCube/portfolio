import Image from "next/image";
import portfolioImg from "@/public/images/portfolio-img1.png";
import heroImg from "@/public/images/memoji-computer.png";
import ArrowDown from "@/public/icons/arrow-down.svg";

const Hero = () => {
  return (
    <main className="py-32 md:py-48 lg:py-60">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <Image src={heroImg} className="size-[100px]" alt="portfolio-img" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Available for new opportunitites
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional Web Applications
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performance web applications. Let's discuss your dream project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-12 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-12 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let's connect</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
