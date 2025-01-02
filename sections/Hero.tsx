import Image from "next/image";
import portfolioImg from "@/public/images/portfolio-img1.png";
import heroImg from "@/public/images/memoji-computer.png";
import ArrowDown from "@/public/icons/arrow-down.svg";
import grainImg from "@/public/images/grain.jpg";
import StarIcon from "@/public/icons/star.svg";
import SparkleIcon from "@/public/icons/sparkle.svg";
import HeroOrbit from "@/components/HeroOrbit";

const Hero = () => {
  return (
    <main className="py-32 md:py-48 lg:py-56 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 -z-20 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_60%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImg.src})`,
          }}
        ></div>
        <div className="size-[680px] hero-ring"></div>
        <div className="size-[880px] hero-ring"></div>
        <div className="size-[1080px] hero-ring"></div>
        <div className="size-[1280px] hero-ring"></div>
        <div className="size-[1520px] hero-ring"></div>

        <HeroOrbit size={820} rotation={-65}>
          <StarIcon className="size-24 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={580} rotation={15}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={620} rotation={100}>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={470} rotation={-16}>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={480} rotation={80}>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={570} rotation={173}>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={750} rotation={144}>
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={770} rotation={90}>
          <div className="size-3 rounded-full bg-emerald-300/10" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={-5}>
          <div className="size-2 rounded-full bg-emerald-300/10" />
        </HeroOrbit>
        <HeroOrbit size={570} rotation={-40}>
          <div className="size-2 rounded-full bg-emerald-300/10" />
        </HeroOrbit>
      </div>
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
