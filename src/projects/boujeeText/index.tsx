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
    </div>
  );
};

export default BoujeeText;
