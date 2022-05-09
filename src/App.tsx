import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Canvas } from './components/canvas';
import { ObjectTrackerView } from './components/object_tracker_view';
import { AdjecencyListView } from './components/adj_list_view';
import { DownloadGraph } from './components/download_graph';

function App() {
  return (
    <>
    <div className="App">
      <div id='draw-area'>
        <Canvas/>
      </div>

      <div id='stat-area'>
        <ObjectTrackerView/>
        <AdjecencyListView/>
      </div>
    </div>
    <DownloadGraph/>
    </>
  );
}

export default App;
