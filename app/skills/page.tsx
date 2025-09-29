"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { SkillLogos } from "@/components/skill-logos"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronRight, Code, Lightbulb } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "C",
        description: "System programming and algorithms",
        challenge:
          "Implement a memory-efficient linked list that can handle 1 million nodes without causing stack overflow. How would you optimize pointer arithmetic for cache locality?",
        hint: "Consider memory alignment and prefetching strategies",
      },
      {
        name: "C#",
        description: "Game development with Unity, ASP.NET",
        challenge:
          "Create a Unity script that manages object pooling for 10,000+ projectiles while maintaining 60 FPS. What design patterns would you use?",
        hint: "Think about factory patterns and memory management",
      },
      {
        name: "Java",
        description: "Android development, OOP concepts",
        challenge:
          "Design a thread-safe singleton that handles concurrent database connections in an Android app. How do you prevent memory leaks?",
        hint: "Consider volatile keywords and double-checked locking",
      },
      {
        name: "JavaScript",
        description: "Web development, DOM manipulation",
        challenge:
          "Build a virtual DOM diffing algorithm that can efficiently update 1000+ elements. How would you minimize reflows and repaints?",
        hint: "Think about batching updates and using DocumentFragment",
      },
    ],
  },
  {
    title: "Web Development",
    skills: [
      {
        name: "HTML/CSS",
        description: "Semantic markup, responsive design",
        challenge:
          "Create a responsive layout that works perfectly on 320px to 4K displays without using any media queries. How would you achieve this?",
        hint: "Explore CSS Grid, clamp(), and intrinsic web design",
      },
      {
        name: "ASP.NET",
        description: "MVC pattern, web applications",
        challenge:
          "Implement a custom middleware that can handle 10,000 concurrent requests while maintaining session state. What caching strategies would you use?",
        hint: "Consider distributed caching and connection pooling",
      },
      {
        name: "React",
        description: "Component-based UI development",
        challenge:
          "Build a React component that renders 100,000 items in a virtualized list with smooth scrolling. How do you prevent unnecessary re-renders?",
        hint: "Think about React.memo, useMemo, and windowing techniques",
      },
      {
        name: "Node.js",
        description: "Server-side JavaScript",
        challenge:
          "Design a Node.js microservice that can process 1 million API requests per minute. How would you handle backpressure and memory management?",
        hint: "Consider clustering, streams, and event loop optimization",
      },
    ],
  },
  {
    title: "Database & Backend",
    skills: [
      {
        name: "SQL",
        description: "Database design, complex queries",
        challenge:
          "Optimize a query that joins 5 tables with millions of records each, reducing execution time from 30 seconds to under 1 second. What indexing strategy would you use?",
        hint: "Think about composite indexes and query execution plans",
      },
      {
        name: "Firebase",
        description: "Real-time database, authentication",
        challenge:
          "Design a real-time chat system that can handle 100,000 concurrent users with message persistence and offline sync. How do you manage data consistency?",
        hint: "Consider Firestore compound queries and security rules",
      },
      {
        name: "REST APIs",
        description: "API design and integration",
        challenge:
          "Create an API rate limiting system that can handle different user tiers (free, premium, enterprise) with dynamic quotas. How do you prevent abuse?",
        hint: "Think about sliding window algorithms and distributed rate limiting",
      },
      {
        name: "Supabase",
        description: "Backend-as-a-Service, real-time database",
        challenge:
          "Build a multi-tenant SaaS application with row-level security that can handle 100,000+ users with real-time subscriptions and complex permission hierarchies. How do you prevent data leaks between tenants?",
        hint: "Consider RLS policies, database functions, and connection pooling strategies",
      },
    ],
  },
  {
    title: "Game Development",
    skills: [
      {
        name: "Unity Engine",
        description: "2D/3D game development",
        challenge:
          "Implement a procedural world generation system that can create infinite terrain in real-time without frame drops. How do you manage memory for chunks?",
        hint: "Consider LOD systems and async loading patterns",
      },
      {
        name: "Game Design",
        description: "Mechanics, level design",
        challenge:
          "Design a difficulty scaling algorithm that adapts to player skill in real-time without being obvious. How do you measure and respond to player frustration?",
        hint: "Think about behavioral analytics and subtle parameter adjustments",
      },
      {
        name: "Asset Integration",
        description: "Graphics, audio, animations",
        challenge:
          "Create an asset streaming system that can load 4K textures and complex models on-demand for an open-world game. How do you predict what to preload?",
        hint: "Consider spatial partitioning and player behavior prediction",
      },
    ],
  },
  {
    title: "Design & Tools",
    skills: [
      {
        name: "Figma",
        description: "UI/UX design, prototyping",
        challenge:
          "Design a component system that can automatically generate responsive layouts for 20+ screen sizes while maintaining design consistency. How do you handle edge cases?",
        hint: "Think about design tokens and constraint-based layouts",
      },
      {
        name: "AutoCAD",
        description: "Technical drawings, 2D design",
        challenge:
          "Create a parametric design system that can automatically adjust architectural drawings based on building codes for different countries. How do you handle conflicting requirements?",
        hint: "Consider rule-based systems and constraint solving",
      },
      {
        name: "Git",
        description: "Version control, collaboration",
        challenge:
          "Resolve a complex merge conflict involving 50+ files where three teams have been working on overlapping features for 2 months. What's your strategy?",
        hint: "Think about semantic merge tools and conflict resolution workflows",
      },
      {
        name: "Cisco Packet Tracer",
        description: "Network simulation",
        challenge:
          "Design a network topology that can handle 10,000 devices with redundancy, load balancing, and security while minimizing latency. How do you prevent broadcast storms?",
        hint: "Consider VLAN segmentation and spanning tree protocols",
      },
      {
        name: "Postman",
        description: "API testing and development",
        challenge:
          "Create an automated testing suite that can validate 500+ API endpoints across multiple environments with dynamic data dependencies. How do you handle authentication tokens and test data cleanup?",
        hint: "Think about collection runners, environment variables, and pre-request scripts",
      },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      {
        name: "Native Android",
        description: "Java-based mobile apps",
        challenge:
          "Build an Android app that works seamlessly across 500+ device configurations with different screen densities, API levels, and hardware capabilities. How do you test this?",
        hint: "Think about adaptive layouts and automated testing strategies",
      },
      {
        name: "Mobile UI/UX",
        description: "Responsive mobile design",
        challenge:
          "Design a mobile interface that's equally usable with touch, voice, and accessibility tools while maintaining the same functionality. How do you handle context switching?",
        hint: "Consider multimodal interaction patterns and inclusive design",
      },
    ],
  },
]

