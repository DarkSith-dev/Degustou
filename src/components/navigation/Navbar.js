import React from "react";

import "./Navbar.css";





/** Telas */
import Home from "../home/Home";
import About from "../about/About";



const Navbar = props =>(
    <aside>
    <nav>
        <ul>            
           <li>
             <button>Inicio</button>       
           </li>
           <li>
             <button>Sobre nós</button>   
           </li>
           <li>
             <button>Menu</button>         
           </li>  
           <li>
             <button>Reserva</button>         
           </li>             
        </ul>
    </nav> 
</aside>
    
 )
export default Navbar