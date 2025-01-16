import reactIcon from "../../assets/skills/reactIcon.svg";
import cssIcon from "../../assets/skills/cssIcon.svg";
import htmlIcon from "../../assets/skills/htmlIcon.svg";
import giticon from "../../assets/skills/gitIcon.svg";
import jsIcon from "../../assets/skills/jsIcon.svg";
import tsIcon from "../../assets/skills/tsIcon.svg";
import muiIcon from "../../assets/skills/muiIcon.svg";
import nextjsIcon from "../../assets/skills/nextjsIcon.svg";
import tailwindIcon from "../../assets/skills/tailwindIcon.svg";
import { Link } from "react-router-dom";
export default function Skills() {
  const mainImageClasses =
    "w-20 h-20 -translate-y-1 mt-1 bg-transparent translate-x-0 border border-black rounded-md p-1 px-4 shadow-[3px_3px_0_black] hover:shadow-[0_0_20px_white]  hover:-translate-y-0 hover:translate-x-1 transition-all duration-150 cursor-pointer";
  return (
    <div className="flex justify-center items-center gap-4">
      <h1 className="text-2xl font-bold text-blue-500">Skills{`>>`}</h1>
      <div className="flex flex-col">
        <div className="flex">
          <img className={mainImageClasses} src={reactIcon} alt="" />
          <img className={mainImageClasses} src={jsIcon} alt="" />
          <img className={mainImageClasses} src={tsIcon} alt="" />
        </div>
        <div className="flex">
          <img className={mainImageClasses} src={tailwindIcon} alt="" />
          <img className={mainImageClasses} src={nextjsIcon} alt="" />
          <img className={mainImageClasses} src={htmlIcon} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <img className={mainImageClasses} src={muiIcon} alt="" />
          <img className={mainImageClasses} src={cssIcon} alt="" />
          <img className={mainImageClasses} src={giticon} alt="" />
        </div>
      </div>
      <Link to="/projects" className="mainButton">
        Projects{`>>`}
      </Link>
    </div>
  );
}
