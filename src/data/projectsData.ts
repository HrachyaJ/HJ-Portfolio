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
    image: "/Next-buy.png",
    technologies: ["React.js", "TailwindCSS", "JavaScript"],
    githubUrl: "https://github.com/HrachyaJ/react-app",
    demoUrl: "https://react-app-delta-blue.vercel.app/"
  },
  {
    id: 2,
    title: "CodeWise Solutions",
    description: " A professional website for a software development company, showcasing services, portfolio, and client testimonials, designed to attract potential clients.",
    image: "/Code-wise.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/HrachyaJ/mywebsites-ai/blob/main/codewise.html",
    demoUrl: "https://hrachyaj.github.io/mywebsites-ai/codewise.html"
  },
  {
    id: 3,
    title: "Commercity E-commerce",
    description: " A modern e-commerce website designed to provide a seamless shopping experience, featuring product listings, user authentication, and a responsive layout.",
    image: "/Commercity.png",
    technologies: ["HTML5", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/HrachyaJ/mywebsites-ai/blob/main/commercity.html",
    demoUrl: "https://hrachyaj.github.io/mywebsites-ai/commercity.html"
  },
  {
    id: 4,
    title: "Jewelry Gems Store",
    description: "A visually stunning jewelry store website designed to showcase products, provide detailed descriptions, and facilitate easy navigation for potential customers.",
    image: "/Jewelry-gems.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/HrachyaJ/mywebsites-ai/blob/main/jewelry-gems.html",
    demoUrl: "https://hrachyaj.github.io/mywebsites-ai/jewelry-gems.html"
  },
  {
    id: 5,
    title: "Prandella Restaurant",
    description: "A functional restaurant website showcasing menu items, reservation options, and a vibrant design to attract food enthusiasts.",
    image: "/Prandella.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/HrachyaJ/mywebsites-ai/blob/main/restaurant-website.html",
    demoUrl: "https://hrachyaj.github.io/mywebsites-ai/restaurant-website.html"
  },
  {
    id: 6,
    title: "FightFit Gym",
    description: "A bold and dynamic fitness website built for gyms and personal trainers, designed to showcase services, client testimonials, and a call-to-action for memberships.",
    image: "/Fight-fit.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/HrachyaJ/mywebsites-ai/blob/main/fightfit.html",
    demoUrl: "https://hrachyaj.github.io/mywebsites-ai/fightfit.html"
  },
  {
    id: 7,
    title: "Web Development Agency Website",
    description: "A professional website for a web development agency, showcasing services, portfolio, and client testimonials, designed to attract potential clients.",
    image: "/wip-solutions.png",
    technologies: ["Next.js", "TailwindCSS", "TypeScript"],
    githubUrl: "https://github.com/HrachyaJ/agency-website",
    demoUrl: "https://wip-solutions.netlify.app/"
  },
  {
    id: 8,
    title: "Amazon Clone",
    description: "A clone of the popular e-commerce platform Amazon, featuring product listings, a shopping cart functionality, and ability to place an order and track it.",
    image: "/amazon.png",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/HrachyaJ/amazon",
    demoUrl: "https://amazon-hj.netlify.app"
  },
  {
    id: 9,
    title: "Pixel Grid - Collaborative Drawing App",
    description: "A fun and interactive pixel grid application where users can collaboratively draw and create pixel art in real-time.",
    image: "/pixel-grid.png",
    technologies: ["Node.js", "Express", "HTML5", "CSS3"],
    githubUrl: "https://github.com/HrachyaJ/pixel-grid",
    demoUrl: "https://pixel-grid.onrender.com/"
  }
];
