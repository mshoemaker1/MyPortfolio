import { data } from "./projectData";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="my-28">
        <p className="flex w-full justify-center text-center">
          Hi! I'm Meg!
          <br />
          I'm a UX designer based in Minneapolis, MN
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            bg={project.bg}
            path={project.path}
          />
        ))}
      </div>
    </main>
  );
}
