"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";

const menuGroups = [
  { title:"Sitemap", links:[["Home","/#top"],["About me","/#about"],["Projects","/projects"],["Education","/#education"],["Contact","/contact"]] },
  { title:"Selected projects", links:[["TripPlan AI","/#work"],["RouteSync","/#work"],["All projects","/projects"]] },
  { title:"Follow me", links:[["GitHub","https://github.com/Saidulislam007"],["LinkedIn","https://www.linkedin.com/in/saidulislam007"],["Email","mailto:said38383742@gmail.com"]] },
];

export default function NavigationMenu() {
  const [open,setOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("menu-open",open);
    const close = (event:KeyboardEvent) => { if(event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown",close);
    return () => { document.body.classList.remove("menu-open"); window.removeEventListener("keydown",close); };
  },[open]);

  return <>
    <header className="nav-wrap">
      <Link href="/#top" className="brand" aria-label="Saidul Islam home">SI<span>.</span></Link>
      <div className="nav-actions"><Link className="nav-cta" href="/contact">Contact <ArrowUpRight size={16}/></Link><button className="menu-trigger" onClick={()=>setOpen(true)} aria-expanded={open} aria-controls="site-menu"><span>Menu</span><Menu/></button></div>
    </header>
    <div className={`menu-overlay ${open?"menu-overlay-open":""}`} id="site-menu" aria-hidden={!open}>
      <div className="menu-curtain"/>
      <button className="menu-close" onClick={()=>setOpen(false)} aria-label="Close menu"><X/></button>
      <div className="menu-visual" aria-hidden="true"><span>SI</span><p>DESIGN × ENGINEERING</p><i>Khulna, Bangladesh</i></div>
      <div className="menu-directory">{menuGroups.map((group,groupIndex)=><div className="menu-group" style={{"--group-delay":`${groupIndex*90+180}ms`} as CSSProperties} key={group.title}><h2>{group.title}</h2>{group.links.map(([label,href],index)=>href.startsWith("/")?<Link href={href} onClick={()=>setOpen(false)} key={label}><span>0{index+1}</span>{label}<ArrowUpRight/></Link>:<a href={href} onClick={()=>setOpen(false)} target={href.startsWith("http")?"_blank":undefined} rel={href.startsWith("http")?"noreferrer":undefined} key={label}><span>0{index+1}</span>{label}<ArrowUpRight/></a>)}</div>)}</div>
      <p className="menu-note">Available for selected full-stack opportunities · 2026</p>
    </div>
  </>;
}
