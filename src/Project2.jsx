import ReturnBtn from "./ReturnBtn";

export default function Project2(){
    return(
        <>
        <ReturnBtn/>
         <p className="pProject">
         Employees Manager é um projeto em que é possível: visualizar, adicionar, editar e deletar funcionários de sua empresa. O formulário de criação exige que os dados serão preenchidos, se não, os dados não serão adicionados ao Banco De Dados MySQL, que é conectado via Express e Sequelize. Tecnologias Usadas:Javascript, React-JS, Node-JS, Express, Sequelize, MySQL, Consumo de API rest, HTML e CSS.


        </p>
        <h1>Employee Manager</h1>
        <div id="showLshop">
            <img src="assets/1.png" alt="" />
        </div>

        <div id="showLshop">
            <img src="assets/2.png" alt="" />
        </div>

        <div id="showLshop">
            <img src="assets/3.png" alt="" />
        </div>
        
        <div id="showLshop">
            <img src="assets/4.png" alt="" />
        </div>
        </>
    )
}
