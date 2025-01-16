import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Award,
  Hammer,
  House,
  LaptopMinimalCheck,
  MessagesSquare,
} from "lucide-react";
export default function MainHeader() {
  const [selected, setSelected] = useState("HOME");
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname.slice(1).toUpperCase().replace("/", ""));
    setSelected(
      location.pathname.slice(1).toUpperCase().replace("/", "") || "HOME"
    );
  }, [location.pathname]);
  return (
    <div className="bg-transparent sticky top-20 flex justify-start">
      <ul className="flex justify-center items-center sm:flex-col flex-wrap p-4 bg-transparent gap-8">
        <Link
          to="/"
          className={`${selected === "HOME" && "selected"} mainButton`}
        >
          Home
          <House size={24} />
        </Link>
        <Link
          to="/skills"
          className={`${selected === "SKILLS" && "selected"} mainButton`}
        >
          Skills
          <Award size={24} />
        </Link>
        <Link
          to="/projects"
          className={`${selected === "PROJECTS" && "selected"} mainButton`}
        >
          Projects
          <LaptopMinimalCheck size={24} />
        </Link>
        <Link
          to="/tools"
          className={`${selected === "TOOLS" && "selected"} mainButton`}
        >
          Tools
          <Hammer size={24} />
        </Link>
        <Link
          to="/contact"
          className={`${selected === "CONTACT" && "selected"} mainButton`}
        >
          Contact
          <MessagesSquare size={24} />
        </Link>
      </ul>
    </div>
  );
}
