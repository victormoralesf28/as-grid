import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import data from "./near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./Grid.css";

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
  },
  { field: "h_mag", headerName: "H (mag)", sortable: true, filter: "number" },
  {
    field: "moid_au",
    headerName: "MOID (au)",
    sortable: true,
    filter: "number",
  },
  { field: "q_au_1", headerName: "q (au)", sortable: true, filter: "number" },
  { field: "q_au_2", headerName: "Q (au)", sortable: true, filter: "number" },
  {
    field: "period_yr",
    headerName: "Period (yr)",
    sortable: true,
    filter: "number",
  },
  {
    field: "i_deg",
    headerName: "Inclination (deg)",
    sortable: true,
    filter: "number",
  },
  {
    field: "pha",
    headerName: "Potentially Hazardous",
    sortable: true,
    filter: "text",
  },
  {
    field: "orbit_class",
    headerName: "Orbit Class",
    enableRowGroup: true,
    sortable: true,
    filter: "text",
  },
];

const parseToNumber = (number: string | undefined) =>
  number ? parseFloat(number) : null;

const NeoGrid = (): JSX.Element => {
  return (
    <div>
      <h1>Near-Earth Object Overview</h1>
      <div
        className="ag-theme-alpine"
        style={{ height: "calc(100vh - 64px)", width: "100%" }}
      >
        <AgGridReact
          rowData={data.map((item) => {
            return {
              ...item,
              h_mag: parseToNumber(item.h_mag),
              moid_au: parseToNumber(item.moid_au),
              q_au_1: parseToNumber(item.q_au_1),
              q_au_2: parseToNumber(item.q_au_2),
              period_yr: parseToNumber(item.period_yr),
              i_deg: parseToNumber(item.i_deg),
            };
          })}
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
