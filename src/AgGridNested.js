import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { useState } from 'react';
import './AgGridNested.css';

const AgGridNested = ({ gridData }) => {
  // eslint-disable-next-line
  const [gridApi, setGridApi] = useState(null);

  return (
    <>
      <h1>AG Grid (Pivot)</h1>
      <div className="ag-theme-alpine ag-grid-nested">
        <AgGridReact
          rowData={gridData}
          defaultColDef={{ sortable: true }}
          enableRangeSelection
          suppressMultiRangeSelection
          onGridReady={({ api }) => setGridApi(api)}
          groupMultiAutoColumn
          autoGroupColumnDef={{ cellRendererParams: { suppressCount: true, checkbox: true } }}
          rowSelection='multiple'
          groupSelectsChildren
        >
          <AgGridColumn field="daughter" headerName="Daughter" rowGroup hide />
          <AgGridColumn field="account" headerName="Account" rowGroup hide />
          <AgGridColumn field="invoice" headerName="Invoice no." rowGroup hide />
          <AgGridColumn field="amount" headerName="Amount" />
        </AgGridReact>
      </div>
    </>
  );
}

export default AgGridNested;
