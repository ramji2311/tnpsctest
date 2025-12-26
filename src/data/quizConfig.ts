import { questions as mathsDay1Questions } from "./questions";
import { mathsDay2Questions } from "./mathsDay2Questions";
import { gkDay1Questions } from "./gkDay1Questions";
import { Question } from "./questions";

export interface QuizConfig {
  id: string;
  title: string;
  description: string;
  category: "maths" | "gk";
  day: number;
  questions: Question[];
  icon: string;
}

export const quizzes: QuizConfig[] = [
  {
    id: "maths-day1",
    title: "Maths Day 1",
    description: "205 questions covering arithmetic, geometry, and algebra basics",
    category: "maths",
    day: 1,
    questions: mathsDay1Questions,
    icon: "📐",
  },
  {
    id: "maths-day2",
    title: "Maths Day 2",
    description: "140 questions on fractions, percentages, and advanced topics",
    category: "maths",
    day: 2,
    questions: mathsDay2Questions,
    icon: "🔢",
  },
  {
    id: "gk-day1",
    title: "GK Day 1",
    description: "112 questions on geography, science, and world knowledge",
    category: "gk",
    day: 1,
    questions: gkDay1Questions,
    icon: "🌍",
  },
];

export function getQuizById(id: string): QuizConfig | undefined {
  return quizzes.find((quiz) => quiz.id === id);
}
