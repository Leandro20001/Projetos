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
import pix1 from './assets/images/pixSite.png'
import pix2 from './assets/images/pixSite2.png'
import pix3 from './assets/images/pixSite3.png'
import pix4 from './assets/images/pixSite4.png'
import siteRevista from './assets/images/siteRevista.png'
import siteRevista2 from './assets/images/siteRevista2.png'
import falaMusico from './assets/images/falaMusico.jpeg'
import falaMusico2 from './assets/images/falaMusico2.jpeg'
import falaMusico3 from './assets/images/falaMusico23jpeg.jpeg'
import fm from './assets/images/fm.png'
import fm2 from './assets/images/fm2.png'
import fm3 from './assets/images/fm3.png'








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
    <h1>Bem Vindo ao Meu Portifólio</h1>

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
      </div>

  

      <div
      onClick={()=>{
        nav('Layout-Project')
      }}  
      className="projectBox">
        <img className={changeImg1} src={img2} alt="" />
        <img className={changeImg2} src={img2} alt="" />
        <img className={changeImg3} src={img3} alt="" />
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
      </div>

      <div
      onClick={()=>{
        nav('Layout-Produto-Digital')
      }}  
      className="projectBox">
        <img className={changeImg1} src={pix1} alt="" />
        <img className={changeImg2} src={pix2} alt="" />
        <img className={changeImg1} src={pix3} alt="" />
        <img className={changeImg3} src={pix4} alt="" />
      </div>

      <div
      onClick={()=>{
        nav('Site-Revista')
      }}  
      className="projectBox">
        <img className={changeImg1} src={siteRevista} alt="" />
        <img className={changeImg2} src={siteRevista2} alt="" />
        <img className={changeImg1} src={siteRevista} alt="" />
        <img className={changeImg3} src={siteRevista2} alt="" />
      </div>

      <div
      onClick={()=>{
        nav('Centro-Musical')
      }}  
      className="projectBox">
        <img className={changeImg1} src={falaMusico} alt="" />
        <img className={changeImg2} src={falaMusico2} alt="" />
        <img className={changeImg1} src={falaMusico3} alt="" />
        <img className={changeImg3} src={falaMusico} alt="" />
      </div>

      <div
      onClick={()=>{
        nav('Fala-Musico')
      }}  
      className="projectBox">
        <img className={changeImg1} src={fm} alt="" />
        <img className={changeImg2} src={fm2} alt="" />
        <img className={changeImg1} src={fm3} alt="" />
        <img className={changeImg3} src={fm} alt="" />
      </div>

      <div
      onClick={()=>{
        nav('Hotel-Lorem')
      }}  
      className="projectBox">
        <img src={lorem2} alt="" />
       
      </div>

    </div>

    





    </>
  )

}
