import { Button } from "@/components/ui/button";
import { Trophy, Target, RotateCcw, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  onHome: () => void;
  quizTitle?: string;
}

export function QuizResults({
  score,
  totalQuestions,
  onRestart,
  onHome,
  quizTitle,
}: QuizResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100);

  const getMessage = () => {
    if (percentage >= 90) return { text: "Outstanding!", emoji: "🏆" };
    if (percentage >= 70) return { text: "Great job!", emoji: "🎯" };
    if (percentage >= 50) return { text: "Good effort!", emoji: "👍" };
    return { text: "Keep practicing!", emoji: "💪" };
  };

  const message = getMessage();

  const getScoreColor = () => {
    if (percentage >= 70) return "text-emerald-600";
    if (percentage >= 50) return "text-amber-600";
    return "text-red-600";
  };

  return (
    <div className="w-full max-w-md mx-auto text-center animate-fade-in">
      {/* Quiz Title */}
      {quizTitle && (
        <div className="mb-6">
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
            {quizTitle}
          </span>
        </div>
      )}

      {/* Trophy Icon */}
      <div className="mb-8">
        <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
          <Trophy className="w-12 h-12 text-primary" />
        </div>
      </div>

      {/* Message */}
      <div className="mb-6">
        <span className="text-5xl mb-4 block">{message.emoji}</span>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          {message.text}
        </h2>
        <p className="text-muted-foreground">
          You've completed the quiz
        </p>
      </div>

      {/* Score Card */}
      <div className="bg-card border border-border rounded-2xl p-8 mb-8 shadow-sm">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Target className="w-5 h-5 text-muted-foreground" />
          <span className="text-muted-foreground font-medium">Your Score</span>
        </div>
        <div className={cn("text-6xl font-bold mb-2", getScoreColor())}>
          {percentage}%
        </div>
        <p className="text-lg text-muted-foreground">
          {score} out of {totalQuestions} correct
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <div
            className={cn(
              "h-full transition-all duration-1000 ease-out rounded-full",
              percentage >= 70 ? "bg-emerald-500" : percentage >= 50 ? "bg-amber-500" : "bg-red-500"
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={onRestart}
          size="lg"
          className="flex-1 h-12 text-base"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          Try Again
        </Button>
        <Button
          onClick={onHome}
          variant="outline"
          size="lg"
          className="flex-1 h-12 text-base"
        >
          <Home className="w-5 h-5 mr-2" />
          Home
        </Button>
      </div>
    </div>
  );
}
