import { Motion } from "./Motion";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();
    const handleLogin = (e)  => {
        navigate("/Login");
    }
    const handleSignUp = (e)  => {
        navigate("/SignUp");
    }
    return (
        <div className="min-h-screen flex items-center justify-center text-white px-4 ">
            <Motion>
                <div className="text-center p-10 rounded-lg">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-amber-50 leading-tight">
                        The Ultimate Job Marketplace,
                        <br /> Where Talent Meets Opportunity!
                    </h1>

                    <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6">
                        <button
                            className="bg-slate-900 text-white text-lg font-semibold py-4 px-10 rounded-xl shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-violet-900"
                            onClick={handleLogin}
                        >
                            Login
                        </button>

                        <button
                            className="bg-slate-900 text-white text-lg font-semibold py-4 px-10 rounded-xl shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-violet-900"
                            onClick={handleSignUp}
                        >
                            SignUp
                        </button>
                    </div>
                </div>
            </Motion>
        </div>
    );
};

export default LandingPage;
