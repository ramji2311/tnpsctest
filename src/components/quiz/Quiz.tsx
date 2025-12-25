import { useState, useCallback } from "react";
import { getRandomQuestions, Question } from "@/data/questions";
import { QuestionCard } from "./QuestionCard";
import { QuizResults } from "./QuizResults";

const QUESTIONS_PER_QUIZ = 10;

interface QuizProps {
  onHome: () => void;
}

export function Quiz({ onHome }: QuizProps) {
  const [questions, setQuestions] = useState<Question[]>(() =>
    getRandomQuestions(QUESTIONS_PER_QUIZ)
  );
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
    setQuestions(getRandomQuestions(QUESTIONS_PER_QUIZ));
    setCurrentIndex(0);
    setScore(0);
    setIsComplete(false);
  }, []);

  if (isComplete) {
    return (
      <QuizResults
        score={score}
        totalQuestions={questions.length}
        onRestart={handleRestart}
        onHome={onHome}
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
    />
  );
}
