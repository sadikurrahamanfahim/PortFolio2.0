"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, RotateCcw, Trophy } from "lucide-react"

const codeSnippets = [
  {
    question: "Complete the function to return 'Hello World'",
    code: "function greet() {\n  return '___';\n}",
    answer: "Hello World",
    hint: "A classic programming greeting",
  },
  {
    question: "Fix the loop to count from 1 to 5",
    code: "for (let i = ___; i <= ___; i++) {\n  console.log(i);\n}",
    answer: "1, 5",
    hint: "Start from 1, end at 5",
  },
  {
    question: "Complete the array method to get length",
    code: "const arr = [1, 2, 3, 4];\nconst size = arr.____;",
    answer: "length",
    hint: "Property that returns array size",
  },
]

export function CodingGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userInput, setUserInput] = useState("")
  const [score, setScore] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [gameCompleted, setGameCompleted] = useState(false)

  const startGame = () => {
    setGameStarted(true)
    setCurrentQuestion(0)
    setScore(0)
    setUserInput("")
    setIsCorrect(null)
    setGameCompleted(false)
  }

  const checkAnswer = () => {
    const correct = userInput.toLowerCase().trim() === codeSnippets[currentQuestion].answer.toLowerCase()
    setIsCorrect(correct)

    if (correct) {
      setScore(score + 1)
      setTimeout(() => {
        if (currentQuestion < codeSnippets.length - 1) {
          setCurrentQuestion(currentQuestion + 1)
          setUserInput("")
          setIsCorrect(null)
          setShowHint(false)
        } else {
          setGameCompleted(true)
        }
      }, 1500)
    }
  }

  const resetGame = () => {
    setGameStarted(false)
    setCurrentQuestion(0)
    setScore(0)
    setUserInput("")
    setIsCorrect(null)
    setShowHint(false)
    setGameCompleted(false)
  }

  if (!gameStarted) {
    return (
      <Card className="code-block pulse-glow">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-2xl font-bold mb-2">Code Challenge</h3>
            <p className="text-muted-foreground">Test your programming knowledge with this interactive coding game!</p>
          </div>
          <Button onClick={startGame} size="lg" className="gap-2">
            <Play className="h-5 w-5" />
            Start Challenge
          </Button>
        </CardContent>
      </Card>
    )
  }

  if (gameCompleted) {
    return (
      <Card className="code-block">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <Trophy className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-2">Challenge Complete!</h3>
            <p className="text-muted-foreground mb-4">
              You scored {score} out of {codeSnippets.length}
            </p>
            <Badge variant={score === codeSnippets.length ? "default" : "secondary"} className="text-lg px-4 py-2">
              {score === codeSnippets.length
                ? "Perfect Score! 🎉"
                : `${Math.round((score / codeSnippets.length) * 100)}% Complete`}
            </Badge>
          </div>
          <Button onClick={resetGame} size="lg" className="gap-2">
            <RotateCcw className="h-5 w-5" />
            Play Again
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="code-block">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <Badge variant="outline">
            Question {currentQuestion + 1} of {codeSnippets.length}
          </Badge>
          <Badge variant="secondary">Score: {score}</Badge>
        </div>

        <h3 className="text-lg font-semibold mb-4">{codeSnippets[currentQuestion].question}</h3>

        <div className="bg-muted rounded-lg p-4 mb-4 font-mono text-sm">
          <pre className="whitespace-pre-wrap">{codeSnippets[currentQuestion].code.replace("___", "___")}</pre>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter your answer..."
            className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            onKeyPress={(e) => e.key === "Enter" && checkAnswer()}
          />

          <div className="flex gap-2">
            <Button onClick={checkAnswer} disabled={!userInput.trim()}>
              Submit
            </Button>
            <Button variant="outline" onClick={() => setShowHint(!showHint)}>
              {showHint ? "Hide" : "Show"} Hint
            </Button>
          </div>

          {showHint && (
            <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
              💡 {codeSnippets[currentQuestion].hint}
            </p>
          )}

          {isCorrect !== null && (
            <div
              className={`p-3 rounded-lg ${isCorrect ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"}`}
            >
              {isCorrect ? "✅ Correct! Moving to next question..." : "❌ Try again!"}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
