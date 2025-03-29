import Image from "next/image"
import Link from "next/link"
import { Camera, ChevronRight, Instagram, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Camera className="h-6 w-6" />
            <span className="text-xl font-bold">Birendra </span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li>
                <Link href="#home" className="text-sm font-medium hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-sm font-medium hover:text-primary">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm font-medium hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm font-medium hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <Button size="sm" className="hidden md:inline-flex">
            Book a Session
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section id="home" className="relative">
          <div className="relative h-[70vh] w-full overflow-hidden">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Mobile photography showcase"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Capture Life's Moments with Your Phone
              </h1>
              <p className="mt-4 max-w-xl text-lg text-white/90">
                Professional mobile photography that turns everyday moments into extraordinary memories
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg">View Gallery</Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-16">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold">Featured Gallery</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="group relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=600&width=600&text=Photo ${i + 1}`}
                    alt={`Gallery image ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-lg font-medium">Photo Title</h3>
                    <p className="text-sm text-white/80">Shot on iPhone</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button variant="outline" className="group">
                View All Photos
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="bg-muted py-16">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="relative aspect-square overflow-hidden rounded-lg md:aspect-auto md:h-full">
                <Image
                  src="/placeholder.svg?height=800&width=800&text=About"
                  alt="Mobile photographer at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold">About MobileShots</h2>
                <p className="mt-4 text-muted-foreground">
                  MobileShots was founded on the belief that everyone has access to a powerful camera right in their
                  pocket. Our mission is to help people capture stunning photos using just their smartphones.
                </p>
                <p className="mt-4 text-muted-foreground">
                  With over 5 years of experience in mobile photography, we've helped hundreds of clients create
                  beautiful memories without expensive equipment.
                </p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Professional editing with mobile apps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Workshops and one-on-one training</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Custom presets for your specific phone model</span>
                  </li>
                </ul>
                <Button className="mt-8 w-fit">Learn More About Us</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold">Get In Touch</h2>
            <div className="mx-auto max-w-2xl rounded-lg border bg-card p-6 shadow-sm">
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter subject"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your message"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm">
                <Phone className="h-10 w-10 text-primary" />
                <h3 className="mt-4 text-xl font-medium">Phone</h3>
                <p className="mt-2 text-muted-foreground">+1 (555) 123-4567</p>
              </div>
              <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm">
                <Mail className="h-10 w-10 text-primary" />
                <h3 className="mt-4 text-xl font-medium">Email</h3>
                <p className="mt-2 text-muted-foreground">contact@mobileshots.com</p>
              </div>
              <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm sm:col-span-2 md:col-span-1">
                <Instagram className="h-10 w-10 text-primary" />
                <h3 className="mt-4 text-xl font-medium">Instagram</h3>
                <p className="mt-2 text-muted-foreground">@mobileshots</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-8">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Camera className="h-5 w-5" />
              <span className="text-lg font-bold">MobileShots</span>
            </div>
            <nav>
              <ul className="flex flex-wrap justify-center gap-6">
                <li>
                  <Link href="#home" className="text-sm hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="text-sm hover:text-primary">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-sm hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Phone">
                <Phone className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} MobileShots. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

