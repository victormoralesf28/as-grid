import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import data from "./near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./Grid.css";

import { formatNumber, formatDate } from "./Utils/FormatUtil";
import { filterDate } from "./Utils/FilterGridUtil";

const columnDefs: ColDef[] = [
  {
    field: "designation",
    headerName: "Designation",
    sortable: true,
    filter: "text",
  },
  {
    field: "discovery_date",
    headerName: "Discovery Date",
    sortable: true,
    valueFormatter: ({ value }) => formatDate(value),
    filter: "agDateColumnFilter",
    filterParams: {
      comparator: filterDate,
      browserDatePicker: true,
      minValidYear: 2000,
      maxValidYear: 2022,
    },
  },
  {
    field: "h_mag",
    headerName: "H (mag)",
    sortable: true,
    filter: "number",
    valueGetter: ({ data }) => formatNumber(data.h_mag),
  },
  {
    field: "moid_au",
    headerName: "MOID (au)",
    sortable: true,
    filter: "number",
    valueGetter: ({ data }) => formatNumber(data.moid_au),
  },
  {
    field: "q_au_1",
    headerName: "q (au)",
    sortable: true,
    filter: "number",
    valueGetter: ({ data }) => formatNumber(data.q_au_1),
  },
  {
    field: "q_au_2",
    headerName: "Q (au)",
    sortable: true,
    filter: "number",
    valueGetter: ({ data }) => formatNumber(data.q_au_2),
  },
  {
    field: "period_yr",
    headerName: "Period (yr)",
    sortable: true,
    filter: "number",
    valueGetter: ({ data }) => formatNumber(data.period_yr),
  },
  {
    field: "i_deg",
    headerName: "Inclination (deg)",
    sortable: true,
    filter: "number",
    valueGetter: ({ data }) => formatNumber(data.i_deg),
  },
  {
    field: "pha",
    headerName: "Potentially Hazardous",
    sortable: true,
    filter: "text",
    valueGetter: ({ data }) =>
      data.pha === "Y" ? "Yes" : data.pha === "N" ? "No" : "",
  },
  {
    field: "orbit_class",
    headerName: "Orbit Class",
    enableRowGroup: true,
    sortable: true,
    filter: "text",
  },
];

const NeoGrid = (): JSX.Element => {
  return (
    <div>
      <h1>Near-Earth Object Overview</h1>
      <div
        className="ag-theme-alpine"
        style={{ height: "calc(100vh - 64px)", width: "100%" }}
      >
        <AgGridReact
          rowData={data}
          columnDefs={columnDefs}
          gridOptions={{
            animateRows: true,
          }}
          rowGroupPanelShow={"always"}
        />
      </div>
    </div>
  );
};

export default NeoGrid;
