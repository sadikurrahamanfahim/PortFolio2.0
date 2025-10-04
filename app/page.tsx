import { Navigation } from "@/components/navigation"
import { InteractivePortfolio } from "@/components/interactive-portfolio"
import { TypingAnimation } from "@/components/typing-animation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const typingWords = [
    "Innovation & Technology",
    "Creative Design",
    "Modern Development",
    "Engaging Experiences",
    "Digital Innovation",
    "User-Centric Technology",
    "Cutting-Edge Development",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Main Content */}
      <main className="pt-20">
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="float-animation">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
                  MD Sadikur
                  <span className="block text-primary">Rahaman</span>
                </h1>
              </div>

              <div className="mb-8">
                <p className="text-xl sm:text-2xl text-muted-foreground mb-2">
                  Computer Science & Engineering Graduate
                </p>
                <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground">
                  <span>Passionate about</span>
                  <TypingAnimation
                    words={typingWords}
                    className="text-primary font-semibold min-h-[1.5rem] inline-flex items-center"
                    typingSpeed={80}
                    erasingSpeed={40}
                    delayBetweenWords={2500}
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Button asChild size="lg">
                  <Link href="/about">
                    Learn More About Me
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/projects">View My Work</Link>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="/contact"><Mail className="h-5 w-5" /></Link>
                  {/* <a href="/contact" rel="noopener noreferrer">
                    
                  </a> */}
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/sadikurrahamanfahim" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://linkedin.com/in/sadikurrahman64" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            <InteractivePortfolio />
          </div>
        </div>
      </main>
    </div>
  )
}
