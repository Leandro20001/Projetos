import ReturnBtn from "./ReturnBtn";

import React from "react";
import img1 from "./assets/images/pixSite.png"
import img2 from "./assets/images/pixSite2.png"
import img3 from  "./assets/images/pixSite3.png"
import img4 from "./assets/images/pixSite4.png"

export default function Project5(){
    return(
        <>
        <ReturnBtn/>
         <p className="pProject">
         Um template/tema para o framework Next JS que desenvolvi
        </p>
       <div className="showProjectsImg">
       <div className="lorem"  id="showLshop">
            <img src={img1} alt="" />
        </div>

        <div className="lorem" id="showLshop">
            <img src={img1} alt="" />
        </div>

        <div className="lorem" id="showLshop">
            <img src={img3} alt="" />
        </div>

        <div  className="lorem" id="showLshop">
            <img src={img4} alt="" />
        </div>
       </div>
        </>
    )
}
