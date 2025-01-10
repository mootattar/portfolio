import { useState } from "react";
import { Link } from "react-router-dom";

export default function MainHeader() {
  const [selected, setSelected] = useState("Home");
  const handleSelected = (e: React.MouseEvent<HTMLElement>) => {
    const liElement = e.currentTarget as HTMLLIElement;
    setSelected(liElement.textContent || "");
  };
  const mianLiClasses =
    "bg-transparent text-blue-500 gap-4 -translate-y-1 translate-x-0 border border-black rounded-md p-1 px-4 shadow-[3px_3px_0_black] hover:shadow-[0_0_20px_white]  hover:-translate-y-0 hover:translate-x-1 transition-all duration-150 cursor-pointer";
  return (
    <div className="bg-transparent my-20 sticky top-2">
      <ul className="flex justify-center items-center flex-wrap p-4 bg-transparent gap-8">
        <Link
          to="/"
          onClick={(e) => handleSelected(e)}
          className={`${selected === "Home" && "selected"} ${mianLiClasses}`}
        >
          Home
        </Link>
        <Link
          to="/skills"
          onClick={(e) => handleSelected(e)}
          className={`${selected === "Skills" && "selected"} ${mianLiClasses}`}
        >
          Skills
        </Link>
        <Link
          to="/projects"
          onClick={(e) => handleSelected(e)}
          className={`${
            selected === "Projects" && "selected"
          } ${mianLiClasses}`}
        >
          Projects
        </Link>
        <Link
          to="/tools"
          onClick={(e) => handleSelected(e)}
          className={`${selected === "Tools" && "selected"} ${mianLiClasses}`}
        >
          Tools
        </Link>
        <Link
          to="/contact"
          onClick={(e) => handleSelected(e)}
          className={`${
            selected === "Contact Me" && "selected"
          } ${mianLiClasses}`}
        >
          Contact Me
        </Link>
      </ul>
    </div>
  );
}
