import { Card, CardBody, CardHeader, Flex, Text } from "@chakra-ui/react";
import projects from "../projects";
import { useRef, useState } from "react";

const Portfolio = () => {
  const borderValue: string = "1px solid rgba(107, 255, 193, 0.1)";

  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [transform, setTransform] = useState<string>("none");
  const [border, setBorder] = useState<string>(borderValue);

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
    setBorder("none");
  };

  const handleMouseLeave = () => {
    setTransform("none");
    setBorder(borderValue);
  };

  return (
    <>
      <Flex justifyContent="space-evenly" padding="4em">
        {projects.map((project, i) => {
          return (
            <Card
              key={i}
              className="card"
              ref={divRef}
              onMouseMove={handleMouseMove}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              color="dark.green"
              height="10em"
              style={{
                transform,
                border,
                background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.15), transparent 40%)`,
              }}
            >
              <CardHeader>
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
