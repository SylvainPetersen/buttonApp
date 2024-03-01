import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  Tab,
  InlineDrawer,
  makeStyles,
  Button,
  shorthands,
  Persona,
  tokens,
  Dropdown,
  useId,
  Option,
} from "@fluentui/react-components";
import { useState } from "react";

const useStyles = makeStyles({
  content: {
    ...shorthands.flex(1),
    display: "block",
    width: "10px",
    marginTop: "70px",
    marginLeft: "-195px",
  },
});

export function Start() {
  const divstyles = useStyles();
  const options = ["Dansk", "English"];
  const [selected, setSelected] = useState({ key: options[0] });

  return (
    <>
      <div className={divstyles.content}>
        <div>
          <h2>Velkommen</h2>
        </div>
        <div>
          <p>FastTimeIt er installeret korrekt på denne computer.</p>
        </div>
        <div>
          {/* <Dropdown placeholder={options[0]}>
            {options.map((option) => (
              <Option key={option}>{option}</Option>
            ))}
          </Dropdown> */}
          <Dropdown placeholder={options[0]}>
            {options.map((option) => (
              <Option key={option} disabled={option === selected}>
                {option}
              </Option>
            ))}
          </Dropdown>
        </div>
      </div>
    </>
  );
}
