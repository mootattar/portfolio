import postmanIcon from "../../assets/tools/postmanIcon.svg";
import vsCodeIcon from "../../assets/tools/vsCodeIcon.svg";
import gptIcon from "../../assets/tools/gpticon.svg";
import githubIcon from "../../assets/tools/githubIcon.svg";

export default function Tools() {
  const mainImageClasses =
    "w-20 h-20 -translate-y-1 mt-1 bg-transparent translate-x-0 border border-black rounded-md p-1 px-4 shadow-[3px_3px_0_black] hover:shadow-[0_0_20px_white]  hover:-translate-y-0 hover:translate-x-1 transition-all duration-150 cursor-pointer";
  return (
    <div className="flex justify-center items-center gap-4">
      <h1 className="text-2xl font-bold text-blue-500">Tools{`>>`}</h1>
      <img className={mainImageClasses} src={postmanIcon} alt="postman" />
      <img className={mainImageClasses} src={vsCodeIcon} alt="vsCode" />
      <img className={mainImageClasses} src={gptIcon} alt="gpt" />
      <a href="https://github.com/mootattar" target="_blank">
        <img className={mainImageClasses} src={githubIcon} alt="github" />
      </a>
    </div>
  );
}
