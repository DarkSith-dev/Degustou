import React from "react";


import "./Menu.css";

const Menu = props =>(
     <div className="Menu">
         <aside className="container-menu">
            <div className="Cardapio">
               <h1 className="Introduction-menu" >Cardápio</h1>
               <section className="entradas">
                  <h2 >Entradas</h2>
                  <div class="item">
                     <div className="item-name">Salada Caesar</div>
                     <div className="item-price">R$ 12,00</div>
                  </div>
                  <div className="item">
                     <div className="item-name">Bruschetta</div>
                     <div className="item-price">R$ 8,00</div>
                  </div>
               </section>
               
               <section className="Pratos-Principais">
                  <h2>Pratos Principais</h2>
                  <div className="item">
                     <div className="item-name">Bife à Parmegiana</div>
                     <div className="item-price">R$ 25,00</div>
                  </div>
                  <div className="item">
                     <div className="item-name">Lasanha</div>
                     <div className="item-price">R$ 18,00</div>
                  </div>
               </section>
               
               <section className="Sobremesas">
                  <h2>Sobremesas</h2>
                  <div className="item">
                     <div className="item-name">Mousse de Chocolate</div>
                     <div className="item-price">R$ 9,00</div>
                  </div>
                  <div className="item">
                     <div className="item-name">Pudim de Leite</div>
                     <div className="item-price">R$ 7,00</div>
                  </div>
               </section>
            </div>         
         </aside>
        
     </div>
)

export default Menu