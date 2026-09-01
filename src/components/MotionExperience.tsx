"use client";
import { useEffect, useRef } from "react";

export default function MotionExperience() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollKey = "saidul-portfolio-scroll-y";
    const restorePosition = () => {
      const hashTarget = window.location.hash
        ? document.getElementById(decodeURIComponent(window.location.hash.slice(1)))
        : null;
      const savedY = Number(sessionStorage.getItem(scrollKey));
      const targetY = hashTarget
        ? hashTarget.getBoundingClientRect().top + window.scrollY - 74
        : Number.isFinite(savedY) ? savedY : 0;
      const previousBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, Math.max(0, targetY));
      requestAnimationFrame(() => { document.documentElement.style.scrollBehavior = previousBehavior; });
    };
    restorePosition();
    const rememberPosition = () => sessionStorage.setItem(scrollKey, String(Math.round(window.scrollY)));
    window.addEventListener("pagehide", rememberPosition);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return () => window.removeEventListener("pagehide", rememberPosition);
    document.body.classList.add("motion-ready");

    const reveals = document.querySelectorAll<HTMLElement>(".profile-intro>p, .profile-content>h2, .profile-content>.profile-copy, .profile-photo, .profile-mark, .profile-values>div, .resume-content>*, .resume-orbit, .section-head, .project, .about>div, .education-list article, .certificate-preview, .certificate-details>*, .skill-logo, .contact>*");
    reveals.forEach((el, index) => {
      el.classList.add("motion-reveal");
      el.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 80}ms`);
    });
    const observer = new IntersectionObserver((entries) => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("motion-visible"); observer.unobserve(entry.target); }
    }), { threshold: .14, rootMargin: "0px 0px -7% 0px" });
    reveals.forEach(el => observer.observe(el));

    const finePointer = window.matchMedia("(pointer:fine)").matches;
    let raf = 0, mouseX = innerWidth / 2, mouseY = innerHeight / 2, ringX = mouseX, ringY = mouseY;
    const render = () => {
      ringX += (mouseX - ringX) * .14; ringY += (mouseY - ringY) * .14;
      ring.current?.style.setProperty("transform", `translate3d(${ringX}px,${ringY}px,0) translate(-50%,-50%)`);
      dot.current?.style.setProperty("transform", `translate3d(${mouseX}px,${mouseY}px,0) translate(-50%,-50%)`);
      glow.current?.style.setProperty("transform", `translate3d(${mouseX}px,${mouseY}px,0) translate(-50%,-50%)`);
      raf = requestAnimationFrame(render);
    };
    const move = (event: MouseEvent) => {
      mouseX = event.clientX; mouseY = event.clientY;
      const px = (event.clientX / innerWidth - .5) * 18;
      const py = (event.clientY / innerHeight - .5) * 14;
      document.documentElement.style.setProperty("--hero-x", `${px}px`);
      document.documentElement.style.setProperty("--hero-y", `${py}px`);
    };
    if (finePointer) { window.addEventListener("mousemove", move, { passive: true }); raf = requestAnimationFrame(render); }

    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-wrap nav a"));
    const storySections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    const projectIntro = document.querySelector<HTMLElement>(".project-intro");
    const projectWords = Array.from(document.querySelectorAll<HTMLElement>(".project-intro h2 span"));
    const projectShowcases = Array.from(document.querySelectorAll<HTMLElement>(".project-showcase"));
    const clamp = (value: number) => Math.min(1, Math.max(0, value));
    const updateProjectMotion = () => {
      if (projectIntro) {
        const rect = projectIntro.getBoundingClientRect();
        const progressValue = clamp((innerHeight * .88 - rect.top) / (innerHeight * .72));
        const scatter = 1 - progressValue;
        const mobileFactor = innerWidth < 640 ? .55 : 1;
        const offsets = [[-34,-70,-8],[44,38,7],[-18,105,-5]];
        projectWords.forEach((word,index) => {
          const [x,y,r] = offsets[index] || [0,0,0];
          word.style.transform = `translate3d(${x * scatter * mobileFactor}vw,${y * scatter}px,0) rotate(${r * scatter}deg)`;
          word.style.opacity = String(.12 + progressValue * .88);
          word.style.filter = `blur(${scatter * 3}px)`;
        });
      }
      projectShowcases.forEach((card,index) => {
        const rect = card.getBoundingClientRect();
        const progressValue = clamp((innerHeight - rect.top) / (innerHeight + Math.min(rect.height, innerHeight)));
        const reveal = clamp(progressValue * 1.7);
        const visual = card.querySelector<HTMLElement>(".project-visual");
        const main = card.querySelector<HTMLElement>(".browser-main");
        const floating = card.querySelector<HTMLElement>(".browser-float");
        const identity = card.querySelector<HTMLElement>(".project-identity");
        if (visual) visual.style.transform = `translate3d(0,${(1-reveal)*80}px,0) scale(${.9 + reveal*.1})`;
        if (visual) visual.style.opacity = String(.3 + reveal*.7);
        if (main) main.style.setProperty("--project-depth", `${(1-reveal)*125 - progressValue*22}px`);
        if (floating) floating.style.setProperty("--project-depth", `${(1-reveal)*210 - progressValue*48}px`);
        if (identity) identity.style.transform = `translate3d(0,${(1-reveal)*55 - progressValue*20}px,0)`;
        card.style.setProperty("--project-index", String(index));
      });
    };
    const updateScrollStory = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      progress.current?.style.setProperty("transform", `scaleX(${max > 0 ? window.scrollY / max : 0})`);
      let active = "top";
      storySections.forEach(section => { if (section.getBoundingClientRect().top <= innerHeight * .38) active = section.id; });
      navLinks.forEach(link => link.classList.toggle("nav-active", link.getAttribute("href") === `#${active}`));
      updateProjectMotion();
    };
    updateScrollStory();
    window.addEventListener("scroll", updateScrollStory, { passive: true });
    window.addEventListener("resize", updateScrollStory, { passive: true });

    const projects = document.querySelectorAll<HTMLElement>(".project");
    const projectCleanups: Array<() => void> = [];
    projects.forEach(card => {
      const tilt = (event: PointerEvent) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--tilt-x", `${((event.clientY-r.top)/r.height-.5)*-5}deg`);
        card.style.setProperty("--tilt-y", `${((event.clientX-r.left)/r.width-.5)*7}deg`);
        card.style.setProperty("--shine-x", `${((event.clientX-r.left)/r.width)*100}%`);
        card.style.setProperty("--shine-y", `${((event.clientY-r.top)/r.height)*100}%`);
      };
      const reset = () => { card.style.setProperty("--tilt-x", "0deg"); card.style.setProperty("--tilt-y", "0deg"); };
      card.addEventListener("pointermove", tilt); card.addEventListener("pointerleave", reset);
      projectCleanups.push(() => { card.removeEventListener("pointermove", tilt); card.removeEventListener("pointerleave", reset); });
    });

    const interactives = document.querySelectorAll<HTMLElement>("a, .button, .project");
    const enter = () => document.body.classList.add("motion-hovering");
    const leave = () => document.body.classList.remove("motion-hovering");
    interactives.forEach(el => { el.addEventListener("mouseenter", enter); el.addEventListener("mouseleave", leave); });

    return () => {
      document.body.classList.remove("motion-ready", "motion-hovering"); observer.disconnect(); cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move); window.removeEventListener("scroll", updateScrollStory); window.removeEventListener("resize", updateScrollStory); projectCleanups.forEach(fn => fn());
      window.removeEventListener("pagehide", rememberPosition);
      interactives.forEach(el => { el.removeEventListener("mouseenter", enter); el.removeEventListener("mouseleave", leave); });
    };
  }, []);

  return <><div className="scroll-progress" ref={progress}/><div className="motion-spotlight" ref={glow}/><div className="motion-cursor-ring" ref={ring}/><div className="motion-cursor-dot" ref={dot}/><div className="story-rail" aria-hidden="true"><span>01</span><i/><span>05</span></div></>;
}
