import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h1>
              <p className="text-xl text-muted-foreground">Let's discuss opportunities and collaborations</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="code-block">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <a
                          href="mailto:fahim99369@gmail.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          fahim99369@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <a
                          href="tel:01629702711"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          01629702711
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Location</h3>
                        <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="code-block">
                  <CardHeader>
                    <CardTitle>Connect With Me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-3">
                      <Button variant="outline" className="justify-start bg-transparent" asChild>
                        <a href="https://github.com/sadikurrahamanfahim" target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-3" />
                          GitHub - sadikurrahamanfahim
                        </a>
                      </Button>
                      <Button variant="outline" className="justify-start bg-transparent" asChild>
                        <a href="https://linkedin.com/in/sadikurrahman64" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4 mr-3" />
                          LinkedIn - sadikurrahman64
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="code-block">
                  <CardHeader>
                    <CardTitle>What I'm Looking For</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Full-time software development opportunities</li>
                      <li>• Game development projects and collaborations</li>
                      <li>• Web development freelance work</li>
                      <li>• Open source project contributions</li>
                      <li>• Technical mentorship and learning opportunities</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="code-block">
                  <CardHeader>
                    <CardTitle>Send Me a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
