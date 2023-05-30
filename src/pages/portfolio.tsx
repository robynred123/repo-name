import { Flex, Heading } from "@chakra-ui/react";
import projects from "../projects";

const project = projects[0];

const Portfolio = () => {
  return (
    <>
      <Flex justifyContent="center">{project.element}</Flex>
    </>
  );
};

export default Portfolio;
