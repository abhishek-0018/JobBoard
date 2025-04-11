import { Motion } from "./Motion";
import { useState,useEffect, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
const Jobs = lazy(() => import("./Jobs"));

const User = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const Logout=()=>{
        localStorage.removeItem("userData");
        localStorage.removeItem("accessToken");
        navigate("/");
    }

    useEffect(() => {
        const storedUser = localStorage.getItem("userData");
        if (!storedUser) {
            navigate("/");
            return;
        }
  
        try {
            setUser(JSON.parse(storedUser));
        } catch (error) {
            console.error("Invalid JSON in localStorage:", error);
            localStorage.removeItem("userData");
            navigate("/");
        }
    }, []);
    if (!user) {
        return <p className="text-center mt-20">Redirecting to login...</p>;
    }

    return (
        <div className="flex ">
            <div className="flex flex-col w-[250px] bg-purple-900  h-[700px] rounded-b-full ml-3 ">
                <div className="flex justify-center mt-[50px]">
                    <img className="h-[200px] w-[200px] rounded-full"
                        src="https://static.vecteezy.com/system/resources/thumbnails/016/058/540/small_2x/icon-person-design-and-line-art-icon-free-vector.jpg"
                        alt="User"
                    />
                </div>
                <div className="flex justify-center mt-7">
                    <h1 className="text-amber-50 text-xl">{user.name}</h1>
                </div>
                <div className="mt-5">
                    <button className="flex h-[50px] w-[240px] bg-violet-950 text-amber-50 justify-center items-center mb-2 ml-1 cursor-pointer hover:scale-105 hover:bg-violet-900">Profile</button>
                    <button className="flex h-[50px] w-[240px] bg-violet-950 text-amber-50 justify-center items-center mb-2 ml-1 cursor-pointer hover:scale-105 hover:bg-violet-900">Applied Jobs</button>
                    <button className="flex h-[50px] w-[240px] bg-violet-950 text-amber-50 justify-center items-center mb-2 ml-1 cursor-pointer hover:scale-105 hover:bg-violet-900">Interested In</button>
                    <button className="flex h-[50px] w-[240px] bg-violet-950 text-amber-50 justify-center items-center mb-2 ml-1 cursor-pointer hover:scale-105 hover:bg-violet-900" onClick={Logout}>Logout</button>
                </div>
            </div>
            <Motion>
                <div className="mt-[60px] ml-[80px]">
                    {status === "Jobseeker" && <h1>Find work that works for you!</h1>}
                    <img src="https://assets.entrepreneur.com/content/3x2/2000/20151120172744-procrastination-young-man-home-office-laptop-distracted-work-distant.jpeg"
                        className="h-[600px] w-[1100px] mt-[40px]"
                        alt="Job Search"
                    />
                    <Suspense>
                        <Jobs/>
                    </Suspense>
                </div>
            </Motion>
        </div>
    );
};

export default User;
