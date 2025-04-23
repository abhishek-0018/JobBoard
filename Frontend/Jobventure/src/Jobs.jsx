import { Motion } from "./Motion";
import { Link } from "react-router-dom";

const Jobs = ({ resData }) =>{
    return (
        <Motion>
            <Link
                to={`/JobDetails/${resData._id}`}
                state={{ job: resData }}
                className="hover:scale-105 transition-transform duration-300"
                >
                <div className="flex justify-between items-center bg-gradient-to-b from-slate-800 to-violet-800 gap-7 m-7 rounded-3xl p-2 w-[450px]">
                    <div>
                        <h1 className="font-bold py-4 text-lg capitalize">{resData.title}</h1>
                        <hr className="bg-amber-50 w-[400px]"></hr>
                        <div className="flex gap-4">
                            <h6 className="text-xl capitalize">{resData.place}</h6>
                            <h6 className="text-xl capitalize">{resData.jobType}</h6>
                            <h6 className="text-xl capitalize">{resData.salary}</h6>
                        </div>
                    </div>
                </div>
            </Link>
        </Motion>
    )
}

export default Jobs;