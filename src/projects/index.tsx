import BoujeeText from "./boujeeText";

type Project = {
  title: string;
  description: string;
  element: JSX.Element;
};

const projects: Project[] = [
  {
    title: "Jhey Thompkin's Boujee Text",
    description:
      "Dynamic Text following a tutorial by Jhey Thompkins with zustand",
    element: <BoujeeText />,
  },
];

export default projects;
