import { Motion } from "./Motion";
import { Link } from "react-router-dom";

const Jobs = ({ resData }) =>{
    
    return (
        <div className="flex justify-center items-center bg-gradient-to-b from-slate-800 to-violet-800">
        <h1 className="font-bold py-4 text-lg">{resData.title}</h1>
        <h6>{resData.overview}</h6>
    </div>
    )
}

export default Jobs;