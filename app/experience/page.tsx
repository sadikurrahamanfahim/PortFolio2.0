import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Star, GraduationCap, Briefcase, BookOpen, Globe } from "lucide-react"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">Experience & Education</h1>
              <p className="text-xl text-muted-foreground">
                My professional journey, academic background, and research contributions
              </p>
            </div>

            {/* Professional Experience Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Professional Experience</h2>
              </div>
              <div className="space-y-6">
                <Card className="code-block">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl">Operations Manager</CardTitle>
                        <p className="text-base font-medium text-primary">Qiulin Technologies</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>03/2025 – 08/2025</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Uttara, Dhaka, Bangladesh</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Managed end-to-end operations including employee oversight, client relations, performance
                      tracking, and strategic decision-making directly under the CEO.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Operations Management</Badge>
                      <Badge variant="secondary">Team Leadership</Badge>
                      <Badge variant="secondary">Client Relations</Badge>
                      <Badge variant="secondary">Strategic Planning</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="code-block">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl">Trainee</CardTitle>
                        <p className="text-base font-medium text-primary">Riseup Labs</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Sep 2024 – Nov 2024</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Uttara, Dhaka, Bangladesh</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Participated in the Hire and Train program at Riseup Labs. Learned game development using Unity
                      Engine and gained hands-on experience with game development workflows, asset integration, and
                      interactive gameplay mechanics.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Unity Engine</Badge>
                      <Badge variant="secondary">Game Development</Badge>
                      <Badge variant="secondary">C# Programming</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="code-block">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl">Internee</CardTitle>
                        <p className="text-base font-medium text-primary">Object Canvas Technology</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Dec 2023 – Jan 2024</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Darus Salam, Dhaka, Bangladesh</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Completed internship focusing on ASP.NET development. Gained hands-on experience with live
                      projects using the MVC pattern, learned industry best practices, and contributed to web
                      application development.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">ASP.NET</Badge>
                      <Badge variant="secondary">MVC Pattern</Badge>
                      <Badge variant="secondary">Web Development</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Education Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Education</h2>
              </div>
              <Card className="code-block">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">BSc in Computer Science & Engineering</CardTitle>
                      <p className="text-base font-medium text-primary">Green University of Bangladesh</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>2020 – 2024</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Purbachal, Dhaka, Bangladesh</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-primary" />
                      <Badge variant="outline" className="font-semibold">
                        CGPA: 3.43
                      </Badge>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        Key Coursework
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Software Engineering Principles</li>
                        <li>• Database Management Systems</li>
                        <li>• Web Application Development</li>
                        <li>• Computer Networks & Security</li>
                        <li>• Data Structures & Algorithms</li>
                        <li>• Machine Learning & AI</li>
                        <li>• Object-Oriented Programming</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Globe className="h-4 w-4 text-primary" />
                        Languages
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Bangla</span>
                          <Badge variant="outline">Native</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">English</span>
                          <Badge variant="outline">Fluent</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Hindi</span>
                          <Badge variant="outline">Conversational</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Publications & Research Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Publications & Research</h2>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="code-block">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Star className="h-5 w-5 text-primary" />
                      Research Publications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h3 className="font-semibold text-base mb-2">
                          <a href="https://ieeexplore.ieee.org/abstract/document/10534403" className="hover:text-primary transition-colors flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                            Enhancing CNN Model by Incorporating Upscaling and Downscaling Techniques for Image
                            Classification
                            <Star className="h-4 w-4" />
                          </a>
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Research focused on improving Convolutional Neural Network performance through advanced image
                          processing techniques for better classification accuracy.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">
                            Machine Learning
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Computer Vision
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Deep Learning
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="code-block">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      Professional References
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold text-sm mb-1">Prof. Dr. Md Saiful Azad</h4>
                        <p className="text-xs text-primary mb-1">Dean, FSE and Director of IQAC</p>
                        <p className="text-xs text-muted-foreground">Green University of Bangladesh</p>
                      </div>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold text-sm mb-1">Kawsar Hamid</h4>
                        <p className="text-xs text-primary mb-1">Technical Team Lead</p>
                        <p className="text-xs text-muted-foreground">iXora Solution Ltd</p>
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
  )
}
