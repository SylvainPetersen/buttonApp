import { Outlet } from "react-router-dom";
import {
  DrawerBody,
  Tab,
  makeStyles,
  shorthands,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100%",
  },
  content: {
    ...shorthands.flex(1, 1, "0%"),
    display: "flex",
  },
});

export function Layout() {
  const styles = useStyles();
  return (
    <div>
      <main className={styles.content}>
        <h1>Layout</h1>
        <Outlet />
      </main>
    </div>
  );
}
