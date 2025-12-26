import { useState } from "react";
import { Question } from "@/data/questions";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
  quizTitle?: string;
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  quizTitle,
}: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleOptionClick = (optionIndex: number) => {
    if (hasAnswered) return;

    setSelectedAnswer(optionIndex);
    setHasAnswered(true);

    const isCorrect = optionIndex === question.correctAnswer;
    
    setTimeout(() => {
      onAnswer(isCorrect);
      setSelectedAnswer(null);
      setHasAnswered(false);
    }, 1500);
  };

  const getOptionStyles = (optionIndex: number) => {
    if (!hasAnswered) {
      return "bg-card hover:bg-accent hover:border-primary/30 cursor-pointer";
    }

    if (optionIndex === question.correctAnswer) {
      return "bg-emerald-50 border-emerald-500 text-emerald-900";
    }

    if (optionIndex === selectedAnswer && optionIndex !== question.correctAnswer) {
      return "bg-red-50 border-red-500 text-red-900";
    }

    return "bg-muted/50 opacity-50";
  };

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      {/* Quiz Title */}
      {quizTitle && (
        <div className="text-center mb-6">
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full">
            {quizTitle}
          </span>
        </div>
      )}

      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className="text-sm font-medium text-muted-foreground">
            {Math.round((questionNumber / totalQuestions) * 100)}%
          </span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground leading-relaxed">
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            disabled={hasAnswered}
            className={cn(
              "w-full p-4 text-left rounded-xl border-2 transition-all duration-200 flex items-center justify-between group",
              getOptionStyles(index)
            )}
          >
            <div className="flex items-center gap-4">
              <span
                className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center text-sm font-semibold transition-colors",
                  hasAnswered && index === question.correctAnswer
                    ? "bg-emerald-500 text-white"
                    : hasAnswered && index === selectedAnswer
                    ? "bg-red-500 text-white"
                    : "bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground"
                )}
              >
                {String.fromCharCode(65 + index)}
              </span>
              <span className="text-lg">{option}</span>
            </div>
            {hasAnswered && index === question.correctAnswer && (
              <Check className="w-6 h-6 text-emerald-600" />
            )}
            {hasAnswered && index === selectedAnswer && index !== question.correctAnswer && (
              <X className="w-6 h-6 text-red-600" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
