import React from "react";
import Home from "./Home"
import { BrowserRouter,HashRouter,Routes,Route } from "react-router-dom";
import Project1 from "./Project1";
import Project2 from "./Project2"
import Project3 from "./Project3"
import Project4 from "./Project4";
export default function RoutesApp(){
  return(
    <HashRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/L-Shop" element={<Project1/>}></Route>
        <Route path="/Employee-Manager" element={<Project2/>}></Route>
        <Route path="/Layout-Project" element={<Project3/>}></Route>
        <Route path="/Next-Academy" element={<Project4/>}></Route>
    </Routes>
    </HashRouter>
  )
}