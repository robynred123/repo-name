import {
  FaFolderOpen,
  FaGithub,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Flex, Heading, IconButton, Spacer } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";

const title = "<RP />";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <Flex style={{ height: "100%", flexDirection: "column" }}>
      <Flex
        bg="dark.black"
        alignItems="center"
        alignContent="center"
        padding="1em 1.5em"
        color="dark.green"
        boxShadow="0 0.3em rgba(107, 255, 193, 0.1), inset 0 -0.3em rgba(107, 255, 193, 0.5), inset 0 -0.4em rgba(107, 255, 193, 0.7)"
      >
        <Flex>
          <Heading
            size="lg"
            _hover={{ bg: "none", color: "dark.purple" }}
            onClick={() => navigate("/")}
          >
            {title}
          </Heading>
        </Flex>
        <Spacer />
        <Flex>
          <IconButton
            bg="none"
            _hover={{ bg: "none", color: "dark.purple" }}
            margin="0 10px"
            icon={<FaFolderOpen color="dark.green" size="3em" />}
            aria-label="portfolio page link"
            onClick={() => navigate("/portfolio")}
          />
          <IconButton
            bg="none"
            _hover={{ bg: "none", color: "dark.purple" }}
            margin="0 10px"
            icon={<FaLinkedin color="dark.green" size="3em" />}
            aria-label="portfolio page link"
            onClick={() => window.open("https://www.linkedin.com/in/rob-pines")}
          />
          <IconButton
            bg="none"
            _hover={{ bg: "none", color: "dark.purple" }}
            margin="0 10px"
            icon={<FaGithubSquare color="dark.green" size="3em" />}
            aria-label="portfolio page link"
            onClick={() => window.open("https://github.com/robynred123")}
          />
        </Flex>
      </Flex>
      <Flex
        bg="dark.black"
        position="relative"
        height="100%"
        width="100%"
        display="block"
      >
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default Layout;
