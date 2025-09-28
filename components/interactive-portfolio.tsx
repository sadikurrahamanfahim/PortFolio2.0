"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Palette, Smartphone, Gamepad2, ArrowRight } from "lucide-react"
import Link from "next/link"

const skills = [
  { icon: Code, name: "Web Dev", color: "bg-blue-500", description: "React, Node.js, ASP.NET" },
  { icon: Gamepad2, name: "Game Dev", color: "bg-purple-500", description: "Unity, C#" },
  { icon: Smartphone, name: "Mobile", color: "bg-green-500", description: "Android, Java" },
  { icon: Palette, name: "Design", color: "bg-pink-500", description: "Figma, UI/UX" },
]

const projects = [
  { name: "Pac-Man Remake", tech: "Unity", status: "Completed" },
  { name: "Movie Website", tech: "React", status: "Live" },
  { name: "Portfolio Site", tech: "Next.js", status: "Active" },
  { name: "Android App", tech: "Java", status: "Development" },
]

export function InteractivePortfolio() {
  const [activeSkill, setActiveSkill] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => {
        let newIndex
        do {
          newIndex = Math.floor(Math.random() * skills.length)
        } while (newIndex === prev && skills.length > 1) // Ensure we don't select the same skill twice in a row
        return newIndex
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-8">
      {/* Interactive Skills Showcase */}
      <Card className="code-block overflow-hidden">
        <CardContent className="p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              const isActive = activeSkill === index
              return (
                <div
                  key={skill.name}
                  className={`relative p-6 rounded-xl cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                    isActive ? "shadow-lg" : ""
                  }`}
                  style={{
                    background: isActive
                      ? `linear-gradient(135deg, ${skill.color.replace("bg-", "rgb(var(--color-")}), transparent)`
                      : "rgb(var(--color-muted))",
                  }}
                  onMouseEnter={() => setActiveSkill(index)}
                >
                  <div className="text-center">
                    <div className={`inline-flex p-3 rounded-full mb-3 ${skill.color} text-white`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{skill.name}</h3>
                    <p className="text-xs text-muted-foreground">{skill.description}</p>
                  </div>

                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl animate-pulse" />
                  )}
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <Button asChild>
              <Link href="/skills">
                Explore All Skills
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
