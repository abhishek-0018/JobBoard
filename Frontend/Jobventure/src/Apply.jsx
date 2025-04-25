import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Apply=()=>{

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [job,setJob]=useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    const pjob=localStorage.getItem("job");
    setJob(JSON.parse(pjob));
  },[])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      qualification,
      jobpost:job._id
    };

    const access = localStorage.getItem("accessToken");
    const endpoint = "/api/v1/apply/applyJob";

    try {
      const response = await axios.post(
        `http://localhost:8000${endpoint}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${access}`,
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/user");
    } catch (err) {
      console.error("Failed to Apply:", err);
    }
  };

    return(
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-slate-800 to-violet-800 px-4 py-10">
        {/* <Motion> */}
          <div className="w-full max-w-2xl bg-gradient-to-b from-slate-900 to-violet-900 p-10 rounded-3xl shadow-2xl">
            <h1 className="text-white text-4xl font-bold text-center mb-10">Apply to Job</h1>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              {[{ label: "Name", value: name, setter: setName },
                { label: "Email", value: email, setter: setEmail },
                { label: "Qualification (undergraduate, graduate)", value: qualification, setter: setQualification },
              ].map((field, idx) => (
                <input
                  key={idx}
                  type="text"
                  value={field.value}
                  onChange={(e) => field.setter(e.target.value)}
                  placeholder={field.label}
                  className="p-4 bg-violet-900 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                  autoComplete="off"
                />
              ))}
  
              
              <button
                type="submit"
                className="mt-6 bg-violet-700 text-white font-semibold py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-violet-600"
              >
                Apply
              </button>
            </form>
          </div>
        {/* </Motion> */}
      </div>
    )
}

export default Apply;