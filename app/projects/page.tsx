import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar } from "lucide-react"

const gameProjects = [
  {
    title: "Jingle Word",
    description:
      "A Christmas-themed word puzzle game with integrated assets and time functionality. Designed majority of assets using Figma and implemented engaging gameplay mechanics.",
    image: "/JingleWrods.png",
    status: "Under Review",
    technologies: ["Unity", "C#", "Figma", "Game Design"],
    features: ["Christmas Theme", "Word Puzzles", "Time Challenges", "Custom Assets & UI"],
    demoUrl: null,
    githubUrl: "https://github.com/sadikurrahamanfahim/Admob-R-D",
    date: "2024",
  },
  {
    title: "Pacman Genjam",
    description:
      "A creative remix of the classic Pacman game developed for Crazy Webgame GameJam 2024. Collaborated with team a member to create an innovative take on the beloved arcade game.",
    image: "/PacMan.png",
    status: "Completed",
    technologies: ["Unity", "C#", "Game Jam", "Team Collaboration"],
    features: ["Classic Gameplay", "Modern Graphics", "Team Development", "Game Jam Entry"],
    demoUrl: "https://masupasu.itch.io/pacman-genjam",
    githubUrl: "https://github.com/sadikurrahamanfahim/Pacman-Genjam",
    date: "2024",
  },
  {
    title: "Vanish Words",
    description:
      "Developed a simple 2D Unity game with random alphabet sorting, dynamic feedback, and endless gameplay mechanics.",
    image: "/VanishWords.png",
    status: "Completed",
    technologies: ["Unity", "C#", "Team Collaboration"],
    features: ["Simple Gameplay", "Basic Design", "Endless Puzzle"],
    demoUrl: "https://fupsee.itch.io/vanish-words",
    githubUrl: "https://github.com/sadikurrahamanfahim/VanishWords",
    date: "2025",
  },
]

const webProjects = [
  {
    title: "Exam Archive",
    description:
      "Developed a full-stack web application that provides digital access to SSC and HSC question papers organized by board, year, and subject. The platform allows students to browse, preview, and download papers in a clean and responsive interface.",
    image: "/ExamArchive.png",
    status: "Live",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    features: ["Organized browsing by class, year, and subject",  "PDF preview and download functionality", "Real-time data fetching from Supabase", "Dynamic routing and optimized server-side rendering", "Fully responsive design for mobile and desktop", "Full Admin Controll"],
    demoUrl: "https://sschscpaper.vercel.app/",
    githubUrl: "https://github.com/sadikurrahamanfahim/ExamArchive",
    date: "2025",
  },
  {
    title: "Movie Freak",
    description:
      "An online cinema showcase website built with ASP.NET framework. Features movie listings, detailed information, and modern web development practices.",
    image: "/MovieFreaks.png",
    status: "Completed",
    technologies: ["ASP.NET", "C#", "MVC", "SQL Server"],
    features: ["Movie Catalog",  "Detailed Relation"],
    demoUrl: null,
    githubUrl: "https://github.com/sadikurrahamanfahim/eTickets",
    date: "2023",
  },
  {
    title: "DataVize",
    description:
      "Built a Streamlit-based web application offering data preprocessing, visualization, and classification techniques using python libraries.",
    image: "/DataVize.png",
    status: "Live",
    technologies: ["Python", "Streamlit"],
    features: ["Preprocessing", "Visualization", "Classification"],
    demoUrl: "https://datavize.streamlit.app/",
    githubUrl: "https://github.com/sadikurrahamanfahim/DataVize",
    date: "2023",
  },
]

const androidProjects = [
  {
    title: "Khuda Lagche!",
    description:
      "A Food delivery Android Application mainly focused on UI principles and built with Java. Focusing on core Android development concepts and user interface design.",
    image: "/KhudaLagche.png",
    status: "Completed",
    technologies: ["Java", "Android SDK", "XML", "Firebase"],
    features: ["Native Development", "Material Design", "User Authentication"],
    demoUrl: null,
    githubUrl: "https://github.com/sadikurrahamanfahim/khuda_Lagche",
    date: "2023",
  },
]

