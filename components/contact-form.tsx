"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // Create mailto link
    const subject = `Portfolio Contact from ${name}`
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    const mailtoLink = `mailto:fahim99369@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Open email client
    window.location.href = mailtoLink

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Reset form after showing success
      setTimeout(() => {
        setIsSubmitted(false)
        e.currentTarget.reset()
      }, 3000)
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
        <p className="text-muted-foreground">
          Your email client should have opened with the message. I'll get back to you soon!
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name *</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your full name"
          required
          className="transition-all focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          required
          className="transition-all focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          placeholder="What's this about?"
          className="transition-all focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project, opportunity, or just say hello..."
          rows={5}
          required
          className="transition-all focus:ring-2 focus:ring-primary/20 resize-none"
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting} size="lg">
        <Send className="h-4 w-4 mr-2" />
        {isSubmitting ? "Opening Email Client..." : "Send Message"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        This will open your default email client with the message pre-filled.
      </p>
    </form>
  )
}
