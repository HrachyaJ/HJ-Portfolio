import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"

export const metadata = {
  title: "Blog | WebCraft Studios",
  description: "Explore our blog for insights on web development, design trends, and digital marketing strategies.",
}

// Sample blog posts data
const featuredPosts = [
  {
    id: 1,
    title: "10 Web Design Trends to Watch in 2025",
    excerpt: "Explore the cutting-edge design trends that are shaping the web in 2025, from 3D elements to immersive scrolling experiences.",
    date: "May 15, 2025",
    author: "Sarah Williams",
    category: "Design",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "web-design-trends-2025"
  },
  {
    id: 2,
    title: "The Complete Guide to Core Web Vitals",
    excerpt: "Learn how to optimize your website's performance metrics to improve user experience and SEO rankings.",
    date: "April 28, 2025",
    author: "Michael Chen",
    category: "Development",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "complete-guide-core-web-vitals"
  },
  {
    id: 3,
    title: "Choosing the Right Tech Stack for Your Project",
    excerpt: "A comprehensive guide to selecting the perfect technology stack based on your project requirements and business goals.",
    date: "April 10, 2025",
    author: "Alex Johnson",
    category: "Development",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "choosing-right-tech-stack"
  }
]

const recentPosts = [
  {
    id: 4,
    title: "The Impact of AI on Web Development",
    excerpt: "Discover how artificial intelligence is transforming the web development landscape and what it means for developers.",
    date: "April 5, 2025",
    author: "Lisa Zhang",
    category: "Technology",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "ai-impact-web-development"
  },
  {
    id: 5,
    title: "Maximizing Conversion Rates with Strategic UX Design",
    excerpt: "Learn how to leverage user experience design principles to increase your website's conversion rates.",
    date: "March 22, 2025",
    author: "Sarah Williams",
    category: "Design",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "maximizing-conversion-rates-ux-design"
  },
  {
    id: 6,
    title: "Implementing Headless CMS: Benefits and Challenges",
    excerpt: "Explore the advantages and potential pitfalls of adopting a headless CMS architecture for your web projects.",
    date: "March 15, 2025",
    author: "David Wilson",
    category: "Development",
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "implementing-headless-cms"
  },
  {
    id: 7,
    title: "The Future of E-commerce: Trends to Watch",
    excerpt: "Stay ahead of the curve with these emerging e-commerce trends that are shaping the future of online retail.",
    date: "March 8, 2025",
    author: "Emily Rodriguez",
    category: "E-commerce",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "future-ecommerce-trends"
  },
  {
    id: 8,
    title: "Performance Optimization Techniques for React Applications",
    excerpt: "Practical strategies to enhance the performance of your React apps and deliver a better user experience.",
    date: "February 28, 2025",
    author: "Michael Chen",
    category: "Development",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "react-performance-optimization"
  },
  {
    id: 9,
    title: "Building Accessible Websites: A Comprehensive Guide",
    excerpt: "Learn how to create websites that are accessible to all users, including those with disabilities.",
    date: "February 15, 2025",
    author: "Alex Johnson",
    category: "Accessibility",
    image: "https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "building-accessible-websites"
  }
]

const categories = [
  { name: "Design", count: 12 },
  { name: "Development", count: 25 },
  { name: "Technology", count: 8 },
  { name: "E-commerce", count: 10 },
  { name: "Accessibility", count: 6 },
  { name: "SEO", count: 9 },
  { name: "Business", count: 7 }
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <Badge className="mb-6">Our Blog</Badge>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter mb-6">
                Insights & Resources
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8">
                Stay up-to-date with the latest web development trends, best practices, and insights from our team of experts.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Featured Articles
              </h2>
              <p className="text-muted-foreground">
                Our most popular and insightful content
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <FadeIn key={post.id} delay={0.1 * index} className="group">
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <Card className="overflow-hidden border-border hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="aspect-[16/9] relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary hover:bg-primary">{post.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="pt-6 flex-grow">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>By {post.author}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <div className="flex items-center text-sm font-medium text-primary">
                        Read Article <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <FadeIn>
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    Latest Articles
                  </h2>
                  <p className="text-muted-foreground">
                    Fresh insights and resources from our expert team
                  </p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recentPosts.map((post, index) => (
                  <FadeIn key={post.id} delay={0.1 * index} className="group">
                    <Link href={`/blog/${post.slug}`} className="block h-full">
                      <Card className="overflow-hidden border-border hover:shadow-md transition-all duration-300 h-full flex flex-col">
                        <div className="aspect-[16/9] relative">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge variant="secondary">{post.category}</Badge>
                          </div>
                        </div>
                        <CardContent className="pt-6 flex-grow">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>By {post.author}</span>
                          </div>
                          <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-2">
                            {post.excerpt}
                          </p>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <div className="flex items-center text-sm font-medium text-primary">
                            Read Article <ArrowRight className="ml-1 h-4 w-4" />
                          </div>
                        </CardFooter>
                      </Card>
                    </Link>
                  </FadeIn>
                ))}
              </div>

              <FadeIn>
                <div className="mt-12 text-center">
                  <Button variant="outline" asChild>
                    <Link href="#">
                      Load More Articles <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <FadeIn direction="right">
              <aside>
                <div className="bg-muted/30 p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category.name}>
                        <Link 
                          href={`/blog/category/${category.name.toLowerCase()}`}
                          className="flex items-center justify-between text-muted-foreground hover:text-foreground transition-colors py-2"
                        >
                          <span>{category.name}</span>
                          <span className="bg-muted rounded-full px-2.5 py-0.5 text-xs">{category.count}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg border mt-8">
                  <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
                  <p className="text-muted-foreground mb-4">
                    Stay updated with our latest articles and insights delivered directly to your inbox.
                  </p>
                  <div className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="bg-background"
                    />
                    <Button className="w-full">
                      Subscribe to Newsletter
                    </Button>
                  </div>
                </div>

                <div className="mt-8">
                  <Card>
                    <div className="relative aspect-[16/9]">
                      <Image
                        src="https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Download free web development resources"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold mb-2">Free Web Development Resources</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Download our collection of free resources, templates, and checklists for your next web project.
                      </p>
                      <Button size="sm" variant="secondary" asChild className="w-full">
                        <Link href="#">
                          Download Now
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <Badge className="mb-6">Newsletter</Badge>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Subscribe to Our Newsletter
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground mb-8">
                Get the latest web development tips, best practices, and insights delivered directly to your inbox.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-background"
                />
                <Button>
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                By subscribing, you agree to our Privacy Policy. We promise not to spam you, and you can unsubscribe at any time.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}