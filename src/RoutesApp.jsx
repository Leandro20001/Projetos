import React from "react";
import Home from "./Home"
import { BrowserRouter,HashRouter,Routes,Route } from "react-router-dom";
import Project1 from "./Project1";
import Project3 from "./Project3"
import Project4 from "./Project4";
import Project5 from "./Project5";
import Project6 from  './Project6'
import Project7 from  './Project7'
import Project8 from  './Project8'
import Project9 from  './Project9'
export default function RoutesApp(){
  return(
    <HashRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>

        <Route path="/L-Shop" element={<Project1/>}></Route>



        <Route path="/Layout-Project" element={<Project3/>}></Route>

        <Route path="/Next-Academy" element={<Project4/>}></Route>

        <Route path="/Layout-Produto-Digital" element={<Project5/>}></Route>

        <Route path="/Site-Revista" element={<Project6/>}></Route>

        <Route path="/Centro-Musical" element={<Project7/>}></Route>

        <Route path="/Fala-Musico" element={<Project8/>}></Route>

        <Route path="/Hotel-Lorem" element={<Project9/>}></Route>
    </Routes>
    </HashRouter>
  )
}
