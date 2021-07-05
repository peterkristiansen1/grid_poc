import AgGrid from './AgGrid';
import AgGridNested from './AgGridNested';
import { useState } from 'react';
import { Drawer } from '@material-ui/core';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import gridData500 from './gridData500.json';
import gridData20000 from './gridData20000.json';
import WijmoFlexGrid from './WijmoFlexGrid';
import WijmoNested from './WijmoNested';
import './App.css';

const App = () => {
  const [openCompany, setOpenCompany] = useState(null);

  return (
    <main>
      <Router>
        <div className="buttons">
          <Link to="/ag-grid" className="link">
            AG Grid
          </Link>
          <Link to="/wijmo-flexgrid" className="link">
            Wijmo FlexGrid
          </Link>
          <Link to="/ag-grid-nested" className="link">
            AG Grid (Pivot)
          </Link>
          <Link to="/wijmo-flexgrid-nested" className="link">
            Wijmo PivotGrid
          </Link>
        </div>
        
        <Route exact path={['/ag-grid', '/']}>
          <AgGrid gridData={gridData20000.rows} onCompanyClick={setOpenCompany} />
        </Route>
        <Route exact path="/wijmo-flexgrid">
          <WijmoFlexGrid gridData={gridData20000.rows} />
        </Route>
        <Route exact path="/ag-grid-nested">
          <AgGridNested gridData={gridData500.rows}/>
        </Route>
        <Route exact path="/wijmo-flexgrid-nested">
          <WijmoNested gridData={gridData500.rows} />
        </Route>
        <Drawer open={Boolean(openCompany)} onClose={() => setOpenCompany(null)} anchor="right">
          <h2>{openCompany}</h2>
          <p>Virksomhedsdetaljer vil blive vist her</p>
        </Drawer>
      </Router>
    </main>
  );
};

export default App;
