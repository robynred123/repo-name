import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import projects from "../projects";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [transform, setTransform] = useState<string>("none");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleMouseEnter = () => {
    setTransform("scale(1.03)");
  };

  const handleMouseLeave = () => {
    setTransform("none");
  };

  return (
    <>
      <Flex justifyContent="center" marginTop={10}>
        <Heading color="dark.green">Portfolio</Heading>
      </Flex>

      <Flex justifyContent="space-evenly" padding="4em">
        {projects.map((project, i) => {
          return (
            <Card
              key={i}
              className="card"
              data-testid="card"
              ref={divRef}
              onMouseMove={handleMouseMove}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => navigate(`/portfolio/${i}`)}
              color="dark.green"
              height="10em"
              style={{
                transform,
                background: `#19022c radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.15), transparent 40%)`,
              }}
            >
              <CardHeader fontSize={24} fontWeight={"bold"}>
                <h1>{project.title}</h1>
              </CardHeader>
              <CardBody>
                <Text>{project.description}</Text>
              </CardBody>
            </Card>
          );
        })}
      </Flex>
    </>
  );
};

export default Portfolio;
