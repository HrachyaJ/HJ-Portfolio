import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Check, X } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { Parallax } from "@/components/animations/parallax"

export const metadata = {
  title: "Pricing | WebCraft Studios",
  description: "Explore our pricing plans for web development, design, and maintenance services. Find the perfect package for your business.",
}

// Define the pricing plans
const basicFeatures = [
  { name: "Responsive Design", included: true },
  { name: "Up to 5 Pages", included: true },
  { name: "Contact Form", included: true },
  { name: "Basic SEO Setup", included: true },
  { name: "Mobile Optimization", included: true },
  { name: "Social Media Integration", included: true },
  { name: "Content Management System", included: true },
  { name: "1 Month of Support", included: true },
  { name: "Custom Animations", included: false },
  { name: "E-commerce Functionality", included: false },
  { name: "Custom Integrations", included: false },
  { name: "Advanced SEO Optimization", included: false },
]

const standardFeatures = [
  { name: "Responsive Design", included: true },
  { name: "Up to 10 Pages", included: true },
  { name: "Contact Form", included: true },
  { name: "Standard SEO Setup", included: true },
  { name: "Mobile Optimization", included: true },
  { name: "Social Media Integration", included: true },
  { name: "Content Management System", included: true },
  { name: "3 Months of Support", included: true },
  { name: "Custom Animations", included: true },
  { name: "Basic E-commerce (up to 20 products)", included: true },
  { name: "Custom Integrations", included: false },
  { name: "Advanced SEO Optimization", included: false },
]

const premiumFeatures = [
  { name: "Responsive Design", included: true },
  { name: "Unlimited Pages", included: true },
  { name: "Contact Form", included: true },
  { name: "Advanced SEO Setup", included: true },
  { name: "Mobile Optimization", included: true },
  { name: "Social Media Integration", included: true },
  { name: "Content Management System", included: true },
  { name: "6 Months of Support", included: true },
  { name: "Custom Animations", included: true },
  { name: "Full E-commerce Functionality", included: true },
  { name: "Custom Integrations", included: true },
  { name: "Advanced SEO Optimization", included: true },
]

