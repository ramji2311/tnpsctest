import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Quiz } from "@/components/quiz/Quiz";
import { Brain, Calculator, Shapes, TrendingUp } from "lucide-react";

const Index = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  if (isQuizStarted) {
    return (
      <main className="min-h-screen bg-background px-4 py-8 md:py-16">
        <Quiz onHome={() => setIsQuizStarted(false)} />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
              <Calculator className="w-10 h-10 text-primary" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Math Practice Quiz
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Sharpen your math skills with instant feedback. 
            Each session presents 10 random questions covering arithmetic, geometry, and algebra.
          </p>

          {/* CTA Button */}
          <Button
            onClick={() => setIsQuizStarted(true)}
            size="lg"
            className="h-14 px-10 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            Start Quiz
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">205 Questions</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive question bank covering essential math topics
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Instant Feedback</h3>
              <p className="text-sm text-muted-foreground">
                See the correct answer immediately after each question
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                <Shapes className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Random Order</h3>
              <p className="text-sm text-muted-foreground">
                Each quiz presents questions in a fresh, randomized sequence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 px-4">
        <p className="text-center text-sm text-muted-foreground">
          Practice makes perfect. Keep learning!
        </p>
      </footer>
    </main>
  );
};

export default Index;
