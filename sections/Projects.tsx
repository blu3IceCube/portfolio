import darkSaasLandingPage from "@/public/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/public/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/public/images/ai-startup-landing-page.png";

import reactAdminDashboard from "@/public/images/admin-dashboard-react.png";
import nextStaticWebapp from "@/public/images/nextjs-static-webapp.png";
import budgetPayApp from "@/public/images/budgetPay-screenshot(2).png";
import Image from "next/image";
import CheckCircleIcon from "@/public/icons/check-circle.svg";
import ArrowUpRightIcon from "@/public/icons/arrow-up-right.svg";

const portfolioProjects = [
  {
    company: "React Js",
    year: "2023",
    title: "React Admin Dashboard App",
    results: [
      { title: "Fully mobile responsive." },
      {
        title: "Customize using 6 different themes and ligh/dark mode toggle.",
      },
      { title: "Fully functional charts with multiple routes/pages." },
    ],
    link: "https://admin-dashboard-coral-alpha.vercel.app/",
    image: reactAdminDashboard,
  },
  {
    company: "Next Js",
    year: "2023",
    title: "A Fullstack app Built in Next Js & MongoDB",
    results: [
      { title: "Fetch & cache static and dynamic data on server side." },
      {
        title: "Store and fetch data using MongoDB Database.",
      },
      { title: "Light mode to Dark mode toggler." },
    ],
    link: "https://nextjs-app-eight-xi.vercel.app/",
    image: nextStaticWebapp,
  },
  {
    company: "Figma",
    year: "2024",
    title: "Design of my Personal Project Idea - BudgetPay",
    results: [
      { title: "Unique Design with full Prototyping" },
      {
        title: "Wallet App focused on budgeting.",
      },
      {
        title:
          "Ability to connect with UPI and allocate finance in categories.",
      },
    ],
    link: "https://www.figma.com/design/NyzAGfIEmeA0mgxsmMyFv9/BudgetPay?node-id=0-1&t=e1sztoIJg0J3wcBy-1",
    image: budgetPayApp,
  },
  // {
  //   company: "Acme Corp",
  //   year: "2022",
  //   title: "Dark Saas Landing Page",
  //   results: [
  //     { title: "Enhanced user experience by 40%" },
  //     { title: "Improved site speed by 50%" },
  //     { title: "Increased mobile traffic by 35%" },
  //   ],
  //   link: "https://youtu.be/4k7IdSLxh6w",
  //   image: darkSaasLandingPage,
  // },
  // {
  //   company: "Innovative Co",
  //   year: "2021",
  //   title: "Light Saas Landing Page",
  //   results: [
  //     { title: "Boosted sales by 20%" },
  //     { title: "Expanded customer reach by 35%" },
  //     { title: "Increased brand awareness by 15%" },
  //   ],
  //   link: "https://youtu.be/7hi5zwO75yc",
  //   image: lightSaasLandingPage,
  // },
  // {
  //   company: "Quantum Dynamics",
  //   year: "2023",
  //   title: "AI Startup Landing Page",
  //   results: [
  //     { title: "Enhanced user experience by 40%" },
  //     { title: "Improved site speed by 50%" },
  //     { title: "Increased mobile traffic by 35%" },
  //   ],
  //   link: "https://youtu.be/Z7I5uSRHMHg",
  //   image: aiStartupLandingPage,
  // },
];

const Projects = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col mt-10 gap-16 md:mt-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm bg-clip-text text-transparent">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50 items-center"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>View Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:h-full lg:absolute lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
