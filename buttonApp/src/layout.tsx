import { Outlet } from "react-router-dom";
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
} from "@fluentui/react-components";
import {
  Home24Regular,
  Alert24Regular,
  Apps24Regular,
  Share24Regular,
  DesktopTower24Regular,
  Navigation24Regular,
  Person24Regular,
} from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    ...shorthands.border("0px", "solid", "#ccc"),
    ...shorthands.overflow("hidden"),
    display: "flex",
    height: "100vh",
  },

  content: {
    ...shorthands.flex(1),
    ...shorthands.padding("16px"),
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});

const navToggle = makeStyles({
  content: {
    ...shorthands.flex(1),
    display: "flex",
    justifyContent: "right",
    alignItems: "flex-start",
    marginTop: "-15px",
  },
});

const navButtons = makeStyles({
  content: {
    ...shorthands.flex(1),
    alignItems: "flex-start",
    marginLeft: "-25px",
  },
});

export const Layout = () => {
  const navstyles = useStyles();
  const toggle = navToggle();
  const navbuttons = navButtons();
  const navigate = useNavigate();

  function handleClick(value: string) {
    navigate(value);
  }

  return (
    <div className={navstyles.root}>
      <InlineDrawer open style={{ backgroundColor: "grey" }}>
        {/* <DrawerHeader>
          <DrawerHeaderTitle>
            <Avatar size={40} name="Sylvain Petersen" />
          </DrawerHeaderTitle>
          <Button icon={<Navigation24Regular />} appearance="transparent" />
        </DrawerHeader> */}
        <DrawerBody style={{ backgroundColor: "grey" }}>
          <div className={toggle.content}>
            <Button icon={<Navigation24Regular />} appearance="transparent" />
          </div>
          <div>
            <Persona
              size={"huge"}
              avatar={<Person24Regular />}
              primaryText="Gæst"
              secondaryText="Lokal konto"
            />
          </div>
          <div className={navbuttons.content}>
            <Button
              icon={<Home24Regular />}
              appearance="transparent"
              onClick={() => handleClick("/")}
            >
              Startside
            </Button>
          </div>
          <div className={navbuttons.content}>
            <Button
              icon={<DesktopTower24Regular />}
              appearance="transparent"
              onClick={() => handleClick("/fileadmin")}
            >
              Fil Administration
            </Button>
          </div>
          <div className={navbuttons.content}>
            <Button icon={<Alert24Regular />} appearance="transparent">
              Notifikationer
            </Button>
          </div>
          <div className={navbuttons.content}>
            <Button icon={<Apps24Regular />} appearance="transparent">
              Apps
            </Button>
          </div>
          <div className={navbuttons.content}>
            <Button icon={<Share24Regular />} appearance="transparent">
              Deling
            </Button>
          </div>
        </DrawerBody>
      </InlineDrawer>

      <div className={navstyles.content}>
        <h1>Layout</h1>
        <Outlet />
      </div>
    </div>
  );
};
