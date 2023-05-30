import {
  Box,
  Card,
  Container,
  Flex,
  Heading,
  Image,
  SkeletonCircle,
  Spacer,
  Text,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex width="100%" padding="2em 15%" flexDirection="column">
      <Flex width="100%" direction={{ base: "column", lg: "row" }}>
        <Container alignItems="center" display="flex" maxH="430px" maxW="430px">
          <Image
            src={require("../../assets/personal-photo.jpg")}
            alt="a selfie of myself"
            borderRadius="100%"
            data-testid="image"
            fallback={
              <SkeletonCircle
                h="100%"
                w="100%"
                endColor="dark.black"
                startColor="dark.purple"
                fadeDuration={10}
                data-testid="skeleton"
              />
            }
          />
        </Container>
        <Spacer />
        <Container color={"dark.green"} textAlign="justify">
          <Heading>About Me</Heading>
          <Text fontSize="xl" as="b">
            I am a full-stack software engineer with a front-end focus with
            experience in Typescript, React, React Native, and AWS.
          </Text>
          <Text fontSize="xl">
            With 5 years experience, I have worked on multiple projects,
            including Asda's Scan & Go mobile & handset applications, Cinch's
            back-office support solutions, and a domain discovery period for a
            lender integrations finance platform.
          </Text>
          <Text fontSize="xl">
            I have a level 3 and 4 apprenticeship qualification in Software
            Development, and believe very strongly in supporting and mentoring
            junior colleagues and those starting their tech journey.
          </Text>
        </Container>
      </Flex>
      <Spacer />
      <Flex padding="2em" justifyContent="center">
        <Card
          bg="dark.black"
          padding="2em"
          border="1px dark.green"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Text size="xl" color="dark.green" padding="2em 0">
            To read more about my experience, click the button.
          </Text>
          <Box
            as="button"
            h="5em"
            w="10em"
            bg="dark.green"
            color="dark.purple"
            border="1px dark.purple"
            borderRadius="20px"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            _hover={{ bg: "dark.purple", color: "dark.green" }}
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(182, 234, 218, .75), 0 1px 1px rgba(0, 0, 0, .15)",
              color: "dark.green",
              bg: "dark.purple",
            }}
            aria-label="view cv"
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/1d_35XuZetaVdmdy162hWWf1-b40UCj8iRbHt2Q8da-4/edit?usp=sharing",
                "_blank"
              )
            }
          >
            <Text as="b">Download My CV</Text>
          </Box>
        </Card>
      </Flex>
    </Flex>
  );
};

export default Home;