const softSkills = [
  { name: "Problem Solving", description: "Analytical thinking and debugging" },
  { name: "Team Collaboration", description: "Working effectively in teams" },
  { name: "Communication", description: "Clear technical communication" },
  { name: "Adaptability", description: "Learning new technologies quickly" },
  { name: "Project Management", description: "Planning and executing projects" },
  { name: "Leadership", description: "Guiding teams and making decisions" },
]

export default function SkillsPage() {
  const [expandedChallenges, setExpandedChallenges] = useState<Set<string>>(new Set())

  const toggleChallenge = (skillName: string) => {
    const newExpanded = new Set(expandedChallenges)
    if (newExpanded.has(skillName)) {
      newExpanded.delete(skillName)
    } else {
      newExpanded.add(skillName)
    }
    setExpandedChallenges(newExpanded)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">Technical Skills</h1>
              <p className="text-xl text-muted-foreground">Technologies and tools I work with</p>
            </div>

            <div className="mb-16">
              <Card className="code-block overflow-hidden">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">Interactive Technology Stack</CardTitle>
                  <p className="text-muted-foreground mt-2">Click on any technology to learn more</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <SkillLogos />
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {skillCategories.map((category, index) => (
                <Card key={index} className="code-block group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300" />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="group/skill p-4 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-accent/5 transition-all duration-300"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-sm group-hover/skill:text-primary transition-colors duration-300">
                              {skill.name}
                            </h4>
                            <Badge variant="outline" className="text-xs flex items-center gap-1">
                              <Code className="h-3 w-3" />
                              Challenge
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed mb-3">{skill.description}</p>

                          <div className="border-t border-border/30 pt-3">
                            <button
                              onClick={() => toggleChallenge(skill.name)}
                              className="flex items-center gap-2 text-xs font-medium text-primary hover:text-primary/80 transition-colors duration-200 w-full text-left"
                            >
                              {expandedChallenges.has(skill.name) ? (
                                <ChevronDown className="h-3 w-3" />
                              ) : (
                                <ChevronRight className="h-3 w-3" />
                              )}
                              <Lightbulb className="h-3 w-3" />
                            </button>

                            {expandedChallenges.has(skill.name) && (
                              <div className="mt-3 p-3 bg-accent/20 rounded-lg border border-primary/20 animate-in slide-in-from-top-2 duration-200">
                                <p className="text-xs text-foreground leading-relaxed mb-2">
                                  <strong>Challenge:</strong> {skill.challenge}
                                </p>
                                <p className="text-xs text-muted-foreground italic">
                                  <strong>Hint:</strong> {skill.hint}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Soft Skills */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Soft Skills</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {softSkills.map((skill, index) => (
                  <Card key={index} className="code-block text-center">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-base mb-2">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Learning & Certifications */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="code-block">
                <CardHeader>
                  <CardTitle>Currently Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div>
                        <h4 className="font-semibold text-sm">Advanced React Patterns</h4>
                        <p className="text-xs text-muted-foreground">Hooks, Context, Performance optimization</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div>
                        <h4 className="font-semibold text-sm">Cloud Technologies</h4>
                        <p className="text-xs text-muted-foreground">AWS, Docker, Microservices</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div>
                        <h4 className="font-semibold text-sm">Machine Learning</h4>
                        <p className="text-xs text-muted-foreground">Python, TensorFlow, Data Science</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="code-block">
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-xs">🎓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">BSc in CSE</h4>
                        <p className="text-xs text-muted-foreground">CGPA: 3.43/4.00</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-xs">📝</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Research Publication</h4>
                        <p className="text-xs text-muted-foreground">CNN Enhancement Techniques</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-xs">🎮</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Game Jam Participant</h4>
                        <p className="text-xs text-muted-foreground">Crazy Webgame GameJam 2024</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
