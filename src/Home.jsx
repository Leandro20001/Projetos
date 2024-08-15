import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import employ from "./assets/images/1.png"
import employ2 from "./assets/images/2.png"
import employ3 from "./assets/images/3.png"
import employ4 from "./assets/images/4.png"
import yoda from "./assets/images/babyyoda.png"
import myPhoto from "./assets/images/myphoto.jpeg"
import lshop1 from "./assets/images/l-shop1.png"
import lshop2 from "./assets/images/l-shop2.png"
import lshop3 from "./assets/images/l-shop3.png"
import img2 from "./assets/images/project1.png"
import img3 from "./assets/images/project2.png"
import img4 from  "./assets/images/nextacademy.png"
import nextimg from './assets/images/nextacademy2.png'
import lorem from './assets/images/lorem1.png'
import lorem2 from './assets/images/lorem2.png'
import lorem3 from './assets/images/lorem3.png'
import lorem4 from './assets/images/lorem4.png'








export default function Home(){
  const nav = useNavigate()



  const [changeImg1,setChangeImg1] = useState('')
  const [changeImg2,setChangeImg2] = useState('hide')
  const [changeImg3,setChangeImg3] = useState('hide')

  
  const change = ()=>{
    setTimeout(()=>{
      setChangeImg1('hide')
      setChangeImg2('')
      setChangeImg3('hide')
    },5000)
    setTimeout(()=>{
      setChangeImg1('hide')
      setChangeImg2('hide')
      setChangeImg3('')
    },10000)
    setTimeout(()=>{
      setChangeImg1('')
      setChangeImg2('hide')
      setChangeImg3('hide')
    },15000)

  }
  if(changeImg1==''&&changeImg2=='hide'&&changeImg3=='hide'){
    change()
  }



  return(
    <>
    <header>

      <div id="yoda">
        <img src={yoda} alt="" />
      </div>


      <div  id="gitIco"><Link to={'https://github.com/Leandro20001'}><img src="assets/githubico.png" alt="" /></Link></div>
      <Link to={'https://github.com/Leandro20001'}>Meu GitHub</Link>
    </header>
    <span id="mainSpan">Olá!</span>
    <h1>Bem vindo ao meu portifólio</h1>

    <div id="myPhotoDiv">
      <img  src={myPhoto} alt="" />
    </div>

    <p className="mainP">Meu Nome é Leandro Ferreira Lima,sou Desenvolvedor Fullstack especializado em Javascript. Trabalho com as tecnologias mais utilizadas do mercado: ReactJS, React Native, NextJS, NodeJS, Python, criação e uso de APIs e Bancos de dados relacionais e não relacionais.</p>
    <p id="secondMainP" className="mainP">Espero Trabalhar com você em seu projeto!</p>

    <h2>Meu Projetos</h2>


    <div id="projectsDiv">

      <div
      onClick={()=>{
        nav('L-Shop')
      }} 
      className="projectBox" id="box1">
        <img className={changeImg1} src={lshop1} alt="" />
        <img className={changeImg2} src={lshop2} alt="" />
        <img className={changeImg3} src={lshop3} alt="" />
        <span>L-shop</span>
      </div>

      <div
      onClick={()=>{
        nav('Employee-Manager')
      }}  
      className="projectBox">
        <img className={changeImg1} src={employ} alt="" />
        <img className={changeImg2} src={employ2} alt="" />
        <img className={changeImg3} src={employ3} alt="" />
        <span>Employee Manager</span>
      </div>

      <div
      onClick={()=>{
        nav('Layout-Project')
      }}  
      className="projectBox">
        <img className={changeImg1} src={img2} alt="" />
        <img className={changeImg2} src={img2} alt="" />
        <img className={changeImg3} src={img3} alt="" />
        <span>Exemplo De Layout</span>
      </div>

      <div
      onClick={()=>{
        nav('Next-Academy')
      }}  
      className="projectBox">
        <img className={changeImg1} src={img4} alt="" />
        <img className={changeImg2} src={nextimg} alt="" />
        <img className={changeImg1} src={img4} alt="" />
        <img className={changeImg3} src={nextimg} alt="" />
        <span>Next Academy</span>
      </div>

      <div
      onClick={()=>{
        nav('Hotel-Lorem')
      }}  
      className="projectBox">
        <img src={lorem2} alt="" />
       
        <span>Hotel Lorem</span>
      </div>

    </div>

    





    </>
  )

}
