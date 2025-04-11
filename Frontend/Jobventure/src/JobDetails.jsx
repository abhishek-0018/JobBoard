import { Motion } from "./Motion";

const JobDetails=()=>{
    return (
        <diV className="flex">
        <div className="mt-[200px] ml-[100px] mb-[100px] text-amber-50 bg-gradient-to-b to-slate-800 from-violet-800 w-[800px] font-first rounded-2xl">
            <Motion>
            <div className="border-amber-50 text-4xl">
                <img className="rounded-2xl w-[800px] h-[400px]" src="https://www.jll.ie/images/global/treant-and-insights/jll-5-incentives-to-entice-employees-social-1200x628.jpg"></img>
                <div className="flex items-center gap-[180px]">
                <div className="ml-[100px] mt-[60px]">
                    <h1>Frontend Developer</h1>
                    <h1 className="text-xl">ABC</h1>
                    <div className="flex gap-9 mb-[60px] mt-[30px]">
                        <h1 className="text-xl">Kanpur</h1>
                        <h1 className="text-xl">Remote</h1>
                        <h1 className="text-xl">51-LPA</h1>
                    </div>
                </div>
                <button
                        type="submit"
                        className="bg-slate-900 h-[60px] text-white text-lg font-semibold py-4 px-10 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-violet-900"
                    >
                        Apply
                </button>
                </div>
                <hr></hr>
                <div className="m-[70px]">
                    <h1 className="mb-[20px]">Descriptions</h1>
                    <h1 className="text-2xl mb-[20px]">Overview</h1>
                    <h1 className="text-[17px]">Colored is a financial technology company that provides a revolutionary platform for businesses to access capital by transforming their recurring revenue streams into upfront capital. Founded in 2019, Colored aims to redefine the traditional financing model by offering an innovative solution that allows companies to unlock the value of their predictable revenue.</h1>
                    <h1 className="text-2xl my-[20px]"> Requirements</h1>
                    <ul className="text-[17px] list-disc">
                        <li className="m-2">Proficiency in HTML, CSS, and JavaScript.</li>
                        <li className="m-2">Familiarity with front-end frameworks like Bootstrap or Foundation.</li>
                        <li className="m-2">Basic knowledge of back-end technologies such as Node.js or PHP.</li>
                        <li className="m-2">Understanding of version control systems, such as Git.</li>
                        <li className="m-2">Understanding of version control systems, such as Git.</li>
                        <li className="m-2">Experience with responsive web design principles.</li>
                        <li className="m-2">Knowledge of web accessibility standards.</li>
                        <li className="m-2">Familiarity with cross-browser compatibility issues and ways to address them.</li>
                        <li className="m-2">Programming Languages: Experience with one or more programming languages commonly used in web development, such as JavaScript, Python, or Ruby.</li>
                        <li className="m-2">Problem-solving: Ability to troubleshoot and debug code, identify and resolve technical issues, and adapt to changing requirements.</li>
                        <li className="m-2">Communication: Strong verbal and written communication skills to collaborate effectively with team members, stakeholders, and clients.</li>
                        <li className="m-2">Learning mindset: Eagerness to learn new technologies and stay updated with industry trends and best practices in web development.</li>
                        <li className="m-2">Attention to detail: Strong attention to detail to ensure accuracy and precision in coding, design implementation, and testing.</li>
                    </ul>
                    <h1 className="text-2xl my-[20px]">Job Skills & Experience :</h1>
                    <ul className="text-[17px] list-disc">
                        <li className="m-2">Front-end Development: Basic understanding of front-end development concepts, including UI/UX principles, responsive design, and user-centered design.</li>
                        <li className="m-2">CMS Experience: Familiarity with content management systems (CMS) like WordPress, Joomla, or Drupal is beneficial.</li>
                        <li className="m-2">Collaboration: Ability to work effectively within a team, contribute ideas, and collaborate with designers, project managers, and other developers to deliver high-quality websites or web applications.</li>
                        <li className="m-2">Problem-solving and Debugging: Proficiency in identifying and resolving common coding issues, debugging techniques, and finding solutions to challenges encountered during development.</li>
                        <li className="m-2">Portfolio: A strong portfolio showcasing web development projects, demonstrating a range of technical skills, creativity, and problem-solving abilities.</li>
                    </ul>
                </div>
            </div>
            </Motion>
        </div>
        <Motion>
                <div className="mt-[200px] ml-[50px] mb-[100px]  text-4xl w-[500px] bg-slate-900 rounded-4xl h-fit">
                   <div className="my-[70px] mx-[20px]">
                    <h1>ABC</h1>
                    <h4 className="text-xl mb-[60px] ">Kanpur</h4>
                    <h1 className="text-2xl mb-[20px]">Overview</h1>
                    <h1  className="text-[17px]">Colored is a financial technology company that provides a revolutionary platform for businesses to access capital by transforming their recurring revenue streams into upfront capital. Founded in 2019, Colored aims to redefine the traditional financing model by offering an innovative solution that allows companies to unlock the value of their predictable revenue.</h1>
                    <hr className="my-[30px]"></hr>
                    <h1 className="m-[30px] text-2xl">Compony Size</h1>
                    <h1 className="m-[30px] text-xl text-violet-800">60-70</h1>
                    <h1  className="m-[30px] text-2xl">Founded in</h1>
                    <h1  className="m-[30px] text-xl text-violet-800">2025</h1>
                    <h1  className="m-[30px] text-2xl">Location</h1>
                    <h1  className="m-[30px] text-xl text-violet-800">Kanpur</h1>
                    <h1  className="m-[30px] text-2xl">Phone</h1>
                    <h1  className="m-[30px] text-xl text-violet-800">9936730698</h1>
                    <h1  className="m-[30px] text-2xl">Email</h1>
                    <h1  className="m-[30px] text-xl text-violet-800">abhisheksingh18017@gmail.com</h1>
                   </div>
                </div>
            </Motion>
        </diV>
    )
}

export default JobDetails