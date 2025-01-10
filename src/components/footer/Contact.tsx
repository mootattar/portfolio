import facebookIcon from "../../assets/social/facebookIcon.svg";
import linkedInIcon from "../../assets/social/linkedinIcon.svg";
import emailIcon from "../../assets/social/emailIcon.svg";
export default function Contact() {
  const mainImageClasses =
    "w-20 h-20 -translate-y-1 mt-1 bg-transparent translate-x-0 border border-black rounded-md p-1 px-4 shadow-[3px_3px_0_black] hover:shadow-[0_0_20px_white]  hover:-translate-y-0 hover:translate-x-1 transition-all duration-150 cursor-pointer";

  return (
    <div style={{ marginTop: "150px" }} className="lvl1">
      <h1 className="text-xl font-bold text-blue-500 mb-4">
        I would be very happy if we work together! 😊
      </h1>
      <p className="text-xl mb-6 text-center">
        📱 💬 Social media platforms 🌐 📸{" "}
      </p>
      <div className="flex justify-center items-center gap-2 flex-wrap">
        <h1 className="text-xl font-bold text-blue-500">
          Social💬 Media🌐 {`>>`}
        </h1>
        <a
          href="https://www.linkedin.com/in/abdulrahman-al-attar-40a7b22b0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={mainImageClasses} src={linkedInIcon} alt="linkedIn" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100076633877305"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={mainImageClasses} src={facebookIcon} alt="facebook" />
        </a>
        <a href="mailto:mootattar@gmail.com">
          <img className={mainImageClasses} src={emailIcon} alt="email" />
        </a>
      </div>
    </div>
  );
}
