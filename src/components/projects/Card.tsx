type CardProps = {
  src: string;
  alt: string;
  text: string;
  link?: string; // Optional property
  repo: string;
};
export default function Card({ src, alt, text, link, repo }: CardProps) {
  const mainButtonClasses =
    "bg-transparent text-blue-500  -translate-y-1 translate-x-0 border border-black rounded-md p-1 px-4 shadow-[3px_3px_0_black] hover:shadow-[0_0_20px_white]  hover:-translate-y-0 hover:translate-x-1 transition-all duration-150 cursor-pointer";

  return (
    <div className="lvl1 w-80 h-auto p-0 gap-4">
      <img src={src} alt={alt} className="border border-black rounded-md" />
      <p className="text-xl font-bold">{text}</p>
      <div className="flex gap-4 items-center justify-between p-4 ">
        {link && (
          <a href={link} target="_blank">
            <button className={mainButtonClasses}>Visit</button>
          </a>
        )}
        <a href={repo} target="_blank">
          <button className={mainButtonClasses}>Repo</button>
        </a>
      </div>
    </div>
  );
}
