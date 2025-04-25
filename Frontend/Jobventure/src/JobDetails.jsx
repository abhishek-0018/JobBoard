import { Motion } from "./Motion";
import { useNavigate, useLocation, useParams } from "react-router-dom";
const JobDetails=()=>{
    const { id } = useParams();
    const location = useLocation();
    const job = location.state?.job;
    const user=JSON.parse(localStorage.getItem("userData"));
    const navigate = useNavigate();

    if (!job) return <p>Job details not found. Please navigate from the jobs list.</p>;

    const handleApply= async(e)=>{
        e.preventDefault();
        localStorage.setItem("job",JSON.stringify(job));
        navigate("/Applyjob")
    }

    return (
        <div className="flex">
        <Motion>
        <div className="mt-[200px] ml-[100px] mb-[100px] text-amber-50 bg-gradient-to-b to-slate-800 from-violet-800 w-[800px] font-first rounded-2xl">
            <div className="border-amber-50 text-4xl">
                <img className="rounded-2xl w-[800px] h-[400px]" src="https://www.jll.ie/images/global/treant-and-insights/jll-5-incentives-to-entice-employees-social-1200x628.jpg"></img>
                <div className="flex items-center gap-[180px]">
                <div className="mt-[90px]">
                    <div className="flex justify-between mx-[100px]">
                    <div>
                    <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
                    <h1 className="text-xl">ABC</h1>
                    </div>
                    <div>
                    {user.status==="jobseeker"&&<button
                        className="bg-slate-900 h-[60px] text-white text-lg font-semibold py-4 px-10 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-violet-900"
                        onClick={handleApply}
                    >
                        Apply
                </button>}
                    </div>
                    </div>
                    <div className="flex gap-9 my-[30px] ml-[100px]">
                        <h1 className="text-xl capitalize">Location: {job.place}</h1>
                        <h1 className="text-xl capitalize">Type: {job.jobType}</h1>
                        <h1 className="text-xl">Salary: {job.salary}</h1>
                        <h1 className="text-xl">Last date: {new Date(job.lastDate).toLocaleDateString("en-IN")}</h1>
                    </div>
                </div>
                </div>
                <div className="mx-[70px]">
                    <hr className="my-[100px]"></hr>
                    <h1 className="mb-[20px]">Descriptions</h1>
                    <h1 className="text-2xl mb-[20px]">Overview</h1>
                    <h1 className="text-[17px]">{job.overview}</h1>
                    <hr className="my-[100px]"></hr>
                    <h1 className="text-2xl my-[20px]">Requirements</h1>
                    <ul className="list-disc pl-6 text-[17px] mb-[90px]">
                        {job.requiredSkills?.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        </Motion>
        <Motion>
                <div className="mt-[200px] ml-[50px] mb-[100px]  text-4xl w-[500px] bg-slate-900 rounded-4xl h-fit">
                   <div className="my-[70px] mx-[20px]">
                    <h1>ABC</h1>
                    <h4 className="text-xl mb-[60px] ">{job.place}</h4>
                    <h1 className="text-2xl mb-[20px]">Overview</h1>
                    <h1  className="text-[17px]">{job.overview}</h1>
                    <hr className="my-[30px]"></hr>
                    <h1  className="m-[30px] text-2xl">Founded in</h1>
                    <h1  className="m-[30px] text-xl text-violet-800">2025</h1>
                    <h1  className="m-[30px] text-2xl">Location</h1>
                    <h1  className="m-[30px] text-xl text-violet-800">{job.place}</h1>
                    <h1  className="m-[30px] text-2xl">Phone</h1>
                    <h1  className="m-[30px] text-xl text-violet-800">9936730698</h1>
                    <h1  className="m-[30px] text-2xl">Email</h1>
                    <h1  className="m-[30px] text-xl text-violet-800">abhisheksingh18017@gmail.com</h1>
                   </div>
                </div>
            </Motion>
        </div>
    )
}

export default JobDetails