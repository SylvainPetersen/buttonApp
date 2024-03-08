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
  Field,
  Input,
  SpinButton,
  Label,
  DataGridBody,
  DataGridRow,
  DataGrid,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridCell,
  TableCellLayout,
  TableColumnDefinition,
  createTableColumn,
} from "@fluentui/react-components";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { DatePicker } from "@fluentui/react-datepicker-compat";
import { CalendarRegular } from "@fluentui/react-icons";

type Time = {
  label: string;
  icon: JSX.Element;
};

type Description = {
  label: string;
};

type LastUpdatedCell = {
  label: string;
};

type Item = {
  time: Time;
  description: Description;
  lastUpdate: LastUpdatedCell;
};

const useStyles = makeStyles({
  content: {
    ...shorthands.flex(1),
    display: "block",
    width: "10px",
    marginTop: "70px",
    marginLeft: "-195px",
  },
});

const items: Item[] = [
  {
    time: { label: "15 minutes", icon: <CalendarRegular /> },
    description: { label: "Test Forbrug" },
    lastUpdate: { label: "30 sekunder siden" },
  },
];

const columns: TableColumnDefinition<Item>[] = [
  createTableColumn<Item>({
    columnId: "Forbrug",
    compare: (a, b) => {
      return a.time.label.localeCompare(b.time.label);
    },
    renderHeaderCell: () => {
      return "Forbrug";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout media={item.time.icon}>
          {item.time.label}
        </TableCellLayout>
      );
    },
  }),
  createTableColumn<Item>({
    columnId: "Beskrivelse",
    compare: (a, b) => {
      return a.description.label.localeCompare(b.description.label);
    },
    renderHeaderCell: () => {
      return "Beskrivelse";
    },
    renderCell: (item) => {
      return item.description.label;
    },
  }),
  createTableColumn<Item>({
    columnId: "Sidst Ændret",
    compare: (a, b) => {
      return a.lastUpdate.label.localeCompare(b.lastUpdate.label);
    },
    renderHeaderCell: () => {
      return "Sidst Ændret";
    },

    renderCell: (item) => {
      return item.lastUpdate.label;
    },
  }),
];

export function Fileadmin() {
  const divstyles = useStyles();
  const [t, i18n] = useTranslation("global");
  const [time, setTime] = useState(0);

  return (
    <>
      <div className={divstyles.content}>
        <form
          onSubmit={() => {
            console.log("okay");
          }}
        >
          <Field label={t("fileadmin.date")}>
            <DatePicker />
          </Field>
          <div>
            <Label>{t("fileadmin.input")}</Label> <br />
            <SpinButton defaultValue={0} step={15} min={0} max={660} />
          </div>
          <Field
            label={t("fileadmin.description")}
            validationState="success"
            validationMessage={t("fileadmin.success")}
          >
            <Input />
          </Field>
          <Button type="submit">Register</Button>
        </form>
        {/* <Field label={t("fileadmin.date")}>
          <DatePicker />
        </Field>
        <div>
          <Label>{t("fileadmin.input")}</Label> <br />
          <SpinButton defaultValue={0} step={15} min={0} max={660} />
        </div>
        <Field
          label={t("fileadmin.description")}
          validationState="success"
          validationMessage={t("fileadmin.success")}
        >
          <Input />
        </Field>
        <Button>Register</Button> */}
        <DataGrid
          items={items}
          columns={columns}
          sortable
          selectionMode="multiselect"
          getRowId={(item) => item.time.label}
          focusMode="composite"
        >
          <DataGridHeader>
            <DataGridRow
              selectionCell={{
                checkboxIndicator: { "aria-label": "Select all rows" },
              }}
            >
              {({ renderHeaderCell }) => (
                <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
              )}
            </DataGridRow>
          </DataGridHeader>
          <DataGridBody<Item>>
            {({ item, rowId }) => (
              <DataGridRow<Item>
                key={rowId}
                selectionCell={{
                  checkboxIndicator: { "aria-label": "Select row" },
                }}
              >
                {({ renderCell }) => (
                  <DataGridCell>{renderCell(item)}</DataGridCell>
                )}
              </DataGridRow>
            )}
          </DataGridBody>
        </DataGrid>
      </div>
    </>
  );
}
