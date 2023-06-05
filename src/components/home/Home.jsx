
import React from "react";

import "./Home.css";

import Navbar from "../navigation/Navbar";

import images from "../images/images";
import About from "../about/About";
import Menu from "../menu/Menu";
import Res from "../res/Res";



const Home = props =>(
     <div className="Home">
         <aside className="container-home" >
            <header>
               <Navbar/>
            </header> 
            <div className="banner-img">
               <img src={images.Banner} alt="" />
            </div>
            <div className="container-content">
               <h1 className="Introduction-home" >Degustou</h1>
               <p className="Text-home">Portfólio Gastronomico</p>
            </div>   
         </aside>
         <div>
            <section>
               <About/>
             </section>
             <section>
               <Menu/>
             </section>
             <section>
               <Res/>
            </section>
         </div>
         <footer>

         </footer>
     </div>
)

export default Home
