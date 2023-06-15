import React, { useState } from 'react';
import GraphType from '../../types/graph';
import sortNodes from '../../helpers/sortNodes';
import Edge from '../Edge/Edge';
import s from './Graph.module.css';

type Props = {
  selectedGraph: GraphType;
};

const Graph = ({ selectedGraph }: Props) => {
  const columns = sortNodes(selectedGraph);

  return (
    <div className={s.container}>
      <div className={s.columns}>
        {columns.map((col, i) => (
          <div key={i} className={s.column}>
            {col.map((item) => (
              <div key={item.id} className={s.nodeItem} id={`${item.id}`}>
                {item.name}
              </div>
            ))}
          </div>
        ))}
      </div>
      {selectedGraph.edges.map((edge, i) => (
        <Edge key={i} edge={edge} />
      ))}
    </div>
  );
};

export default Graph;
