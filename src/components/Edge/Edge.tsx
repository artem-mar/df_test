import React, { useEffect, useState } from 'react';
import { GraphEdge } from '../../types/graph';
import s from './Edge.module.css';

type Props = {
  edge: GraphEdge;
};
type Rects = {
  from: DOMRect | undefined;
  to: DOMRect | undefined;
};

const Edge = ({ edge }: Props) => {
  const [rects, setRects] = useState<Rects>({ from: undefined, to: undefined });

  useEffect(() => {
    setRects({
      from: document.getElementById(`${edge.fromId}`)?.getBoundingClientRect(),
      to: document.getElementById(`${edge.toId}`)?.getBoundingClientRect(),
    });
  }, [edge]);

  const { from, to } = rects;

  return (
    <svg className={s.edge}>
      <defs>
        <marker
          id="arrow"
          markerWidth="20"
          markerHeight="8"
          refX="20"
          refY="4"
          orient="auto"
          fill="#444444"
        >
          <polygon points="0 0, 20 4, 0 8" />
        </marker>
      </defs>
      {from && to && (
        <line
          className={s.line}
          x1={from.right}
          y1={from.bottom - from.height / 2}
          x2={to.left}
          y2={to.bottom - to.height / 2}
          stroke="#444444"
          markerEnd="url(#arrow)"
        />
      )}
    </svg>
  );
};

export default Edge;
