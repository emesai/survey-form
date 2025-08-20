import { Question } from "@/types";

export default function QuestionTable({ questions }: { questions: Question[] }) {
    const options = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    const values = [5, 4, 3, 2, 1];

    return (
        <div className="bg-white shadow-md rounded-2xl p-6 border">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">📋 How do you feel about management?</h2>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                    <thead>
                        <tr className="bg-gray-100 text-gray-600">
                            <th className="text-left p-3 border rounded-l-lg">Question</th>
                            {options.map((label, i) => (
                                <th key={label} className={`p-3 border ${i === options.length - 1 ? "rounded-r-lg" : ""}`}>
                                    {label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((q, idx) => (
                            <tr key={q.id} className="hover:bg-gray-50 transition">
                                <td className="border p-3 font-medium text-gray-700">
                                    {idx + 1}. {q.question_text}
                                </td>
                                {values.map((val) => (
                                    <td key={val} className="border text-center p-0 cursor-pointer">
                                        <label className="w-full h-full flex items-center justify-center p-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name={`question-${q.id}`}
                                                value={val}
                                                className="h-4 w-4 text-blue-600 cursor-pointer"
                                                required
                                            />
                                        </label>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}