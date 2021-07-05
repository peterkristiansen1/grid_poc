import { FlexGrid, FlexGridColumn } from '@grapecity/wijmo.react.grid';
import { FlexGridFilter } from '@grapecity/wijmo.react.grid.filter';
import '@grapecity/wijmo.styles/wijmo.css';
import './WijmoFlexGrid.css';

const WijmoFlexGrid = ({ gridData }) => {
  return (
    <>
      <h1>Wijmo FlexGrid</h1>
      <FlexGrid itemsSource={gridData} isReadOnly>
        <FlexGridFilter />
        <FlexGridColumn binding="mother" header="Mother" />
        <FlexGridColumn binding="cvr" header="CVR number" />
        <FlexGridColumn binding="category" header="Category" />
        <FlexGridColumn binding="address" header="Address" />
        <FlexGridColumn binding="column-3" header="Column 3" />
        <FlexGridColumn binding="column-4" header="Column 4" />
        <FlexGridColumn binding="column-5" header="Column 5" />
        <FlexGridColumn binding="column-6" header="Column 6" />
        <FlexGridColumn binding="column-7" header="Column 7" />
        <FlexGridColumn binding="column-8" header="Column 8" />
        <FlexGridColumn binding="column-9" header="Column 9" />
        <FlexGridColumn binding="column-10" header="Column 10" />
        <FlexGridColumn binding="column-11" header="Column 11" />
        <FlexGridColumn binding="column-12" header="Column 12" />
        <FlexGridColumn binding="column-13" header="Column 13" />
        <FlexGridColumn binding="column-14" header="Column 14" />
        <FlexGridColumn binding="column-15" header="Column 15" />
        <FlexGridColumn binding="data" header="Data" />
      </FlexGrid>
    </>
  );
}

export default WijmoFlexGrid;
