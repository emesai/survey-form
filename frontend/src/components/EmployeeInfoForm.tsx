export default function EmployeeInfoForm() {
    const inputClass =
        "border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none";

    return (
        <div className="bg-white shadow-md rounded-2xl p-6 space-y-4 border">
            <h2 className="text-xl font-semibold text-gray-700">👤 Employee Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="first_name" placeholder="First Name" className={inputClass} required />
                <input name="last_name" placeholder="Last Name" className={inputClass} required />
            </div>
            <input type="email" name="email" placeholder="Email" className={`${inputClass} w-full`} required />
            <input name="department" placeholder="Department" className={`${inputClass} w-full`} required />
            <select name="years_with_company" className={`${inputClass} w-full`} required>
                <option value="">Select years with company</option>
                {[...Array(11)].map((_, i) => (
                    <option key={i} value={i}>
                        {i} year{i !== 1 ? "s" : ""}
                    </option>
                ))}
            </select>
        </div>
    );
}