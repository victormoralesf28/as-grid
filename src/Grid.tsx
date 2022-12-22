import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import data from "./near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./Grid.css";

const columnDefs: ColDef[] = [
  { field: "designation", headerName: "Designation" },
  { field: "discovery_date", headerName: "Discovery Date" },
  { field: "h_mag", headerName: "H (mag)" },
  { field: "moid_au", headerName: "MOID (au)" },
  { field: "q_au_1", headerName: "q (au)" },
  { field: "q_au_2", headerName: "Q (au)" },
  { field: "period_yr", headerName: "Period (yr)" },
  { field: "i_deg", headerName: "Inclination (deg)" },
  { field: "pha", headerName: "Potentially Hazardous" },
  { field: "orbit_class", headerName: "Orbit Class", enableRowGroup: true },
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