const designProjects = [
  {
    title: "Jingle Words Asset Design",
    description:
      "Custom game assets and UI elements designed for Jingle Word. Created using Figma with focus on user experience and visual appeal.",
    image: "/JingleWrods_Figma.png",
    status: "Completed",
    technologies: ["Figma", "UI/UX Design", "Asset Creation", "Prototyping"],
    features: ["Custom Assets", "UI Components", "Prototypes", "Design Systems"],
    demoUrl: "https://www.figma.com/proto/weWe19ycKoUCVDuI1IM6su/Jingle-Wrods?node-id=1-171&t=EWwkAqYBlOHrKVof-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    githubUrl: null,
    date: "2024",
  },
  {
    title: "Khuda Lagche UI Design",
    description:
      "Created user interface designs for Android Application called Khuda Lagche! using Figma by collaborating with team members, focusing on user experience and visual appeal.",
    image: "/KhudaLagche_Figma.png",
    status: "Completed",
    technologies: ["Figma", "UI/UX", "Prototyping"],
    features: ["Modern UI", "User Testing", "Design Systems"],
    demoUrl: "https://www.figma.com/proto/L5hy2UYzH5oyUtz8FktsND/Khuda-Lagche-?node-id=1-1579&t=LSW2ZCO409wIfvfb-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A1579",
    githubUrl: null,
    date: "2023",
  },
]

const ProjectCard = ({ project, category }: { project: any; category: string }) => (
  <Card className="code-block overflow-hidden">
    <div className="relative">
      <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
      <div className="absolute top-4 right-4">
        <Badge
          variant={project.status === "Live" ? "default" : project.status === "Completed" ? "secondary" : "outline"}
        >
          {project.status}
        </Badge>
      </div>
    </div>
    <CardHeader>
      <div className="flex items-start justify-between">
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          {project.date}
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, index: number) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2">Key Features</h4>
        <ul className="text-xs text-muted-foreground space-y-1">
          {project.features.map((feature: string, index: number) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-2">
        {project.demoUrl && (
          <Button size="sm" variant="default" asChild>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              {category === "game" ? "Play" : "Demo"}
            </a>
          </Button>
        )}
        {project.githubUrl && (
          <Button size="sm" variant="outline" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          </Button>
        )}
        {!project.demoUrl && !project.githubUrl && (
          <Button size="sm" variant="outline" disabled>
            Coming Soon
          </Button>
        )}
      </div>
    </CardContent>
  </Card>
)

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">My Projects</h1>
              <p className="text-xl text-muted-foreground">A showcase of my work across different domains</p>
            </div>

            {/* Game Development Projects */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="text-3xl">🎮</div>
                <h2 className="text-3xl font-bold text-foreground">Game Development</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {gameProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} category="game" />
                ))}
              </div>
            </section>

            {/* Web Development Projects */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="text-3xl">🌐</div>
                <h2 className="text-3xl font-bold text-foreground">Web Development</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {webProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} category="web" />
                ))}
              </div>
            </section>

            {/* Android Development Projects */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="text-3xl">📱</div>
                <h2 className="text-3xl font-bold text-foreground">Android Development</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {androidProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} category="android" />
                ))}

                {/* Placeholder for future projects */}
                <Card className="code-block border-dashed">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📱</span>
                    </div>
                    <h3 className="font-semibold mb-2">More Android Projects</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Will work on Additional native Android applications in future.
                    </p>
                    <Badge variant="outline">Coming Soon</Badge>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Design Projects */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="text-3xl">🎨</div>
                <h2 className="text-3xl font-bold text-foreground">Design</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {designProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} category="design" />
                ))}
              </div>
            </section>

            {/* Project Statistics */}
            <section className="mb-16">
              <Card className="code-block">
                <CardHeader>
                  <CardTitle className="text-center">Project Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">6+</div>
                      <div className="text-sm text-muted-foreground">Total Projects</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">4</div>
                      <div className="text-sm text-muted-foreground">Categories</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">10+</div>
                      <div className="text-sm text-muted-foreground">Technologies</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">2+</div>
                      <div className="text-sm text-muted-foreground">Years Active</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <Card className="code-block">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Interested in Working Together?</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    I'm always open to discussing new opportunities, collaborations, or just chatting about technology
                    and development.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" asChild>
                      <a href="/contact">Get In Touch</a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="https://github.com/sadikurrahamanfahim" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5 mr-2" />
                        View GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
