import Card from "./Card";
import todoProject from "../../assets/projects/lightTodo.png";
import ecommerceProject from "../../assets/projects/lightStore.png";

export default function Projects() {
  return (
    <div className="flex items-center flex-col my-12 gap-4">
      <div className="sm:w-[600px] w-[300px]">
        <svg
          className="svg-container"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 724 20"
        >
          <path
            d="M347.5.04c120.354 0 244.544 2.964 372.571 8.892l.302-6.493a1.5 1.5 0 012.997-.005v.144l-.743 15.983a1.5 1.5 0 01-2.997.005v-.144l.302-6.493-4.819-.222C588.834 5.929 466.296 3.039 347.5 3.039 229.193 3.04 114.72 6 4.078 11.918l.35 6.49a1.5 1.5 0 01-2.982.305l-.014-.144-.86-15.977a1.5 1.5 0 012.982-.305l.014.144.349 6.491 3.973-.211C117.352 2.93 230.556.039 347.5.039z"
            fill-rule="nonzero"
            className="animate-svg-bar"
          />
        </svg>
      </div>
      <h1 className="text-blue-700 text-2xl font-bold">Projects Section</h1>
      <div className="flex items-center justify-center gap-4 w-screen flex-wrap">
        <Card
          src={todoProject}
          alt={"todo Project"}
          text="Todo App With ReactJs,MUI and Firebase."
          repo="https://github.com/mootattar/Todo-App"
          link="https://todo-test-13fb8.web.app/"
        />
        <Card
          src={ecommerceProject}
          alt={"ecommerce Project"}
          text="Ecommerce App With It has many features like comments,rating and more."
          repo="https://github.com/mootattar/online-Store"
          link={""}
        />
      </div>
    </div>
  );
}
