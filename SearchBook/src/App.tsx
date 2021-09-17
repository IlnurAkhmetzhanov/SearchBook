import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Search} from "./components/Search";
import {Body} from "./components/Body/Body";

function App() {
  return (
    <div className="App">
      <Search/>
        <Body/>
    </div>
  );
}

export default App;
