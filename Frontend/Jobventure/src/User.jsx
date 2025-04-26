import { Motion } from "./Motion";
import { useState,useEffect, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
const Jobs = lazy(() => import("./Jobs"));
import { Link } from "react-router-dom";
import axios from "axios";

const User = () => {
    const [user, setUser] = useState(null);
    const [jobs,setJobs]=useState([])
    const navigate = useNavigate();

    const Logout=()=>{
        localStorage.removeItem("userData");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("job");
        localStorage.removeItem("postedJobs")
        navigate("/");
    }

    useEffect(() => {
        if (!user) return;
        const fetchJobs = async () => {
            try {
                const accessToken = localStorage.getItem("accessToken");
                const endPoint=user.status==="jobseeker"?"/getalljobs":"/getpostedjobs"
                const response = await axios.get(`http://localhost:8000/api/v1/jobs${endPoint}`, {
                    headers: { Authorization: `Bearer ${accessToken}` },
                });
                localStorage.setItem("postedJobs",response);
                setJobs(response.data.data);

            } catch (error) {
                console.error("Error fetching posted jobs:", error.response?.data?.message || error.message);
            }
        };

        fetchJobs();
    }, [user]);

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
                        src={user.avatar||"https://static.vecteezy.com/system/resources/thumbnails/016/058/540/small_2x/icon-person-design-and-line-art-icon-free-vector.jpg"}
                        alt="User"
                    />
                </div>
                <div className="flex justify-center mt-7">
                    <h1 className="text-amber-50 text-xl capitalize">{user.name}</h1>
                </div>
                <div className="mt-5 mr-1">
                    <Link to="/Profile"><button className="flex h-[50px] w-[240px] bg-violet-950 text-amber-50 justify-center items-center mb-2 ml-1 cursor-pointer hover:scale-105 hover:bg-violet-900">Profile</button></Link>
                    {user.status==="employer"&&<Link to="/Postjob"><button className="flex h-[50px] w-[240px] bg-violet-950 text-amber-50 justify-center items-center mb-2 ml-1 cursor-pointer hover:scale-105 hover:bg-violet-900">Post a Job</button></Link>}
                    <button className="flex h-[50px] w-[240px] bg-violet-950 text-amber-50 justify-center items-center mb-2 ml-1 cursor-pointer hover:scale-105 hover:bg-violet-900" onClick={Logout}>Logout</button>
                </div>
            </div>
            <Motion>
                <div className="mt-[60px] ml-[80px]">
                    {user.status==="jobseeker"&&
                   <h1 className="text-5xl">Find work that works for you!</h1>}
                   {user.status==="jobseeker"
                   &&
                   <img src="https://assets.entrepreneur.com/content/3x2/2000/20151120172744-procrastination-young-man-home-office-laptop-distracted-work-distant.jpeg"
                        className="h-[600px] w-[1100px] mt-[40px]"
                        alt="Job Search"
                    />}
                   {user.status==="employer"&&
                   <h1 className="text-5xl">Find your next star team member today.</h1>}
               {user.status==="employer"&&
                  <img src="https://www.jll.ie/images/global/treant-and-insights/jll-5-incentives-to-entice-employees-social-1200x628.jpg"
                   className="h-[600px] w-[1100px] mt-[40px]"
                   alt="Job Search"
               />}
                    <div>
                    <   div className="flex items-center mt-[100px]">
                        {user.status==="employer"&&
                            <h1 className="text-5xl ml-[120px] mr-[50px]">Posted jobs</h1>}
                            {user.status==="jobseeker"&&
                            <h1 className="text-5xl ml-[120px] mr-[50px]">Jobs</h1>}
                        </div>
    
                        <div className="flex flex-wrap ml-[100px]">
                            {jobs.length > 0 ? (
                                jobs.map((job) => (
                                <Jobs key={job._id} resData={job} />
                            ))) : (
                            <p className="text-center">No Jobs posted yet.</p>
                    )}</div></div>
                </div>
            </Motion>
        </div>
    );
};

export default User;
