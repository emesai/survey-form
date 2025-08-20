/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { API_URL } from "../../config";

export async function submitSurvey(prevState: any, formData: FormData) {
  try {
    const employee = {
      first_name: formData.get("first_name") as string,
      last_name: formData.get("last_name") as string,
      email: formData.get("email") as string,
      department: formData.get("department") as string,
      years_with_company: Number(formData.get("years_with_company")),
    };

    const answers: { question_id: number; answer_value: number }[] = [];
    for (const [key, value] of formData.entries()) {
      if (key.startsWith("question-")) {
        const qid = Number(key.split("-")[1]);
        answers.push({ question_id: qid, answer_value: Number(value) });
      }
    }

    const payload = { employee, answers };

    const res = await fetch(`${API_URL}/responses/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.json();
      return { success: false, message: err.error || "Submit failed" };
    }

    const data = await res.json();
    return {
      success: true,
      message: "Survey submitted successfully!",
      data: {
        employee: data.data.employee,
        satisfaction: data.data.satisfaction
      }
    };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}
