import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Clock, HeartHandshake, Lightbulb, Code, Target, Trophy } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { Parallax } from "@/components/animations/parallax"

export const metadata = {
  title: "About Us | WebCraft Studios",
  description: "Learn about WebCraft Studios, our team of expert developers, our values, and our approach to web development.",
}

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in web development, Alex founded WebCraft Studios to help businesses create impactful digital experiences.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Sarah Williams",
    role: "Lead Designer",
    bio: "Sarah brings 10+ years of UI/UX design experience, having previously worked with major tech companies on user-centered design solutions.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Michael Chen",
    role: "Technical Director",
    bio: "Michael is a full-stack developer with expertise in React, Node.js, and cloud architecture. He leads our technical implementations.",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Emily Rodriguez",
    role: "Project Manager",
    bio: "Emily ensures our projects run smoothly, on time, and within budget. She has managed over 50 successful web projects.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "David Wilson",
    role: "Frontend Developer",
    bio: "David specializes in creating responsive, accessible, and performant user interfaces using modern frontend technologies.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Lisa Zhang",
    role: "Backend Developer",
    bio: "Lisa is our database and API expert, with deep knowledge of server-side architecture and security best practices.",
    image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
]

const values = [
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Innovation",
    description: "We stay at the forefront of web technology, constantly exploring new approaches to deliver cutting-edge solutions."
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: "Partnership",
    description: "We view ourselves as partners in your success, working collaboratively to achieve your business goals."
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Excellence",
    description: "We are committed to delivering excellence in every aspect of our work, from design to development to support."
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Reliability",
    description: "We value your time and trust, delivering projects on schedule and providing dependable ongoing support."
  }
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <Badge className="mb-6">About Us</Badge>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter mb-6">
                The Team Behind Your Digital Success
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8">
                We're a passionate team of designers, developers, and strategists dedicated to crafting exceptional web experiences.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="WebCraft Studios Team"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <Badge className="mb-4">Our Story</Badge>
                <h2 className="text-3xl font-bold mb-4">How We Started</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2018, WebCraft Studios began with a simple mission: to help businesses succeed online through exceptional web development.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our founder, Alex Johnson, recognized that many businesses were struggling with outdated websites that weren't delivering results. He assembled a team of talented developers and designers who shared his passion for creating impactful digital experiences.
                </p>
                <p className="text-muted-foreground mb-4">
                  What started as a small team of three has grown into a full-service web development agency with a portfolio of successful projects across various industries.
                </p>
                <p className="text-muted-foreground">
                  Today, we continue to be driven by our original mission, helping businesses of all sizes transform their online presence and achieve tangible results.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="mb-4">Our Values</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Drives Us
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our core values guide how we work and shape every project we undertake.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={0.1 * index}>
                <Card className="bg-card border-border h-full hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 bg-primary/10 p-4 rounded-full">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="mb-4">Our Team</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet the Experts
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our talented team brings together diverse skills and years of experience.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <FadeIn key={member.name} delay={0.1 * index}>
                <Card className="bg-card border-border overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[3/2] relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="mb-4">Our Process</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How We Work
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our proven development process ensures successful project delivery every time.
              </p>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Connect the steps with a line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-24 py-6 relative">
              <FadeIn direction="left">
                <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                  <div className="bg-primary/10 rounded-lg p-8 md:p-12 md:text-right order-1">
                    <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground text-xl font-bold">1</div>
                    <h3 className="text-2xl font-bold mb-3">Discovery</h3>
                    <p className="text-muted-foreground">
                      We start by understanding your business goals, target audience, and project requirements. This phase includes research, strategy development, and planning.
                    </p>
                  </div>
                  <div className="hidden md:flex items-center justify-center order-2">
                    <div className="w-16 h-16 bg-primary rounded-full z-10 flex items-center justify-center">
                      <Lightbulb className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn direction="right">
                <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                  <div className="hidden md:flex items-center justify-center order-1">
                    <div className="w-16 h-16 bg-primary rounded-full z-10 flex items-center justify-center">
                      <Code className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-8 md:p-12 order-2">
                    <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground text-xl font-bold">2</div>
                    <h3 className="text-2xl font-bold mb-3">Design & Development</h3>
                    <p className="text-muted-foreground">
                      Our designers create mockups while our developers begin building the technical framework. We follow an iterative approach with regular client feedback.
                    </p>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn direction="left">
                <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                  <div className="bg-primary/10 rounded-lg p-8 md:p-12 md:text-right order-1">
                    <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground text-xl font-bold">3</div>
                    <h3 className="text-2xl font-bold mb-3">Testing & Launch</h3>
                    <p className="text-muted-foreground">
                      We thoroughly test all functionality, fix any issues, and optimize performance before launching your website. Our quality assurance process ensures a flawless user experience.
                    </p>
                  </div>
                  <div className="hidden md:flex items-center justify-center order-2">
                    <div className="w-16 h-16 bg-primary rounded-full z-10 flex items-center justify-center">
                      <Target className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn direction="right">
                <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                  <div className="hidden md:flex items-center justify-center order-1">
                    <div className="w-16 h-16 bg-primary rounded-full z-10 flex items-center justify-center">
                      <Trophy className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-8 md:p-12 order-2">
                    <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground text-xl font-bold">4</div>
                    <h3 className="text-2xl font-bold mb-3">Support & Growth</h3>
                    <p className="text-muted-foreground">
                      Our relationship doesn't end at launch. We provide ongoing support, maintenance, and optimization to ensure your website continues to deliver results.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-muted/30">
        <Parallax speed={0.1} className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </Parallax>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <Badge variant="outline" className="mb-6">Get in Touch</Badge>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Work with Our Team?
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground mb-8 text-lg">
                Contact us today to discuss your project and discover how our team can help you achieve your digital goals.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contact Our Team <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}