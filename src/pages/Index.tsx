import { useState } from "react";
import { Quiz } from "@/components/quiz/Quiz";
import { QuizSelection } from "@/components/quiz/QuizSelection";

const Index = () => {
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);

  if (selectedQuizId) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center p-4">
        <Quiz quizId={selectedQuizId} onHome={() => setSelectedQuizId(null)} />
      </main>
    );
  }

  return <QuizSelection onSelectQuiz={setSelectedQuizId} />;
};

export default Index;
