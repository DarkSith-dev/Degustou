import React from "react";

import "./About.css";

import images from "../../components/images/images";

const About = props =>(
     <div className="About">
        <aside className="container-about">
            <div className="img-about">
               <img src={images.Chef} alt=""/>
            </div>
            <div className="Content-About">
               <h1 className="Introduction-about">Sobre</h1>
               <h3 className="Text-about">Nossa Historia</h3>
               <div>
                  <p className="resume-about">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
               </div>
            </div>
        </aside>
     </div>
)

export default About