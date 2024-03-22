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
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { DatePicker } from "@fluentui/react-datepicker-compat";
import { CalendarRegular } from "@fluentui/react-icons";
import type { SpinButtonProps } from "@fluentui/react-components";

type Time = {
  // label: number;
  label: string;
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
    time: { label: "15 minutter" },
    description: { label: "Test Forbrug" },
    lastUpdate: { label: "30 sekunder siden" },
  },
  {
    time: { label: "30 minutter" },
    description: { label: "Test2 Forbrug" },
    lastUpdate: { label: "7 timer siden" },
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
      return <TableCellLayout>{item.time.label}</TableCellLayout>;
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
      // return item.lastUpdate.label;
      return datePassed(13155460000);
    },
  }),
];

const datePassed = (value: number) => {
  let passedTime = new Date().getTime() - value;
  const returnValue = "Last updated ";
  const units = [
    { label: "year", milliseconds: 31536000000 },
    { label: "month", milliseconds: 2592000000 },
    { label: "week", milliseconds: 604800000 },
    { label: "day", milliseconds: 86400000 },
    { label: "hours", milliseconds: 3600000 },
    { label: "minutes", milliseconds: 60000 },
    { label: "second", milliseconds: 1000 },
  ];

  units.forEach((label, milliseconds) => {
    passedTime = passedTime - ~~(passedTime / milliseconds) * milliseconds;
    returnValue.concat(`${~~(passedTime / milliseconds)} ${label},`);
  });

  // if (passedTime >= units[0].milliseconds) {
  //   console.log("test");
  //   passedTime =
  //     passedTime -
  //     ~~(passedTime / units[0].milliseconds) * units[0].milliseconds;
  //   returnValue.concat(`${~~(passedTime / units[0].milliseconds)} ${units[0].label},`);
  // }
  // if (passedTime >= units[1].milliseconds) {
  //   passedTime =
  //     passedTime -
  //     ~~(passedTime / units[1].milliseconds) * units[1].milliseconds;
  //   returnValue.concat(`${~~(passedTime / units[1].milliseconds)} ${units[1].label},`);
  // }
  // if (passedTime >= units[2].milliseconds) {
  //   passedTime =
  //     passedTime -
  //     ~~(passedTime / units[2].milliseconds) * units[2].milliseconds;
  //     returnValue.concat(`${~~(passedTime / units[2].milliseconds)} ${units[2].label},`);
  // }
  // if (passedTime >= units[3].milliseconds) {
  //   passedTime =
  //     passedTime -
  //     ~~(passedTime / units[3].milliseconds) * units[3].milliseconds;
  //     returnValue.concat(`${~~(passedTime / units[3].milliseconds)} ${units[3].label},`);
  // }
  // if (passedTime >= units[4].milliseconds) {
  //   passedTime =
  //     passedTime -
  //     ~~(passedTime / units[4].milliseconds) * units[4].milliseconds;
  //     returnValue.concat(`${~~(passedTime / units[4].milliseconds)} ${units[4].label},`);
  // }
  // if (passedTime >= units[5].milliseconds) {
  //   passedTime =
  //     passedTime -
  //     ~~(passedTime / units[5].milliseconds) * units[5].milliseconds;
  //     returnValue.concat(`${~~(passedTime / units[5].milliseconds)} ${units[5].label},`);
  // }

  return returnValue.concat(`${passedTime! % units[0].milliseconds} ago`);
};

const defaultFormData = {
  date: new Date(),
  time: "",
  description: "",
  lastUpdate: "",
};

export function Fileadmin() {
  const divstyles = useStyles();
  const [t, i18n] = useTranslation("global");
  const [spinButtonValue, setSpinButtonValue] = useState(0);

  const [formData, setFormData] = useState(defaultFormData);
  // const { date, time, description } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      ["lastUpdate"]: `${new Date()}`,
    }));
    console.log(formData);
    items.push(formData);
    setFormData(defaultFormData);
    console.log(items);
  };

  const handleSpinButtonChange = (_ev, data) => {
    if (data.value != undefined) {
      setSpinButtonValue(data.value);
      setFormData((prevState) => ({
        ...prevState,
        ["time"]: `${data.value} minutes`,
      }));
    } else if (data.displayValue != undefined) {
      const newValue = parseFloat(data.displayValue);
      if (!Number.isNaN(newValue)) {
        setSpinButtonValue(newValue);
      } else {
        console.error(`Cannot parse ${data.displayValue} as a number.`);
      }
    }
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleDate = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      ["date"]: e,
    }));
  };

  return (
    <>
      <div className={divstyles.content}>
        <form>
          <Field label={t("fileadmin.date")}>
            <DatePicker
              id="date"
              onSelectDate={(event) => {
                handleDate(event);
              }}
            />
          </Field>
          <div>
            <Label>{t("fileadmin.input")}</Label> <br />
            <SpinButton
              id="time"
              step={15}
              min={0}
              max={660}
              onChange={handleSpinButtonChange}
              // defaultValue={0}
              value={spinButtonValue}
            />
          </div>
          <Field label={t("fileadmin.description")}>
            <Input
              type="text"
              id="description"
              onChange={handleChange}
              defaultValue=""
            />
          </Field>
          <Button type="submit" onClick={handleSubmit}>
            Register
          </Button>
        </form>

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
