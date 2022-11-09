import React, { useRef } from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { NavBar, Places } from ".";
import "./App.css";

const App = () => {
  return (
    <div className="root">
      <CssBaseline />
      <NavBar />
      <main className="content">
        <div className="toolbar" />

        <Routes>
          <Route path="/" exact element={<Places />}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
