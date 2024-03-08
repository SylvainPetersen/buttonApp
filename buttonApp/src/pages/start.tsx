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
import { useTranslation } from "react-i18next";

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
  // const [selected, setSelected] = useState({ key: options[0] });
  const [t, i18n] = useTranslation("global");

  // const handleChange = (option: string) => {
  //   i18n.changeLanguage(option);
  //   setSelected({ ...selected, key: option });
  // };

  return (
    <>
      <div className={divstyles.content}>
        <div>
          <h2>{t("start.welcome")}</h2>
        </div>
        <div>
          <p>{t("start.description")}</p>
        </div>
        <div>
          <Dropdown placeholder={t("layout.language")}>
            {options
              .filter((options) => !options.includes(t("layout.language")))
              .map((option) => (
                <Option
                  key={option}
                  onClick={() => {
                    // handleChange(option);
                    i18n.changeLanguage(option);
                  }}
                >
                  {option}
                </Option>
              ))}
          </Dropdown>
        </div>
      </div>
    </>
  );
}
