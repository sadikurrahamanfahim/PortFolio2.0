"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import emailjs from '@emailjs/browser'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  // TODO: Replace these with your actual EmailJS credentials
  const SERVICE_ID = "service_sh3lpfh"      
  const TEMPLATE_ID = "template_u1nwivq"    
  const PUBLIC_KEY = "1jcq-3AkCdToaZWh7"     

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const form = e.currentTarget
    const formData = new FormData(form)
    
    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: formData.get("name") as string,
      from_email: formData.get("email") as string,
      subject: (formData.get("subject") as string) || "No subject",
      message: formData.get("message") as string,
      to_email: "fahim99369@gmail.com"
    }

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      )

      console.log('Email sent successfully!', response.status, response.text)
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false)
        form.reset()
      }, 3000)

    } catch (err) {
      console.error('Failed to send email:', err)
      setError("Failed to send message. Please try again or email me directly at fahim99369@gmail.com")
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
        <p className="text-muted-foreground">
          Thanks for reaching out! I'll get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-destructive/10 border border-destructive rounded-lg flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="name">Name *</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your full name"
          required
          disabled={isSubmitting}
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
          disabled={isSubmitting}
          className="transition-all focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          placeholder="What's this about?"
          disabled={isSubmitting}
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
          disabled={isSubmitting}
          className="transition-all focus:ring-2 focus:ring-primary/20 resize-none"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full" 
        disabled={isSubmitting} 
        size="lg"
      >
        <Send className="h-4 w-4 mr-2" />
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        This will send an email directly to my inbox.
      </p>
    </form>
  )
}