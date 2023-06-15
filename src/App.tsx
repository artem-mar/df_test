import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Graph from "./components/Graph/Graph";
import { fetchGraphsList, fetchGraph } from "./api";
import GraphType from './types/graph';
import s from "./App.module.css";

function App() {
  const [graphId, setGraphId] = useState('');
  const [graphList, setGraphList] = useState<number[]>([]);
  const [graph, setGraph] = useState<GraphType>({ nodes: [], edges: [] });

  useEffect(() => {
    fetchGraphsList().then((list) => setGraphList(list));
  }, []);
  useEffect(() => {
    graphId && fetchGraph(graphId).then((graph) => setGraph(graph));
  }, [graphId]);

  return (
    <div className={s.page}>
      <Header onChange={setGraphId} selectedId={graphId} graphList={graphList} />
      <main className={s.main}>
        <Graph selectedGraph={graph} />
      </main>
    </div>
  );
}

export default App;
