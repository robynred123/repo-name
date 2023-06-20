import React from "react";
import { StarIcon } from "@chakra-ui/icons";
import { Flex, Heading, IconButton, Spacer } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";

const title = "<RB />";

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
          <Heading size="lg" onClick={() => navigate("/")}>
            {title}
          </Heading>
        </Flex>
        <Spacer />
        <Flex>
          <IconButton
            bg="none"
            _hover={{ bg: "none", color: "dark.purple" }}
            icon={<StarIcon color="dark.green" h="100%" w="100%" />}
            aria-label="portfolio page link"
            onClick={() => navigate("/portfolio")}
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
