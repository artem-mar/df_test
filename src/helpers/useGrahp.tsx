import { useEffect, useState } from 'react';
import { fetchGraph } from '../api';
import Graph from '../types/graph';

const useGraph = (id: string): Graph => {
  const [selectedGraph, setSelectedGraph] = useState<Graph>({ edges: [], nodes: [] });

  const changeSelectedGraph = (id: string) => {
    fetchGraph(id).then((graph) => setSelectedGraph(graph));
  };

  useEffect(() => {
    id && changeSelectedGraph(id);
  }, [id]);

  return selectedGraph;
};

export default useGraph;
