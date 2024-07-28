import ReturnBtn from "./ReturnBtn";
import img4 from  "./assets/images/nextacademy.png"
import img5 from "./assets/images/nextacademy2.png"
export default function Project4(){
    return(
        <>
        <ReturnBtn/>
        <span id="inDevelopment">(Em Desenvolvimento)</span>
         <p className="pProject">
         Next Academy e um projeto de site que disponibiliza cursos de tecnologia aos usuarios, tendo diversas opções para acessa-los, como pagar separadamente, pagar assinatura mensal, trimestral e anual, alem do plano vitalicio.
          Em sua construção esta sendo utilizado NextJS, NodeJS, MySQL, Stripe para efetuar pagamentos, Stripe.io para chat em tempo real entre alunos e professores e autentificação JWT. 


        </p>
        <div id="showLshop">
            <img src={img4} alt="" />
        </div>

        <div className="lastNextAcademyBox" id="showLshop">
            <img src={img5} alt="" />
        </div>
        </>
    )
}
