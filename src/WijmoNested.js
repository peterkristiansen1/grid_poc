import { PivotEngine } from '@grapecity/wijmo.olap';
import { PivotGrid } from '@grapecity/wijmo.react.olap';
import '@grapecity/wijmo.styles/themes/wijmo.theme.material.css';
import './WijmoNested.css';
import { useEffect, useState } from 'react';

// https://stackblitz.com/edit/js-smr8nw

const WijmoNested = ({ gridData }) => {
  const fields = [
    { binding: 'daughter', header: 'Daughter' },
    { binding: 'account', header: 'Account' },
    { binding: 'invoice', header: 'Invoice no.' },
    { binding: 'amount', header: 'Amount' },
  ];

  // eslint-disable-next-line
  const [engine, setEngine] = useState(new PivotEngine({
    itemsSource: gridData,
    fields,
    valueFields: ['Amount'],
    rowFields: ['Daughter', 'Account', 'Invoice no.'],
    showRowTotals: 'Subtotals',
  }));

  useEffect(() => {
    engine.fields.forEach((field) => {
      if (field.binding !== 'amount') {
        // Show checkbox for each row.
        field.isContentHtml = true;
        field.getValue = (item) => '<input type="checkbox">' + item[field.binding];
      }
    });
  }, [engine.fields]);

  return (
    <>
      <h1>Wijmo PivotGrid</h1>
      <PivotGrid
        className="wijmo-grid-nested"
        itemsSource={engine}
        collapsibleSubTotals
      />
    </>
  );
};

export default WijmoNested;
