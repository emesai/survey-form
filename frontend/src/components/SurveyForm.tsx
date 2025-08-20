"use client";

import { useState, FormEvent } from "react";
import { submitSurvey } from "@/actions/submitSurvey";
import SurveySummary from "@/components/SuveySummary";
import { Question, SurveyState } from "@/types";
import QuestionTable from "@/components/QuestionTable";
import EmployeeInfoForm from "@/components/EmployeeInfoForm";

export default function SurveyForm({ questions }: { questions: Question[] }) {
  const [state, setState] = useState<SurveyState>({ success: false, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setState({ success: false, message: "" });

    const formData = new FormData(e.currentTarget);
    const res = await submitSurvey(undefined, formData);

    setIsSubmitting(false);
    setState(res);
  }

  if (state.success && state.data) return <SurveySummary state={state.data} />;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {state.message && !state.success && (
        <div className="p-4 rounded-xl shadow-md bg-red-100 text-red-700">
          {state.message}
        </div>
      )}
      <EmployeeInfoForm />
      <QuestionTable questions={questions} />
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
        >
          {isSubmitting ? "Submitting..." : "🚀 Submit Survey"}
        </button>
      </div>
    </form>
  );
}
