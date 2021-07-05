import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import './AgGrid.css';

const AgGrid = ({ gridData, onCompanyClick }) => {

  const defaultColumnProps = {
    floatingFilter: true,
    filter: 'agTextColumnFilter',
    sortable: true,
    resizable: true,
  };

  const sideBarConfig = {
    toolPanels: [
      {
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
        toolPanelParams: {
          suppressRowGroups: true,
          suppressValues: true,
          suppressPivots: true,
          suppressPivotMode: true,
        },
      },
    ],
  };

  const motherCellRenderer = ({ value }) => {
    return (
      <button onClick={() => onCompanyClick(value)}>
        {value}
      </button>
    );
  }

  return (
    <>
      <h1>AG Grid</h1>
      <div className="ag-theme-alpine" style={{ height: '80vh' }}>
        <AgGridReact
          rowData={gridData}
          defaultColDef={defaultColumnProps}
          enableRangeSelection
          suppressMultiRangeSelection
          sideBar={sideBarConfig}
        >
          <AgGridColumn
            field="mother"
            headerName="Moder"
            pinned="left"
            cellRendererFramework={motherCellRenderer}
          />
          <AgGridColumn field="cvr" headerName="CVR number" />
          <AgGridColumn field="category" headerName="Category" filter="agSetColumnFilter" />
          <AgGridColumn field="address" headerName="Adress" filter="agSetColumnFilter" />
          <AgGridColumn field="column-3" headerName="Has number filter" filter="agNumberColumnFilter" />
          <AgGridColumn field="column-4" headerName="Column 4" />
          <AgGridColumn field="column-5" headerName="Column 5" />
          <AgGridColumn field="column-6" headerName="Column 6" />
          <AgGridColumn field="column-7" headerName="Column 7" />
          <AgGridColumn field="column-8" headerName="Column 8" />
          <AgGridColumn field="column-9" headerName="Column 9" />
          <AgGridColumn field="column-10" headerName="Column 10" />
          <AgGridColumn field="column-11" headerName="Column 11" />
          <AgGridColumn field="column-12" headerName="Column 12" />
          <AgGridColumn field="column-13" headerName="Column 13" />
          <AgGridColumn field="column-14" headerName="Column 14" />
          <AgGridColumn field="column-15" headerName="Column 15" />
          <AgGridColumn field="data" filter={false} pinned="right" />
        </AgGridReact>
      </div>
    </>
  );
}

export default AgGrid;
