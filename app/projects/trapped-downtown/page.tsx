import { data } from "../../projectData";
import Header from "../../../components/Header";

const projectData = data.find(
  (project) => project.path === "/projects/trapped-downtown"
);

export default function TrappedDowntown() {
  return (
    <main>
      <Header path={projectData?.path} />
    </main>
  );
}
