import ReturnBtn from "./ReturnBtn";
import yoda from "./assets/images/babyyoda.png"
import myPhoto from "./assets/images/myphoto.jpeg"
import lshop1 from "./assets/images/l-shop1.png"
import lshop2 from "./assets/images/l-shop2.png"
import lshop3 from "./assets/images/l-shop3.png"
import img2 from "./assets/images/project1.png"
import img3 from "./assets/images/project2.png"
import img4 from  "./assets/images/nextacademy.png"
import lshop4 from "./assets/images/semtitulo.png"
import employ from "./assets/images/1.png"
import employ2 from "./assets/images/2.png"
import employ3 from "./assets/images/3.png"
import employ4 from "./assets/images/4.png"

export default function Project2(){
    return(
        <>
        <ReturnBtn/>
         <p className="pProject">
         Employees Manager é um projeto em que é possível: visualizar, adicionar, editar e deletar funcionários de sua empresa. O formulário de criação exige que os dados serão preenchidos, se não, os dados não serão adicionados ao Banco De Dados MySQL, que é conectado via Express e Sequelize. Tecnologias Usadas:Javascript, React-JS, Node-JS, Express, Sequelize, MySQL, Consumo de API rest, HTML e CSS.


        </p>
        <h1>Employee Manager</h1>
        <div id="showLshop">
            <img src={employ} alt="" />
        </div>

        <div id="showLshop">
            <img src={employ2} alt="" />
        </div>

        <div id="showLshop">
            <img src={employ3} alt="" />
        </div>
        
        <div id="showLshop">
            <img src={employ4} alt="" />
        </div>
        </>
    )
}
