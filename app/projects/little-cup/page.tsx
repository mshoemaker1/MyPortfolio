import { data } from "../../projectData";
import Header from "../../../components/Header";

const projectData = data.find(
  (project) => project.path === "/projects/little-cup"
);

export default function LittleCup() {
  return (
    <main>
      <Header path={projectData!.path} bgColor={projectData!.bg} />
    </main>
  );
}
