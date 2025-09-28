"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "C",
        logo: "/c-programming-language-logo.jpg",
        description: "System programming and algorithms",
        experience: "3+ years",
        url: "https://en.cppreference.com/w/c",
      },
      {
        name: "C#",
        logo: "/letter-c-typography.png",
        description: "Game development with Unity, ASP.NET",
        experience: "2+ years",
        url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
      },
      {
        name: "Java",
        logo: "/icons/java.png",
        description: "Android development, OOP concepts",
        experience: "2+ years",
        url: "https://docs.oracle.com/en/java/",
      },
      {
        name: "JavaScript",
        logo: "/javascript.jpg",
        description: "Web development, DOM manipulation",
        experience: "1+ years",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
  },
  {
    title: "Web Development",
    skills: [
      {
        name: "HTML/CSS",
        logo: "/html-css-web-development-logo.jpg",
        description: "Semantic markup, responsive design",
        experience: "2+ years",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "ASP.NET",
        logo: "/asp-net-framework-logo.jpg",
        description: "MVC pattern, web applications",
        experience: "1+ years",
        url: "https://docs.microsoft.com/en-us/aspnet/",
      },
      {
        name: "React",
        logo: "/react-library-logo.jpg",
        description: "Component-based UI development",
        experience: "1+ years",
        url: "https://react.dev/",
      },
      {
        name: "Node.js",
        logo: "/node-js-runtime-logo.jpg",
        description: "Server-side JavaScript",
        experience: "1+ years",
        url: "https://nodejs.org/en/docs/",
      },
    ],
  },
  {
    title: "Database & Cloud",
    skills: [
      {
        name: "SQL",
        logo: "/sql-database-logo.png",
        description: "Database design, complex queries",
        experience: "2+ years",
        url: "https://www.w3schools.com/sql/",
      },
      {
        name: "Firebase",
        logo: "/firebase-platform-logo.jpg",
        description: "Real-time database, authentication",
        experience: "1+ years",
        url: "https://firebase.google.com/docs",
      },
      {
        name: "Supabase",
        logo: "/supabase-logo.jpg",
        description: "Backend-as-a-Service, real-time database",
        experience: "1+ years",
        url: "https://supabase.com/docs",
      },
    ],
  },
  {
    title: "Game Development",
    skills: [
      {
        name: "Unity",
        logo: "/unity-game-engine-logo.jpg",
        description: "2D/3D game development",
        experience: "2+ years",
        url: "https://docs.unity3d.com/",
      },
    ],
  },
  {
    title: "Design Tools",
    skills: [
      {
        name: "Figma",
        logo: "/figma-design-tool-logo.jpg",
        description: "UI/UX design, prototyping",
        experience: "1+ years",
        url: "https://help.figma.com/",
      },
      {
        name: "AutoCAD",
        logo: "/autocad-software-logo.jpg",
        description: "Technical drawings, 2D design",
        experience: "1+ years",
        url: "https://help.autodesk.com/view/ACD/2024/ENU/",
      },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      {
        name: "Android",
        logo: "/android-mobile-development-logo.jpg",
        description: "Java-based mobile apps",
        experience: "1+ years",
        url: "https://developer.android.com/docs",
      },
    ],
  },
  {
    title: "Development Tools",
    skills: [
      {
        name: "Postman",
        logo: "/postman-logo.jpg",
        description: "API testing and development",
        experience: "2+ years",
        url: "https://learning.postman.com/docs/",
      },
    ],
  },
]

export function SkillLogos() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  const handleSkillClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="space-y-12">
      {/* Interactive Technology Tree */}
      <div className="relative">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className={`mb-12 transition-all duration-500 ${
              hoveredCategory && hoveredCategory !== category.title ? "opacity-40 scale-95" : "opacity-100 scale-100"
            }`}
            onMouseEnter={() => setHoveredCategory(category.title)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-primary mb-2 relative inline-block">
                {category.title}
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    hoveredCategory === category.title ? "w-full" : "w-0"
                  }`}
                />
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="group relative cursor-pointer"
                  onClick={() => handleSkillClick(skill.url)}
                >
                  <div
                    className={`
                    flex flex-col items-center gap-3 p-6 rounded-2xl 
                    bg-gradient-to-br from-card to-card/50 
                    border border-border/50
                    hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10
                    transition-all duration-300 hover:scale-110 hover:-translate-y-2
                  `}
                  >
                    <div className="relative w-16 h-16 flex items-center justify-center bg-background rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300">
                      <img
                        src={skill.logo || "/placeholder.svg"}
                        alt={`${skill.name} logo`}
                        className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 rounded-xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                    </div>

                    <Badge
                      variant="outline"
                      className="text-sm font-medium transition-all duration-300 group-hover:bg-primary/10 group-hover:border-primary/50"
                    >
                      {skill.name}
                    </Badge>

                    <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                        {skill.experience}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
