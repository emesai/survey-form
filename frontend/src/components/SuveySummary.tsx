import { SurveyState } from "@/types";

export default function SurveySummary({ state }: { state: NonNullable<SurveyState["data"]> }) {
    const { employee, satisfaction } = state;

    return (
        <div className="bg-white shadow-md rounded-2xl p-6 space-y-6 border text-center">
            <h2 className="text-2xl font-bold text-gray-800">🎉 Thank You for Your Feedback!</h2>

            <div className="bg-gray-50 rounded-xl p-4 text-left">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">👤 Employee Summary</h3>
                <ul className="space-y-1 text-gray-800">
                    <li><span className="font-medium">Name:</span> {employee.first_name} {employee.last_name}</li>
                    <li><span className="font-medium">Email:</span> {employee.email}</li>
                    <li><span className="font-medium">Department:</span> {employee.department}</li>
                    <li><span className="font-medium">Years with Company:</span> {employee.years_with_company}</li>
                </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 flex flex-col items-center">
                <h3 className="text-xl font-semibold text-gray-700 mt-3">Your Satisfaction Level</h3>
                <p className="text-lg mt-2 text-gray-800">
                    {satisfaction.category}
                </p>
            </div>
        </div>
    );
}