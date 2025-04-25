import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Code, 
  Laptop, 
  BarChart, 
  Database, 
  Paintbrush, 
  Star, 
  ShoppingCart, 
  Globe,
  Cloud,
  Smartphone,
  LineChart,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { Parallax } from "@/components/animations/parallax"

export const metadata = {
  title: "Services | WebCraft Studios",
  description: "Explore our comprehensive web development services including custom website development, e-commerce solutions, UI/UX design, and more.",
}

const services = [
  {
    id: "web-development",
    icon: <Code className="h-10 w-10 mb-4 text-primary" />,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies and best practices.",
    features: [
      "Custom website development",
      "Progressive Web Applications (PWAs)",
      "Single Page Applications (SPAs)",
      "Full-stack development",
      "API development and integration",
      "Database design and optimization",
      "Performance optimization",
      "Security implementation"
    ],
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "responsive-design",
    icon: <Laptop className="h-10 w-10 mb-4 text-primary" />,
    title: "Responsive Design",
    description: "Websites that look and function perfectly on all devices and screen sizes.",
    features: [
      "Mobile-first design approach",
      "Cross-browser compatibility",
      "Responsive frameworks (Bootstrap, Tailwind CSS)",
      "Adaptive layouts",
      "Touch-friendly interfaces",
      "Retina display optimization",
      "Fluid typography",
      "Device testing and QA"
    ],
    image: "https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "seo-optimization",
    icon: <BarChart className="h-10 w-10 mb-4 text-primary" />,
    title: "SEO Optimization",
    description: "Strategic optimization to improve visibility and ranking in search engines.",
    features: [
      "Technical SEO audits",
      "On-page optimization",
      "Keyword research and strategy",
      "Content optimization",
      "Schema markup implementation",
      "Site speed optimization",
      "Mobile SEO",
      "Local SEO"
    ],
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "ecommerce-solutions",
    icon: <Database className="h-10 w-10 mb-4 text-primary" />,
    title: "E-Commerce Solutions",
    description: "Feature-rich online stores with secure payment processing and inventory management.",
    features: [
      "Custom e-commerce development",
      "Shopping cart systems",
      "Payment gateway integration",
      "Inventory management systems",
      "Order processing workflows",
      "Customer account management",
      "Product recommendation engines",
      "Analytics and reporting"
    ],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "ui-ux-design",
    icon: <Paintbrush className="h-10 w-10 mb-4 text-primary" />,
    title: "UI/UX Design",
    description: "Intuitive user interfaces and engaging user experiences that convert visitors.",
    features: [
      "User research and personas",
      "Wireframing and prototyping",
      "Interactive design",
      "Usability testing",
      "Information architecture",
      "Conversion rate optimization",
      "Accessibility compliance",
      "Design systems"
    ],
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "maintenance-support",
    icon: <Star className="h-10 w-10 mb-4 text-primary" />,
    title: "Maintenance & Support",
    description: "Ongoing technical support, updates, and optimization for your website.",
    features: [
      "Regular website updates",
      "Security monitoring",
      "Performance monitoring",
      "Backup management",
      "Technical support",
      "Content updates",
      "Feature enhancements",
      "Bug fixes and troubleshooting"
    ],
    image: "https://images.pexels.com/photos/4473871/pexels-photo-4473871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <Badge className="mb-6">Our Services</Badge>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter mb-6">
                Tailored Web Solutions for Modern Businesses
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8">
                We offer a comprehensive range of web development services designed to help your business grow online.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Core Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide end-to-end web development solutions tailored to your business needs.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeIn key={service.id} delay={0.1 * index}>
                <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    {service.icon}
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <Button variant="outline" className="mt-auto" asChild>
                      <Link href={`#${service.id}`}>
                        Learn More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Tabs Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <Badge className="mb-4">Explore Our Services</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Detailed Service Offerings
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Learn more about how our services can benefit your business.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Tabs defaultValue="web-development" className="w-full">
              <TabsList className="flex flex-wrap justify-center mb-8 gap-2">
                {services.map(service => (
                  <TabsTrigger key={service.id} value={service.id}>
                    {service.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {services.map(service => (
                <TabsContent key={service.id} value={service.id} id={service.id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button asChild>
                        <Link href="/contact">
                          Get Started <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    
                    <div className="order-1 md:order-2 relative h-72 md:h-96 rounded-lg overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </FadeIn>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <Badge className="mb-4">Our Tech Stack</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Technologies We Work With
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We use cutting-edge technologies to build fast, secure, and scalable web solutions.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            <FadeIn delay={0.1}>
              <Card className="p-6 text-center hover:shadow-md transition-all duration-300">
                <CardContent className="p-0">
                  <Code className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-1">React</h3>
                  <p className="text-sm text-muted-foreground">Frontend Development</p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.15}>
              <Card className="p-6 text-center hover:shadow-md transition-all duration-300">
                <CardContent className="p-0">
                  <Code className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-1">Next.js</h3>
                  <p className="text-sm text-muted-foreground">Full-stack Framework</p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="p-6 text-center hover:shadow-md transition-all duration-300">
                <CardContent className="p-0">
                  <Code className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-1">Node.js</h3>
                  <p className="text-sm text-muted-foreground">Backend Development</p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.25}>
              <Card className="p-6 text-center hover:shadow-md transition-all duration-300">
                <CardContent className="p-0">
                  <Paintbrush className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-1">Tailwind CSS</h3>
                  <p className="text-sm text-muted-foreground">Styling Framework</p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card className="p-6 text-center hover:shadow-md transition-all duration-300">
                <CardContent className="p-0">
                  <Database className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-1">MongoDB</h3>
                  <p className="text-sm text-muted-foreground">Database</p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.35}>
              <Card className="p-6 text-center hover:shadow-md transition-all duration-300">
                <CardContent className="p-0">
                  <Database className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-1">PostgreSQL</h3>
                  <p className="text-sm text-muted-foreground">Database</p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Card className="p-6 text-center hover:shadow-md transition-all duration-300">
                <CardContent className="p-0">
                  <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-1">Shopify</h3>
                  <p className="text-sm text-muted-foreground">E-Commerce</p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.45}>
              <Card className="p-6 text-center hover:shadow-md transition-all duration-300">
                <CardContent className="p-0">
                  <Cloud className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-1">AWS</h3>
                  <p className="text-sm text-muted-foreground">Cloud Services</p>
                </CardContent>
              </Card>
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
                Ready to Bring Your Vision to Life?
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground mb-8 text-lg">
                Contact us today to discuss your project requirements and get a free consultation.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}