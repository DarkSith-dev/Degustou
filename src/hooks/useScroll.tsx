import React from "react";

function  useScroll() {
    function scroll(p: {id?: string}) {
      if (p.id) scrollToTargetAdjusted(p.id);
    }
  
    return {
      scroll,
    }
  }
  
  function scrollToTargetAdjusted(id: string){
    const element = document.getElementById(id);
    if (! element) return;
    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
  }
  export default useScroll