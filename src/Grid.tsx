import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import data from "./near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./Grid.css";

import { formatNumber, formatDate } from "./Utils/FormatUtil";
import { filterDate } from "./Utils/FilterGridUtil";
import { useCallback, useRef } from "react";

const columnDefs: ColDef[] = [
  {
    field: "designation",
    headerName: "Designation",
    sortable: true,
    filter: "text",
    unSortIcon: true,
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
    unSortIcon: true,
  },
  {
    field: "h_mag",
    headerName: "H (mag)",
    sortable: true,
    filter: "number",
    valueGetter: ({ data }) => formatNumber(data.h_mag),
    unSortIcon: true,
  },
  {
    field: "moid_au",
    headerName: "MOID (au)",
    sortable: true,
    filter: "number",
    valueGetter: ({ data }) => formatNumber(data.moid_au),
    unSortIcon: true,
  },
  {
    field: "q_au_1",
    headerName: "q (au)",
    sortable: true,
    filter: "number",
    valueGetter: ({ data }) => formatNumber(data.q_au_1),
    unSortIcon: true,
  },
  {
    field: "q_au_2",
    headerName: "Q (au)",
    sortable: true,
    filter: "number",
    valueGetter: ({ data }) => formatNumber(data.q_au_2),
    unSortIcon: true,
  },
  {
    field: "period_yr",
    headerName: "Period (yr)",
    sortable: true,
    filter: "number",
    valueGetter: ({ data }) => formatNumber(data.period_yr),
    unSortIcon: true,
  },
  {
    field: "i_deg",
    headerName: "Inclination (deg)",
    sortable: true,
    filter: "number",
    valueGetter: ({ data }) => formatNumber(data.i_deg),
    unSortIcon: true,
  },
  {
    field: "pha",
    headerName: "Potentially Hazardous",
    sortable: true,
    filter: "text",
    valueGetter: ({ data }) =>
      data.pha === "Y" ? "Yes" : data.pha === "N" ? "No" : "",
    unSortIcon: true,
  },
  {
    field: "orbit_class",
    headerName: "Orbit Class",
    enableRowGroup: true,
    sortable: true,
    filter: "text",
    unSortIcon: true,
  },
];

const NeoGrid = (): JSX.Element => {
  const gridRef: any = useRef();

  const onBtSortOff = useCallback(() => {
    gridRef.current.columnApi.applyColumnState({
      defaultState: { sort: null },
    });
    gridRef.current.api.setFilterModel(null);
  }, []);

  return (
    <div>
      <header className="grid-header">
        <h1 className="grid-header__title">Near-Earth Object Overview</h1>
        <button className="grid-header__clear" onClick={onBtSortOff}>
          Clear Filters and Sorters
        </button>
      </header>
      <div className="ag-theme-alpine grid-content">
        <AgGridReact
          ref={gridRef}
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
