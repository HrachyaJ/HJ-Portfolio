export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "NextBuy E-commerce",
    description: "A modern e-commerce website built with Next.js, featuring a user-friendly interface, product listings, and a secure checkout process.",
    image: "public/Next-buy.png",
    technologies: ["React", "Tailwind", "JavaScript"],
    githubUrl: "https://github.com/HrachyaJ/react-app",
    demoUrl: "https://react-app-delta-blue.vercel.app/"
  },
  {
    id: 2,
    title: "CodeWise Solutions",
    description: " A professional website for a software development company, showcasing services, portfolio, and client testimonials, designed to attract potential clients.",
    image: "public/Code-wise.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/HrachyaJ/mywebsites-ai/blob/main/codewise.html",
    demoUrl: "https://hrachyaj.github.io/mywebsites-ai/codewise.html"
  },
  {
    id: 3,
    title: "Commercity E-commerce",
    description: " A modern e-commerce website designed to provide a seamless shopping experience, featuring product listings, user authentication, and a responsive layout.",
    image: "public/Commercity.png",
    technologies: ["HTML5", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/HrachyaJ/mywebsites-ai/blob/main/commercity.html",
    demoUrl: "https://hrachyaj.github.io/mywebsites-ai/commercity.html"
  },
  {
    id: 4,
    title: "Jewelry Gems Store",
    description: "A visually stunning jewelry store website designed to showcase products, provide detailed descriptions, and facilitate easy navigation for potential customers.",
    image: "public/Jewelry-gems.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/HrachyaJ/mywebsites-ai/blob/main/jewelry-gems.html",
    demoUrl: "https://hrachyaj.github.io/mywebsites-ai/jewelry-gems.html"
  },
  {
    id: 5,
    title: "Prandella Restaurant",
    description: "A functional restaurant website showcasing menu items, reservation options, and a vibrant design to attract food enthusiasts.",
    image: "public/Prandella.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/HrachyaJ/mywebsites-ai/blob/main/restaurant-website.html",
    demoUrl: "https://hrachyaj.github.io/mywebsites-ai/restaurant-website.html"
  },
  {
    id: 6,
    title: "FightFit Gym",
    description: "A bold and dynamic fitness website built for gyms and personal trainers, designed to showcase services, client testimonials, and a call-to-action for memberships.",
    image: "public/Fight-fit.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/HrachyaJ/mywebsites-ai/blob/main/fightfit.html",
    demoUrl: "https://hrachyaj.github.io/mywebsites-ai/fightfit.html"
  }
];