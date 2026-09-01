"use client";

import { useEffect, useState, type CSSProperties } from "react";

export default function HeroName(){
  const [visible,setVisible]=useState(false);
  useEffect(()=>{
    const reveal=()=>setVisible(true);
    window.addEventListener("saidul-intro-complete",reveal,{once:true});
    const fallback=window.setTimeout(()=>{
      if(!document.querySelector(".intro-overlay")) reveal();
    },180);
    return()=>{window.clearTimeout(fallback);window.removeEventListener("saidul-intro-complete",reveal)};
  },[]);
  return <h1 className={`hero-name ${visible?"hero-name-visible":""}`} aria-label="Saidul Islam">{"Saidul Islam".split("").map((letter,index)=><span aria-hidden="true" style={{"--letter-index":index} as CSSProperties} key={`${letter}-${index}`}>{letter===" "?"\u00a0":letter}</span>)}</h1>;
}
