import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
    const [action, setAction] = useState("Jobseeker");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !name || !password) {
            alert("Please fill all fields.");
            return;
        }

        const userData = {
            email,
            name,
            password,
            status: action.toLowerCase(),
        };

        try {
            const response = await axios.post("http://localhost:8000/api/v1/users/register", userData, {
                headers: { "Content-Type": "application/json" },
            });


            // if (response.data.success) {
            //     localStorage.setItem(
            //         "userData",
            //         JSON.stringify(response.data.data.user)
            //     );
            //     localStorage.setItem("accessToken", response.data.data.accessToken);
            //     navigate("/User");
            // }
            if (response.data.success) {
                localStorage.setItem("userData", JSON.stringify(response.data.data.user));
                localStorage.setItem("accessToken", response.data.data.accessToken);
                navigate("/Login");
            }
        } catch (error) {
            console.error("Error:", error.response?.data?.message || "Something went wrong");
            alert(error.response?.data?.message || "Error during authentication");
        }
    };

    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-b from-slate-800 to-violet-800 backdrop-blur-md">
            <div className="w-full max-w-lg bg-gradient-to-b from-slate-900 to-violet-900 p-10 rounded-2xl shadow-xl">
                {/* Title */}
                <h2 className="text-white text-3xl font-bold text-center mb-6">{action} Sign Up</h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Name Input */}
                    <div className="w-full bg-gradient-to-b from-violet-900 to-slate-900 rounded-md flex items-center px-4">
                        <input
                            placeholder="Full Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="p-3 w-full bg-transparent outline-none text-white placeholder-gray-400"
                            autoComplete="off"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="w-full bg-gradient-to-b from-violet-900 to-slate-900 rounded-md flex items-center px-4">
                        <input
                            placeholder="Email Address"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-3 w-full bg-transparent outline-none text-white placeholder-gray-400"
                            autoComplete="off"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="w-full bg-gradient-to-b from-violet-900 to-slate-900 rounded-md flex items-center px-4">
                        <input
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="p-3 w-full bg-transparent outline-none text-white placeholder-gray-400"
                            autoComplete="off"
                        />
                    </div>

                    {/* User Role Selection */}
                    <div className="flex gap-5 justify-center my-5">
                        <button
                            type="button"
                            className={`w-1/2 py-3 rounded-full font-semibold transition-all ${
                                action === "Jobseeker"
                                    ? "bg-gray-700 text-white"
                                    : "bg-gray-300 text-black hover:bg-gray-400"
                            }`}
                            onClick={() => setAction("Jobseeker")}
                        >
                            Job Seeker
                        </button>
                        <button
                            type="button"
                            className={`w-1/2 py-3 rounded-full font-semibold transition-all ${
                                action === "Employer"
                                    ? "bg-gray-700 text-white"
                                    : "bg-gray-300 text-black hover:bg-gray-400"
                            }`}
                            onClick={() => setAction("Employer")}
                        >
                            Employer
                        </button>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-slate-900 text-white text-lg font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-violet-900"
                        onClick={handleSubmit}
                    >
                        Sign Up as {action}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;