'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function DeveloperLogic(){
  const stage=useRef<HTMLElement>(null);
  useEffect(()=>{
    const element=stage.current;
    if(!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    element.classList.add('logic-ready');
    const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting) element.classList.add('logic-visible');else element.classList.remove('logic-visible');}},{threshold:.12});
    observer.observe(element);
    let frame=0;
    const update=()=>{
      frame=0;
      const rect=element.getBoundingClientRect();
      const progress=Math.min(1,Math.max(0,(innerHeight-rect.top)/(innerHeight+rect.height)));
      element.style.setProperty('--logic-scroll',`${((progress-.5)*100).toFixed(2)}px`);
    };
    const scroll=()=>{if(!frame) frame=requestAnimationFrame(update);};
    const move=(event:PointerEvent)=>{if(event.pointerType==='touch') return;const rect=element.getBoundingClientRect();element.style.setProperty('--logic-mouse-x',`${((event.clientX-rect.left)/rect.width-.5)*35}px`);element.style.setProperty('--logic-mouse-y',`${((event.clientY-rect.top)/rect.height-.5)*25}px`);};
    const leave=()=>{element.style.setProperty('--logic-mouse-x','0px');element.style.setProperty('--logic-mouse-y','0px');};
    update();window.addEventListener('scroll',scroll,{passive:true});window.addEventListener('resize',scroll);element.addEventListener('pointermove',move);element.addEventListener('pointerleave',leave);
    return()=>{observer.disconnect();cancelAnimationFrame(frame);window.removeEventListener('scroll',scroll);window.removeEventListener('resize',scroll);element.removeEventListener('pointermove',move);element.removeEventListener('pointerleave',leave);element.classList.remove('logic-ready','logic-visible');};
  },[]);
  return <section className="logic-section" ref={stage} aria-labelledby="logic-title">
    <div className="logic-composition">
      <div className="logic-circle logic-circle-one" aria-hidden="true"/><div className="logic-circle logic-circle-two" aria-hidden="true"/>
      <h2 id="logic-title" className="logic-title"><span className="logic-line logic-line-one">Developer logic.</span><em className="logic-line logic-line-two">Designer sensitivity.</em></h2>
      <p className="logic-copy logic-copy-top">I work across the product—from shaping a clear interface to connecting the APIs and data that make it useful.</p>
      <p className="logic-copy logic-copy-bottom">My background in Mathematics influences how I break complex problems into simple, structured experiences. Thoughtful details turn that logic into interfaces people enjoy using.</p>
    </div>
    <Link href="/contact" className="logic-contact"><span>Let&apos;s talk <ArrowUpRight size={16}/></span></Link>
    <div className="logic-principles"><span>Responsive by default</span><span>Clear, maintainable code</span><span>Real user problems first</span><span>Details that build trust</span></div>
  </section>;
}
