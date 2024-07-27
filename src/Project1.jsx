import ReturnBtn from "./ReturnBtn";

export default function Project1(){
    return(
        <>
        <ReturnBtn/>
        <p className="pProject">
        L-Shop é um projeto de E-Commerce, baseado em Mercado Livre, Shopee, Amazon, etc. Os produtos são requisitados de um API com banco de dados MySQL, Utilizará STRIPE para efetuar pagamentos. Tecnologias Usadas: Typescript, React-JS, Node-JS, Express-JS, Sequelize, MySQL, Requisições a API, Autentificação de usuário com JWT, Validação de metodo de pagamento e Context-API.

        </p>
      
        <div id="showLshop">
            <img src="assets/l-shop1.png" alt="" />
        </div>

        <div id="showLshop">
            <img src="assets/l-shop2.png" alt="" />
        </div>

        <div id="showLshop">
            <img src="assets/l-shop3.png" alt="" />
        </div>
        
        <div id="showLshop">
            <img src="assets/semtitulo.png" alt="" />
        </div>

        </>
    )
}
