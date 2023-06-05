import React from "react";

import "./Res.css";

const Res = props =>(
     <div className="Res">
         <h1 className="Introduction-res">Reserva</h1>
         <aside className="container-res">
            <div className="Reserva">
               <section>
                   <h3>Nome</h3>
                   <input className="" type="text" name="Nome" id="" />
               </section>               
               <section>
                  <h3>E-mail</h3>
                  <input className="" type="email" name="email" id="" />
               </section>
               <section>
                  <h3>Celular</h3>
                  <input className="" type="tel" name="" id="" />
               </section>
               <section>
                  <h3>Data e Horario</h3>
                  <input className="" type="datetime-local" name="" id="" />
               </section>
               <section>
                   <h3>Número de convidados</h3>
                   <input className="" type="number" name="convidados" size={50} id="" />
               </section>
               <div>
                  <button type="btn" className="Button-Res">Reservar</button>
               </div>

            </div>        
         </aside>
        
     </div>
)


export default Res