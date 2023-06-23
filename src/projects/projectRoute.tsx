import { useParams } from "react-router-dom";
import projects from ".";
import { Center, Heading } from "@chakra-ui/react";

const ProjectRoute = () => {
  const { projectId } = useParams();
  const project = projects[projectId];

  if (project.element) {
    return <>{project.element}</>;
  } else
    return (
      <Heading padding="3em" justifyContent="center">
        Something Went Wrong - This Project Does Not Exist
      </Heading>
    );
};

export default ProjectRoute;
