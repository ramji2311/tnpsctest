import { quizzes, QuizConfig } from "@/data/quizConfig";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calculator, Globe } from "lucide-react";

interface QuizSelectionProps {
  onSelectQuiz: (quizId: string) => void;
}

export function QuizSelection({ onSelectQuiz }: QuizSelectionProps) {
  const mathsQuizzes = quizzes.filter((q) => q.category === "maths");
  const gkQuizzes = quizzes.filter((q) => q.category === "gk");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Choose Your Quiz
          </h1>
          <p className="text-lg text-muted-foreground">
            Select a quiz to start practicing
          </p>
        </div>

        {/* Maths Section */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Calculator className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">Mathematics</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {mathsQuizzes.map((quiz) => (
              <QuizCard key={quiz.id} quiz={quiz} onSelect={onSelectQuiz} />
            ))}
          </div>
        </div>

        {/* GK Section */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Globe className="h-6 w-6 text-accent-foreground" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">General Knowledge</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {gkQuizzes.map((quiz) => (
              <QuizCard key={quiz.id} quiz={quiz} onSelect={onSelectQuiz} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface QuizCardProps {
  quiz: QuizConfig;
  onSelect: (quizId: string) => void;
}

function QuizCard({ quiz, onSelect }: QuizCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer group" onClick={() => onSelect(quiz.id)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <span className="text-3xl">{quiz.icon}</span>
          <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
            Day {quiz.day}
          </span>
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {quiz.title}
        </CardTitle>
        <CardDescription>{quiz.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            <BookOpen className="h-4 w-4 inline mr-1" />
            {quiz.questions.length} questions
          </span>
          <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            Start Quiz
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
