import React, { useRef } from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { NavBar } from ".";
import "./App.css";

const App = () => {
  return (
    <div className="root">
      <CssBaseline />
      <NavBar />
      <main className="content">
        <div className="toolbar" />
        my app
        {/* <Routes><Route path="/" exact element={<}></Route></Routes> */}
      </main>
    </div>
  );
};

export default App;
