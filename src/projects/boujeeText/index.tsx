import { CirclePicker } from "react-color";
import { ZustandState, useZustandStore } from "./zustand/zustandStore";
import "./styles.css";

const BoujeeText = () => {
  type Colour = {
    hex: string;
  };

  const colourOneZustand = useZustandStore(
    (state: ZustandState) => state.colourOneZustand
  );
  const colourTwoZustand = useZustandStore(
    (state: ZustandState) => state.colourTwoZustand
  );
  const colourThreeZustand = useZustandStore(
    (state: ZustandState) => state.colourThreeZustand
  );
  const { setColourOneZustand, setColourTwoZustand, setColourThreeZustand } =
    useZustandStore((state: ZustandState) => state);

  return (
    <div className="main-container">
      <h1
        className="text"
        style={{
          backgroundImage: `linear-gradient( 47deg, ${colourOneZustand}, ${colourTwoZustand},${colourThreeZustand}, ${colourOneZustand})`,
          backgroundSize: "600%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Hello world!
      </h1>
      <div className="colour-container">
        <div className="colour-input">
          <h2>Colour One</h2>
          <CirclePicker
            color={colourOneZustand}
            onChangeComplete={(color: Colour) => setColourOneZustand(color.hex)}
          />
        </div>

        <div className="colour-input">
          <h2>Colour Two</h2>
          <CirclePicker
            color={colourTwoZustand}
            onChangeComplete={(color: Colour) => setColourTwoZustand(color.hex)}
          />
        </div>

        <div className="colour-input">
          <h2>Colour Three</h2>
          <CirclePicker
            color={colourThreeZustand}
            onChangeComplete={(color: Colour) =>
              setColourThreeZustand(color.hex)
            }
          />
        </div>
      </div>
      <article>
        This was created using a tutorial published by Jhey Thompkins, it uses
        Zustand to manage the colours selected, meaning that if you navigate to
        another project or page on this website, the colours you select should
        remain.
        <br />I created this as part of a state-management application, which I
        used to help teach my junior mentee about what state management is, and
        some of the popular state-management frameworks they might encounter,
        including Zustand, Redux, Mob-x, and react-hooks.
      </article>
    </div>
  );
};

export default BoujeeText;
