import SurveyForm from "@/components/SurveyForm";
import { API_URL } from "../../config";

async function getQuestions() {
  console.log(API_URL)
  const res = await fetch(`${API_URL}/questions`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch questions");
  return res.json();
}

export default async function Home() {
  const questions = await getQuestions();

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Supervisor Assessment Form</h1>
      <SurveyForm questions={questions} />
    </div>
  );
}
