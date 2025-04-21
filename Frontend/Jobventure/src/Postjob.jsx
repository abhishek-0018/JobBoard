import { Motion } from "./Motion";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Postjob = () => {
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [salary, setSalary] = useState("");
  const [type, setType] = useState("");
  const [overview, setOverview] = useState("");
  const [requirements, setRequirements] = useState([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const addRequirement = (e) => {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault();
      setRequirements([...requirements, input.trim()]);
      setInput("");
    }
  };

  const removeRequirement = (index) => {
    const updated = [...requirements];
    updated.splice(index, 1);
    setRequirements(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title,
      place,
      salary,
      jobType: type,
      overview,
      requiredSkills: requirements,
    };

    const access = localStorage.getItem("accessToken");
    const endpoint = "/api/v1/jobs/postJob";

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
      localStorage.removeItem("postedJobs");
      localStorage.setItem(
        "postedJobs",
        JSON.stringify(response.data.data)
      );
      navigate("/user");
    } catch (err) {
      console.error("Failed to post job:", err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-slate-800 to-violet-800 px-4 py-10">
      {/* <Motion> */}
        <div className="w-full max-w-2xl bg-gradient-to-b from-slate-900 to-violet-900 p-10 rounded-3xl shadow-2xl">
          <h1 className="text-white text-4xl font-bold text-center mb-10">Post a Job</h1>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {[{ label: "Title", value: title, setter: setTitle },
              { label: "Overview", value: overview, setter: setOverview },
              { label: "Type (remote, hybrid, onsite)", value: type, setter: setType },
              { label: "Place", value: place, setter: setPlace },
              { label: "Salary", value: salary, setter: setSalary }
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

            <div>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={addRequirement}
                placeholder="Press Enter to add requirement"
                className="p-4 bg-violet-900 text-white placeholder-gray-400 rounded-lg w-full mb-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <ul className="space-y-2">
                {requirements.map((req, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center bg-violet-800 text-white px-4 py-2 rounded-md shadow-md"
                  >
                    {req}
                    <button
                      type="button"
                      onClick={() => removeRequirement(index)}
                      className="ml-4 text-red-400 hover:text-red-600"
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="submit"
              className="mt-6 bg-violet-700 text-white font-semibold py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-violet-600"
            >
              Post Job
            </button>
          </form>
        </div>
      {/* </Motion> */}
    </div>
  );
};

export default Postjob;
