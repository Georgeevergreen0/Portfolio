import React, { useState } from 'react';
//import { useLocation, Switch, Route } from "react-router-dom";
import Main from "./components/Main";

let App = (props) => {
  const [drawerState, setDrawerState] = useState(false);
  return (
    <Main drawerState={drawerState} setDrawerState={setDrawerState} />
  )

}

export default App;
