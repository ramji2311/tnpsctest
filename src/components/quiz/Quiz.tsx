import { useState, useCallback } from "react";
import { Question } from "@/data/questions";
import { getQuizById } from "@/data/quizConfig";
import { QuestionCard } from "./QuestionCard";
import { QuizResults } from "./QuizResults";

interface QuizProps {
  quizId: string;
  onHome: () => void;
}

export function Quiz({ quizId, onHome }: QuizProps) {
  const quizConfig = getQuizById(quizId);
  const initialQuestions = quizConfig?.questions || [];
  
  const [questions, setQuestions] = useState<Question[]>(() => [...initialQuestions]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswer = useCallback((isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (currentIndex === questions.length - 1) {
      setIsComplete(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, questions.length]);

  const handleRestart = useCallback(() => {
    setQuestions([...initialQuestions]);
    setCurrentIndex(0);
    setScore(0);
    setIsComplete(false);
  }, [initialQuestions]);

  if (!quizConfig || questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Quiz not found</p>
      </div>
    );
  }

  if (isComplete) {
    return (
      <QuizResults
        score={score}
        totalQuestions={questions.length}
        onRestart={handleRestart}
        onHome={onHome}
        quizTitle={quizConfig.title}
      />
    );
  }

  return (
    <QuestionCard
      key={questions[currentIndex].id}
      question={questions[currentIndex]}
      questionNumber={currentIndex + 1}
      totalQuestions={questions.length}
      onAnswer={handleAnswer}
      quizTitle={quizConfig.title}
    />
  );
}