// FAQs
const faqs = [
  {
    question: "What is included in your web development packages?",
    answer: "Our web development packages include design, development, responsive optimization, SEO basics, and post-launch support. Specific features vary by package level, with higher tiers offering more pages, functionality, and support duration."
  },
  {
    question: "How long does it take to complete a website?",
    answer: "Project timelines vary depending on complexity and scope. Generally, a basic website takes 4-6 weeks, a standard website 6-8 weeks, and a premium website or web application 8-12 weeks. We'll provide a specific timeline during our initial consultation."
  },
  {
    question: "Do you offer custom solutions beyond these packages?",
    answer: "Absolutely! These packages are starting points. We specialize in creating custom solutions tailored to your specific business needs. Contact us for a custom quote for more complex projects like web applications, enterprise solutions, or specialized e-commerce platforms."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit cards, bank transfers, and PayPal. For standard projects, we typically require a 50% deposit to begin work, with the remainder due upon completion. For larger projects, we can arrange milestone-based payment schedules."
  },
  {
    question: "Can I upgrade my package later?",
    answer: "Yes, you can upgrade to a higher package at any time. We'll assess the current state of your project and provide a quote for the additional features and services you want to add."
  },
  {
    question: "What happens after my support period ends?",
    answer: "After your included support period ends, you can purchase one of our maintenance packages or opt for hourly support as needed. We offer various ongoing support options to ensure your website remains secure, up-to-date, and performing optimally."
  }
]

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <Badge className="mb-6">Pricing</Badge>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter mb-6">
                Transparent Pricing for Quality Web Development
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8">
                Choose the perfect package for your business needs or contact us for a custom solution.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <Tabs defaultValue="monthly" className="w-full max-w-xs mx-auto">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="annually">Annually <span className="ml-1.5 text-xs bg-primary/20 text-primary px-1.5 py-0.5 rounded-sm">Save 20%</span></TabsTrigger>
                </TabsList>
              </Tabs>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <FadeIn direction="up" delay={0.1}>
              <Card className="border-border hover:shadow-md transition-all duration-300 h-full">
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">Basic</Badge>
                  </div>
                  <CardTitle className="text-3xl font-bold">$4,999</CardTitle>
                  <p className="text-muted-foreground">Perfect for small businesses and startups</p>
                </CardHeader>
                <CardContent className="pb-6 space-y-4">
                  <ul className="space-y-2">
                    {basicFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground/50 mr-2 shrink-0 mt-0.5" />
                        )}
                        <span className={!feature.included ? "text-muted-foreground/50" : ""}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </FadeIn>

            {/* Standard Plan */}
            <FadeIn direction="up" delay={0.2}>
              <Card className="border-primary relative h-full overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge>Most Popular</Badge>
                  </div>
                  <CardTitle className="text-3xl font-bold">$8,999</CardTitle>
                  <p className="text-muted-foreground">Ideal for growing businesses</p>
                </CardHeader>
                <CardContent className="pb-6 space-y-4">
                  <ul className="space-y-2">
                    {standardFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground/50 mr-2 shrink-0 mt-0.5" />
                        )}
                        <span className={!feature.included ? "text-muted-foreground/50" : ""}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </FadeIn>

            {/* Premium Plan */}
            <FadeIn direction="up" delay={0.3}>
              <Card className="border-border hover:shadow-md transition-all duration-300 h-full">
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">Premium</Badge>
                  </div>
                  <CardTitle className="text-3xl font-bold">$14,999</CardTitle>
                  <p className="text-muted-foreground">For businesses requiring advanced solutions</p>
                </CardHeader>
                <CardContent className="pb-6 space-y-4">
                  <ul className="space-y-2">
                    {premiumFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground/50 mr-2 shrink-0 mt-0.5" />
                        )}
                        <span className={!feature.included ? "text-muted-foreground/50" : ""}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Need a custom solution? We offer tailored packages to meet your specific requirements.
              </p>
              <Button variant="secondary" asChild>
                <Link href="/contact">
                  Request a Custom Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Maintenance Plans Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="mb-4">Website Maintenance</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Keep Your Website Running Smoothly
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our maintenance packages ensure your website stays secure, up-to-date, and optimized.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Maintenance */}
            <FadeIn direction="up" delay={0.1}>
              <Card className="border-border hover:shadow-md transition-all duration-300 h-full">
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">Basic Maintenance</Badge>
                  </div>
                  <CardTitle className="text-3xl font-bold">$99<span className="text-base font-normal text-muted-foreground">/month</span></CardTitle>
                  <p className="text-muted-foreground">Essential maintenance for small websites</p>
                </CardHeader>
                <CardContent className="pb-6 space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Monthly CMS Updates</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Security Monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Weekly Backups</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Uptime Monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>1 Hour of Content Updates</span>
                    </li>
                    <li className="flex items-start">
                      <X className="h-5 w-5 text-muted-foreground/50 mr-2 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground/50">Performance Optimization</span>
                    </li>
                    <li className="flex items-start">
                      <X className="h-5 w-5 text-muted-foreground/50 mr-2 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground/50">Monthly Analytics Reports</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/contact">
                      Select Plan
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </FadeIn>

            {/* Standard Maintenance */}
            <FadeIn direction="up" delay={0.2}>
              <Card className="border-primary relative h-full overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge>Popular</Badge>
                  </div>
                  <CardTitle className="text-3xl font-bold">$199<span className="text-base font-normal text-muted-foreground">/month</span></CardTitle>
                  <p className="text-muted-foreground">Comprehensive maintenance for business websites</p>
                </CardHeader>
                <CardContent className="pb-6 space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Bi-weekly CMS Updates</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Advanced Security Monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Daily Backups</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Uptime Monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>3 Hours of Content Updates</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Quarterly Performance Optimization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Monthly Analytics Reports</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/contact">
                      Select Plan
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </FadeIn>

            {/* Premium Maintenance */}
            <FadeIn direction="up" delay={0.3}>
              <Card className="border-border hover:shadow-md transition-all duration-300 h-full">
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">Premium Maintenance</Badge>
                  </div>
                  <CardTitle className="text-3xl font-bold">$399<span className="text-base font-normal text-muted-foreground">/month</span></CardTitle>
                  <p className="text-muted-foreground">Enterprise-level support and maintenance</p>
                </CardHeader>
                <CardContent className="pb-6 space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Weekly CMS Updates</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>24/7 Security Monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Real-time Backups</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Priority Uptime Monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>8 Hours of Content Updates</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Monthly Performance Optimization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Weekly Analytics Reports</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/contact">
                      Select Plan
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="mb-4">FAQ</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our pricing and services.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <FadeIn key={index} delay={0.1 * index}>
                  <Card className="bg-card border">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-semibold">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn delay={0.4}>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Still have questions? Contact our team for more information.
              </p>
              <Button asChild>
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
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
              <Badge variant="outline" className="mb-6">Let's Get Started</Badge>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Digital Presence?
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground mb-8 text-lg">
                Contact us today to discuss your project requirements and get a personalized quote.
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