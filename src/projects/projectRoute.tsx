import { useParams } from "react-router-dom";
import projects from ".";

const ProjectRoute = () => {
  const { projectId } = useParams();
  console.log(projectId);
  const project = projects[projectId];

  if (project.element) {
    return <>{project.element}</>;
  } else return <h1>Error</h1>;
};

export default ProjectRoute;
