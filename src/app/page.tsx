import { ArrowDownRight, ArrowUpRight, Award, CheckCircle2, Code2, FileText, Layers3, Mail, Send, Sparkles } from "lucide-react";
import HeroName from "@/components/HeroName";
import IntroExperience from "@/components/IntroExperience";
import MotionExperience from "@/components/MotionExperience";
import NavigationMenu from "@/components/NavigationMenu";
import ProjectGallery from "@/components/ProjectGallery";
import { projects } from "@/data/projects";

const stack = ["Next.js", "React", "TypeScript", "JavaScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"];
const technologies = [
  ["Next.js", "nextjs/nextjs-original.svg", "invert"],
  ["React", "react/react-original.svg", ""],
  ["TypeScript", "typescript/typescript-original.svg", ""],
  ["JavaScript", "javascript/javascript-original.svg", ""],
  ["Node.js", "nodejs/nodejs-original.svg", ""],
  ["Express.js", "express/express-original.svg", "invert"],
  ["MongoDB", "mongodb/mongodb-original.svg", ""],
  ["Tailwind CSS", "tailwindcss/tailwindcss-original.svg", ""],
  ["HTML5", "html5/html5-original.svg", ""],
  ["CSS3", "css3/css3-original.svg", ""],
  ["Git", "git/git-original.svg", ""],
  ["Firebase", "firebase/firebase-original.svg", ""],
];
export default function Home() {
  return <main>
    <IntroExperience />
    <MotionExperience />
    <NavigationMenu />
    <section className="hero" id="top">
      <div className="hero-copy">
        <HeroName/>
        <p className="hero-role">Full-Stack Web Developer</p>
        <p className="hero-lead">I build thoughtful digital products where clear interfaces meet reliable full-stack engineering.</p>
        <p className="hero-description">With a background in Mathematics, I turn complex problems into structured, responsive web experiences. I work across the product—from refined UI and accessible interactions to APIs, application logic and data.</p>
        <div className="hero-actions"><a href="#work" className="button primary">Explore my work <ArrowDownRight size={18}/></a><a href="https://www.linkedin.com/in/saidulislam007" className="button ghost" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={17}/></a></div>
      </div>
      <div className="hero-portrait" aria-label="Portrait of Saidul Islam">
        <div className="hero-shape" aria-hidden="true"/>
        <img src="/saidul-hero-cutout.png" alt="Saidul Islam, Full-Stack Web Developer" fetchPriority="high"/>
      </div>
    </section>
    <section className="profile-intro" id="about" aria-labelledby="profile-title">
      <p className="profile-kicker">A little bit about me</p>
      <div className="profile-main">
        <div className="profile-content">
          <div className="profile-mark" aria-hidden="true"><img src="/saidul-profile.webp" alt=""/></div>
          <h2 id="profile-title">Logic in my thinking.<br/><em>Intention in every interface.</em></h2>
          <p className="profile-copy">I&apos;m a full-stack developer with a Mathematics background, building responsive digital products from Khulna, Bangladesh. I care about the complete experience—how a product looks, how clearly it works and how reliably it performs.</p>
        </div>
      </div>
      <div className="profile-values">
        <div><Code2/><span>01</span><strong>Full-stack builder</strong><p>From thoughtful interfaces to APIs and data.</p></div>
        <div><Layers3/><span>02</span><strong>Structured thinker</strong><p>Complex problems translated into clear systems.</p></div>
        <div><Sparkles/><span>03</span><strong>Product focused</strong><p>Useful details that make experiences memorable.</p></div>
      </div>
    </section>
    <section className="marquee" aria-label="Technology stack"><div>{[...stack,...stack].map((item,index)=><span key={`${item}-${index}`}>{item}<i>✦</i></span>)}</div></section>
    <section className="work section" id="work">
      <div className="project-intro"><p className="kicker">Selected work</p><h2><span>Real problems</span><span>shaped into</span><span>clear products.</span></h2><p>Each case study connects a real challenge to the product decisions and engineering behind the outcome.</p></div>
      <ProjectGallery items={projects.slice(0,2)}/>
      <div className="all-projects-wrap"><a className="all-projects-button" href="/projects">View All Projects <ArrowUpRight/></a></div>
    </section>
    <section className="about section"><div><h2>Developer logic.<br/><em>Designer sensitivity.</em></h2></div><div className="about-copy"><p>I work across the product—from shaping a clear interface to connecting the APIs and data that make it useful. My background in Mathematics influences how I break complex problems into simple, structured experiences.</p><div className="principles"><span><CheckCircle2/> Responsive by default</span><span><CheckCircle2/> Clear, maintainable code</span><span><CheckCircle2/> Real user problems first</span><span><CheckCircle2/> Details that build trust</span></div></div></section>
    <section className="resume-callout" aria-labelledby="resume-title">
      <div className="resume-orbit" aria-hidden="true"><FileText/></div>
      <div className="resume-content"><p>Professional overview · 2026</p><h2 id="resume-title">Check out my <em>résumé!</em></h2><span>Experience, technical strengths, education and the product work behind my full-stack journey.</span><div className="resume-actions"><a href="/Saidul-Islam-Full-Stack-Developer-Resume.pdf" target="_blank" rel="noreferrer">View résumé <FileText/></a><a href="https://www.linkedin.com/in/saidulislam007" target="_blank" rel="noreferrer">View LinkedIn <ArrowUpRight/></a></div></div>
    </section>
    <section className="education section" id="education">
      <div className="section-head"><div><p className="kicker">Educational qualification</p><h2>A foundation in logic.</h2></div><p>Science built my curiosity. Mathematics trained my reasoning. Software development gave both a practical direction.</p></div>
      <div className="education-list">
        <article><div className="edu-year">2016<span>01</span></div><div className="edu-main"><p>Secondary education</p><h3>Secondary School Certificate <em>(SSC)</em></h3><strong>H. R. H. Prince Aga Khan Secondary School, Khulna</strong><div className="edu-meta"><span>Jessore Board</span><span>Science</span><span>GPA 4.78 / 5.00</span></div><p className="edu-note">Built a strong foundation in science, quantitative reasoning, disciplined study and curiosity for technology.</p></div></article>
        <article><div className="edu-year">2018<span>02</span></div><div className="edu-main"><p>Higher secondary education</p><h3>Higher Secondary Certificate <em>(HSC)</em></h3><strong>Govt. Bangabandhu College</strong><div className="edu-meta"><span>Jessore Board</span><span>Science</span><span>GPA 4.08 / 5.00</span></div><p className="edu-note">Advanced mathematics and science strengthened my logical reasoning, data interpretation and systematic problem-solving.</p></div></article>
        <article className="featured-edu"><div className="edu-year">2024<span>03</span></div><div className="edu-main"><p>Undergraduate degree</p><h3>B.Sc. <em>(Honours)</em> in Mathematics</h3><strong>National University, Bangladesh</strong><div className="edu-meta"><span>Mathematics</span><span>B.Sc. (Honours)</span><span>GPA 3.08 / 4.00</span></div><p className="edu-note">Pure mathematics trained me to decompose complex real-world problems into structured logic and algorithmic models—the analytical foundation I apply to software engineering today.</p></div></article>
      </div>
    </section>
    <section className="certification section" id="certification">
      <div className="section-head"><div><p className="kicker">Certification</p><h2>Learning, proven.</h2></div><p>A formal milestone that reflects the technical foundation and professional readiness behind my work.</p></div>
      <article className="certificate-card">
        <a className="certificate-preview" href="/Saidul-Islam-Programming-Hero-Certificate.pdf" target="_blank" rel="noreferrer" aria-label="View Programming Hero certificate"><img src="/Saidul-Islam-Programming-Hero-Certificate.png" alt="Programming Hero Complete Web Development Course certificate awarded to Saidul Islam" loading="lazy"/><span>View full certificate <ArrowUpRight/></span></a>
        <div className="certificate-details"><div className="certificate-seal"><Award/><span>Excellence</span></div><p className="certificate-label">Programming Hero · Batch 13</p><h3>Complete Web Development Course</h3><p className="certificate-description">Completed with excellence, demonstrating proficiency across HTML, CSS, JavaScript, React, Next.js, Node.js, Express.js, MongoDB and AI-powered development practices.</p><dl><div><dt>Issued</dt><dd>28 June 2026</dd></div><div><dt>Duration</dt><dd>01 January – 28 June 2026</dd></div><div><dt>Credential</dt><dd>WEB12-3369</dd></div></dl><a className="certificate-link" href="/Saidul-Islam-Programming-Hero-Certificate.pdf" target="_blank" rel="noreferrer">View certificate <ArrowUpRight/></a></div>
      </article>
    </section>
    <section className="toolkit section"><div className="section-head compact"><div><p className="kicker">Technologies I work with</p><h2>Built with purpose.</h2></div><Layers3 size={38}/></div><div className="skill-marquee" aria-label="Technologies I work with">{[technologies.slice(0,6),technologies.slice(6)].map((row,rowIndex)=><div className={`skill-row skill-row-${rowIndex+1}`} key={rowIndex}><div className="skill-row-track">{[...row,...row].map(([name,icon,tone],index)=><div className="skill-logo" key={`${name}-${index}`} aria-hidden={index>=row.length}><span>{String((index%row.length)+(rowIndex*6)+1).padStart(3,"0")}</span><img className={tone} src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}`} alt={index<row.length?`${name} logo`:""} loading="lazy"/><strong>{name}</strong></div>)}</div></div>)}</div></section>
    <section className="contact section" id="contact"><div className="contact-icon"><Send/></div><p className="kicker">Let&apos;s connect</p><h2>Get In <em>Touch!</em></h2><p className="contact-intro">Whether you have an idea for a project or just want to chat, feel free to shoot me an email!</p><a href="mailto:said38383742@gmail.com" className="contact-link">Say Hello <Mail/></a><div className="socials"><a className="social-github" href="https://github.com/Saidulislam007" target="_blank" rel="noreferrer" aria-label="GitHub"><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" alt=""/></a><a className="social-linkedin" href="https://www.linkedin.com/in/saidulislam007" target="_blank" rel="noreferrer" aria-label="LinkedIn"><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg" alt=""/></a><a className="social-email" href="mailto:said38383742@gmail.com" aria-label="Email"><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg" alt=""/></a><span className="social-facebook social-pending" title="Facebook profile link coming soon" aria-label="Facebook profile link coming soon"><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg" alt=""/></span><span className="social-instagram social-pending" title="Instagram profile link coming soon" aria-label="Instagram profile link coming soon"><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg" alt=""/></span></div></section>
    <footer><span>© 2026 Saidul Islam</span><span>Designed with intention. Built with Next.js.</span><a href="#top">Back to top ↑</a></footer>
  </main>;
}
