import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Canvas } from './components/canvas';
import { ObjectTrackerView } from './components/object_tracker_view';

function App() {
  return (
    <div className="App">
      <Canvas/>
      <ObjectTrackerView/>
    </div>
  );
}

export default App;
