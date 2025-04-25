import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ArrowRight, ExternalLink } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { Parallax } from "@/components/animations/parallax"

export const metadata = {
  title: "Portfolio | WebCraft Studios",
  description: "Explore our portfolio of web development projects including websites, applications, and digital solutions.",
}

const categories = [
  { id: "all", label: "All Projects" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "web-apps", label: "Web Apps" },
  { id: "corporate", label: "Corporate Sites" },
  { id: "landing-pages", label: "Landing Pages" },
]

const projects = [
  {
    id: "ecommerce-platform",
    title: "Fashion E-Commerce Platform",
    category: "ecommerce",
    description: "A full-featured e-commerce platform for a fashion brand with custom product filtering, user accounts, and secure checkout.",
    image: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    link: "/portfolio/ecommerce-platform"
  },
  {
    id: "real-estate-website",
    title: "Real Estate Listing Platform",
    category: "web-apps",
    description: "A real estate platform with property search, filtering, and interactive maps for a leading property management company.",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
    link: "/portfolio/real-estate-website"
  },
  {
    id: "fitness-application",
    title: "Fitness Tracking Application",
    category: "web-apps",
    description: "A comprehensive fitness tracking web application with workout plans, progress tracking, and social features.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Firebase", "Tailwind CSS", "Chart.js"],
    link: "/portfolio/fitness-application"
  },
  {
    id: "financial-dashboard",
    title: "Financial Analytics Dashboard",
    category: "web-apps",
    description: "A real-time financial dashboard for investors with stock tracking, portfolio management, and predictive analytics.",
    image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Next.js", "D3.js", "Express", "MongoDB"],
    link: "/portfolio/financial-dashboard"
  },
  {
    id: "corporate-website",
    title: "Corporate Brand Website",
    category: "corporate",
    description: "A modern corporate website with custom animations, multilingual support, and integrated blog system.",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Sanity CMS"],
    link: "/portfolio/corporate-website"
  },
  {
    id: "saas-landing-page",
    title: "SaaS Product Landing Page",
    category: "landing-pages",
    description: "A high-converting landing page for a SaaS product with interactive demos and integrated signup system.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Stripe"],
    link: "/portfolio/saas-landing-page"
  },
  {
    id: "restaurant-ordering",
    title: "Restaurant Online Ordering",
    category: "ecommerce",
    description: "An online ordering system for a chain of restaurants with real-time order tracking and payment processing.",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Node.js", "Socket.io", "Stripe"],
    link: "/portfolio/restaurant-ordering"
  },
  {
    id: "nonprofit-website",
    title: "Nonprofit Organization Website",
    category: "corporate",
    description: "A website for a nonprofit organization with donation processing, event management, and volunteer signup.",
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "Sanity CMS"],
    link: "/portfolio/nonprofit-website"
  },
  {
    id: "educational-platform",
    title: "Educational Learning Platform",
    category: "web-apps",
    description: "An interactive learning platform with course management, quizzes, and student progress tracking.",
    image: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Django", "PostgreSQL", "AWS"],
    link: "/portfolio/educational-platform"
  }
]

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <Badge className="mb-6">Our Portfolio</Badge>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter mb-6">
                Our Work Speaks for Itself
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8">
                Explore our showcase of web development projects that we've delivered for clients across various industries.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <FadeIn>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="flex flex-wrap justify-center mb-12 gap-2">
                {categories.map(category => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {categories.map(category => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects
                      .filter(project => category.id === "all" || project.category === category.id)
                      .map((project, index) => (
                        <FadeIn key={project.id} delay={0.1 * index} className="group">
                          <Link href={project.link} className="block h-full">
                            <div className="relative overflow-hidden rounded-lg group-hover:shadow-xl transition-all duration-300 h-full flex flex-col bg-card border border-border">
                              <div className="aspect-[16/9] relative">
                                <Image
                                  src={project.image}
                                  alt={project.title}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                              </div>
                              <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                  {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                  {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto mb-4">
                                  {project.technologies.map((tech, i) => (
                                    <Badge key={i} variant="secondary" className="font-normal">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                                <div className="flex items-center text-sm text-primary font-medium">
                                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        </FadeIn>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </FadeIn>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="mb-4">Featured Case Study</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                E-Commerce Success Story
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Learn how we helped a fashion retailer increase their online sales by 200%.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="E-Commerce Platform Case Study"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <h3 className="text-2xl font-bold mb-4">Fashion E-Commerce Platform</h3>
                <p className="text-muted-foreground mb-6">
                  A high-end fashion retailer approached us to redesign their outdated e-commerce platform. 
                  The existing site had poor performance, low conversion rates, and wasn't mobile-friendly.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold mb-1">Challenges:</h4>
                    <ul className="list-disc list-inside text-muted-foreground pl-4 space-y-1">
                      <li>High cart abandonment rate (80%)</li>
                      <li>Poor site performance (7s load time)</li>
                      <li>Non-responsive on mobile devices</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-1">Solutions:</h4>
                    <ul className="list-disc list-inside text-muted-foreground pl-4 space-y-1">
                      <li>Built a new platform using Next.js</li>
                      <li>Implemented responsive design</li>
                      <li>Optimized checkout flow</li>
                      <li>Added personalized recommendations</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-1">Results:</h4>
                    <ul className="list-disc list-inside text-muted-foreground pl-4 space-y-1">
                      <li>200% increase in online sales</li>
                      <li>50% reduction in cart abandonment</li>
                      <li>2s average page load time</li>
                      <li>40% increase in mobile conversions</li>
                    </ul>
                  </div>
                </div>
                
                <Button asChild>
                  <Link href="/portfolio/ecommerce-platform">
                    Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 z-0" />
        <Parallax speed={0.1} className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </Parallax>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <Badge variant="outline" className="mb-6">Start Your Project</Badge>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Create Your Success Story?
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground mb-8 text-lg">
                Let's discuss how we can help you achieve your business goals with a custom web solution.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}