"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
  words: string[]
  className?: string
  typingSpeed?: number
  erasingSpeed?: number
  delayBetweenWords?: number
}

export function TypingAnimation({
  words,
  className = "",
  typingSpeed = 100,
  erasingSpeed = 50,
  delayBetweenWords = 2000,
}: TypingAnimationProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const currentWord = words[currentWordIndex]

    if (isTyping) {
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1))
        }, typingSpeed)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, delayBetweenWords)
        return () => clearTimeout(timeout)
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, erasingSpeed)
        return () => clearTimeout(timeout)
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        setIsTyping(true)
      }
    }
  }, [currentText, isTyping, currentWordIndex, words, typingSpeed, erasingSpeed, delayBetweenWords])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span className={className}>
      {currentText}
      <span
        className={`inline-block w-0.5 h-6 bg-primary ml-1 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
      />
    </span>
  )
}
