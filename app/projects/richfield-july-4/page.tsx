import { data } from "../../projectData";
import Header from "../../../components/Header";

const projectData = data.find(
  (project) => project.path === "/projects/richfield-july-4"
);

export default function RichfieldJuly4() {
  return (
    <main>
      <Header path={projectData!.path} />
    </main>
  );
}
