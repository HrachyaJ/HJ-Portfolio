import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Laptop, BarChart, Database, Paintbrush, Star } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { Parallax } from "@/components/animations/parallax"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 md:pt-52 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10 z-0" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm font-medium">
                Web Development Agency
              </Badge>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter mb-6">
                We Build <span className="text-primary">Digital Experiences</span> That Transform Businesses
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our team of expert developers and designers create high-performance, 
                user-friendly websites and applications that drive growth.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
        
        <Parallax speed={0.2} className="absolute -bottom-4 left-0 right-0 z-0 hidden md:block">
          <div className="h-20 w-full bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-3xl" />
        </Parallax>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="mb-4">Our Services</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What We Offer
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide end-to-end web development solutions tailored to your business needs.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <Code className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                  <p className="text-muted-foreground">
                    Custom web applications built with modern technologies and best practices.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <Laptop className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
                  <p className="text-muted-foreground">
                    Websites that look and function perfectly on all devices and screen sizes.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <BarChart className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
                  <p className="text-muted-foreground">
                    Strategic optimization to improve visibility and ranking in search engines.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <Database className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">E-Commerce Solutions</h3>
                  <p className="text-muted-foreground">
                    Feature-rich online stores with secure payment processing and inventory management.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.5}>
              <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <Paintbrush className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                  <p className="text-muted-foreground">
                    Intuitive user interfaces and engaging user experiences that convert visitors.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.6}>
              <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <Star className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Maintenance & Support</h3>
                  <p className="text-muted-foreground">
                    Ongoing technical support, updates, and optimization for your website.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} className="mt-12 text-center">
            <Button asChild>
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 md:py-32">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="mb-4">Our Projects</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Work
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Take a look at some of our recent projects we've delivered for our clients.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FadeIn delay={0.1} className="group">
              <Link href="/portfolio/ecommerce-platform" className="block h-full">
                <div className="relative overflow-hidden rounded-lg group-hover:shadow-xl transition-all duration-300 h-full">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="E-Commerce Platform"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white text-lg font-semibold mb-1">E-Commerce Platform</h3>
                      <p className="text-white/80 text-sm">Online Store Development</p>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.2} className="group">
              <Link href="/portfolio/real-estate-website" className="block h-full">
                <div className="relative overflow-hidden rounded-lg group-hover:shadow-xl transition-all duration-300 h-full">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Real Estate Website"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white text-lg font-semibold mb-1">Real Estate Website</h3>
                      <p className="text-white/80 text-sm">Property Listing Platform</p>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.3} className="group">
              <Link href="/portfolio/fitness-application" className="block h-full">
                <div className="relative overflow-hidden rounded-lg group-hover:shadow-xl transition-all duration-300 h-full">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Fitness Application"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white text-lg font-semibold mb-1">Fitness Application</h3>
                      <p className="text-white/80 text-sm">Mobile-First Web App</p>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/portfolio">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="mb-4">Testimonials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Hear what our clients have to say about working with us.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <Card className="border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex mb-4 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mb-4 text-foreground">
                    "WebCraft Studios transformed our online presence with a stunning website that perfectly represents our brand. Their attention to detail and technical expertise is unmatched."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                      <Image
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="John Smith"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">John Smith</p>
                      <p className="text-sm text-muted-foreground">CEO, TechStart Inc.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex mb-4 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mb-4 text-foreground">
                    "Working with WebCraft was a game-changer for our business. They delivered an e-commerce platform that increased our sales by 200% in the first three months."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                      <Image
                        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Sarah Johnson"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">Founder, StyleBoutique</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card className="border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex mb-4 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mb-4 text-foreground">
                    "Not only did they build a beautiful website, but they also optimized it for SEO which significantly improved our search rankings and organic traffic."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                      <Image
                        src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Mark Wilson"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Mark Wilson</p>
                      <p className="text-sm text-muted-foreground">Marketing Director, GrowFast</p>
                    </div>
                  </div>
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
              <Badge variant="outline" className="mb-6">Let's Work Together</Badge>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Digital Presence?
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground mb-8 text-lg">
                Contact us today to discuss your project and discover how we can help your business grow online.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}