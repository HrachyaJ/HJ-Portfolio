import { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// export const metadata: Metadata = {
//   title: "Contact Us | WebCraft Studios",
//   description: "Get in touch with WebCraft Studios for your web development projects. We're ready to help you transform your online presence.",
// }

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <Badge className="mb-6">Contact Us</Badge>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter mb-6">
                Let's Start a Conversation
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8">
                Have a project in mind? Get in touch with us to discuss how we can help bring your vision to life.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeIn direction="left">
              <ContactForm />
            </FadeIn>

            {/* Contact Info */}
            <FadeIn direction="right">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-8 mb-12">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Office Location</h3>
                        <p className="text-muted-foreground">
                          123 Web Lane<br />
                          Digital City, CA 94103<br />
                          United States
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                        <p className="text-muted-foreground">
                          General Inquiries: <a href="mailto:info@webcraftstudios.com" className="text-primary hover:underline">info@webcraftstudios.com</a><br />
                          Support: <a href="mailto:support@webcraftstudios.com" className="text-primary hover:underline">support@webcraftstudios.com</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Phone</h3>
                        <p className="text-muted-foreground">
                          Main: <a href="tel:+15551234567" className="text-primary hover:underline">+1 (555) 123-4567</a><br />
                          Support: <a href="tel:+15559876543" className="text-primary hover:underline">+1 (555) 987-6543</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full shrink-0">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Working Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                          Saturday & Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/5 p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-lg mb-3">Need Immediate Assistance?</h3>
                  <p className="text-muted-foreground mb-4">
                    For urgent inquiries, please call our customer support line for immediate assistance.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="tel:+15551234567">
                      Call Us Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="mb-4">FAQ</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our services and process.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <FadeIn delay={0.1}>
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">What is your typical project timeline?</h3>
                  <p className="text-muted-foreground">
                    Project timelines vary depending on complexity and scope. A typical website project takes 4-8 weeks from start to finish, while more complex web applications may take 8-12 weeks or longer.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">How much does a website cost?</h3>
                  <p className="text-muted-foreground">
                    We customize our solutions based on your specific needs. Website costs typically range from $5,000 for basic websites to $25,000+ for complex e-commerce platforms or web applications. We provide detailed proposals after understanding your requirements.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Do you offer website maintenance services?</h3>
                  <p className="text-muted-foreground">
                    Yes, we offer ongoing maintenance packages to keep your website secure, up-to-date, and performing optimally. Our maintenance services include regular updates, security monitoring, backups, and technical support.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Can you help with an existing website?</h3>
                  <p className="text-muted-foreground">
                    Absolutely! We can help improve, redesign, or optimize your existing website. We start with a comprehensive audit to identify areas for improvement and recommend solutions based on your goals.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.5}>
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">What information do you need to start a project?</h3>
                  <p className="text-muted-foreground">
                    To get started, we'll need information about your business, target audience, project goals, timeline, budget, and any specific design or functionality requirements. Our discovery process helps gather all necessary information.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="mb-4">Visit Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Location
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Stop by our office to meet our team and discuss your project in person.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="aspect-[16/9] w-full rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.07619082286!2d-122.43105646246944!3d37.77679863960069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1656522071529!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}