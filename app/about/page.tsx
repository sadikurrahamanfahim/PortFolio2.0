import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Github, Linkedin, Mail, Phone, Download } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                About Me
              </h1>
              <p className="text-xl text-muted-foreground">
                Get to know more about my journey and experience
              </p>
            </div>

            {/* Profile Section */}
            <div className="space-y-8 mb-12">
              {/* Top Row - Photo/Contact and My Story with equal heights */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column - Photo and Basic Info */}
                <div className="h-full">
                  <Card className="code-block h-full">
                    <CardContent className="pt-6 text-center h-full flex flex-col">
                      <div className="relative inline-block mb-6">
                        <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto">
                          <img
                            src="/sadikurphoto.jpg"
                            alt="MD Sadikur Rahaman"
                            className="w-44 h-44 rounded-full object-cover border-4 border-background shadow-2xl"
                          />
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        MD Sadikur Rahaman
                      </h2>
                      <p className="text-lg text-primary mb-4">
                        Computer Science & Engineering Graduate
                      </p>

                      {/* Contact Info */}
                      <div className="space-y-3 text-sm flex-grow">
                        <div className="flex items-center justify-center gap-2 text-muted-foreground">
                          <Mail className="h-4 w-4" />
                          <a
                            href="mailto:fahim99369@gmail.com"
                            className="hover:text-primary transition-colors"
                          >
                            fahim99369@gmail.com
                          </a>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <span>01629702711</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>Dhaka, Bangladesh</span>
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center gap-3 mt-6">
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href="https://github.com/sadikurrahamanfahim"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href="https://linkedin.com/in/sadikurrahman64"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin className="h-4 w-4 mr-2" />
                            LinkedIn
                          </a>
                        </Button>
                      </div>

                      {/* <Button
                        className="w-full mt-4"
                        size="sm"
                        onClick={() =>
                          window.open("/Sadikur Rahaman.pdf", "_blank")
                        }
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Resume
                      </Button> */}
                    </CardContent>
                  </Card>
                </div>

                {/* Right Column - My Story */}
                <div className="h-full">
                  <Card className="code-block h-full">
                    <CardHeader>
                      <CardTitle>My Story</CardTitle>
                    </CardHeader>
                    <CardContent className="h-full">
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        My journey in technology started with curiosity about how 
                        things work and gradually grew into a passion for building 
                        interactive experiences. Today, I work at the intersection 
                        of game development, problem-solving, and project execution, 
                        with a growing focus on Unity and interactive applications.
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Through my work, I collaborate with artists, designers, 
                        developers, and clients to turn ideas and requirements 
                        into functional and experiences. Along the way, 
                        I’ve learned that creating a good product is not only about 
                        writing code, it’s also about understanding the idea, 
                        communicating clearly, solving challenges, and bringing 
                        different parts of a project together.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        I’m continuously learning, experimenting with new technologies, 
                        and improving my skills through hands-on projects. I enjoy 
                        taking an idea from discussion to implementation and seeing 
                        it evolve into something people can actually interact with.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        Outside of development, I like exploring new tools, 
                        experimenting with diferrent things, and keeping up 
                        with developments.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Bottom Row - What I Do (Full Width) */}
              <div>
                <Card className="code-block">
                  <CardHeader>
                    <CardTitle>What I Do</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <div className="text-2xl mb-2">🎮</div>
                        <h3 className="font-semibold text-sm">
                          Game Development
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          Unity Engine
                        </p>
                      </div>
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <div className="text-2xl mb-2">🌐</div>
                        <h3 className="font-semibold text-sm">
                          Web Development
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          Full-Stack
                        </p>
                      </div>
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <div className="text-2xl mb-2">📱</div>
                        <h3 className="font-semibold text-sm">Mobile Apps</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          Native Android
                        </p>
                      </div>
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <div className="text-2xl mb-2">🎨</div>
                        <h3 className="font-semibold text-sm">UI/UX Design</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          Figma
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
