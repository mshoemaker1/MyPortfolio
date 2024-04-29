import projectImage1 from "../public/sample-project-001.jpeg";
import projectImage2 from "../public/sample-project-002.jpeg";
import projectImage3 from "../public/sample-project-003.jpeg";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Unlocking more bookings",
    description: "Refreshing the Trapped Downtown website",
    image: projectImage1,
    bg: "bg-[#7D9968]",
    path: "/projects/trapped-downtown",
  },
  {
    title: "Community engagemnent",
    description: "Relaunching the Richfield July 4th website",
    image: projectImage2,
    bg: "bg-[#9C9AC1]",
    path: "/projects/richfield-july-4",
  },
  {
    title: "Project Title",
    description: "Some description text here",
    image: projectImage3,
    bg: "bg-[#D3C3AC]",
    path: "",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="my-28">
        <p className="flex w-full justify-center text-center">
          Hi! I'm Meg
          <br />
          and I'm a designer
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
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
