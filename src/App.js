import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Routes/Navbar";
// import Navigationroute from './Routes/routes';
import Navigationroute from "./Routes/routes";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {Navigationroute.map((item, i) => {
          return (
            <Route key={i} exact path={item.path} element={item.element} />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
