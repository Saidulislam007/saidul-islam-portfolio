import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";
import MotionExperience from "@/components/MotionExperience";
import NavigationMenu from "@/components/NavigationMenu";

export const metadata:Metadata={title:"Contact — Saidul Islam",description:"Contact details for Saidul Islam, Full-Stack Web Developer in Khulna, Bangladesh."};

const contacts=[
  {number:"01",label:"Phone",icon:Phone,values:["+880 1911-625953","+880 1638-383742"]},
  {number:"02",label:"WhatsApp",icon:MessageCircle,values:["+880 1911-625953"]},
  {number:"03",label:"Gmail",icon:Mail,values:["said38383742@gmail.com"]},
];

export default function ContactPage(){return <main className="contact-page" id="top">
  <MotionExperience/><NavigationMenu/>
  <section className="contact-page-hero">
    <div className="contact-page-intro"><p className="kicker">Contact · Saidul Islam</p><h1>Let&apos;s build something<br/><em>useful together.</em></h1><p>Have a project, opportunity or idea in mind? Here are the best ways to reach me.</p></div>
    <div className="contact-page-orbit" aria-hidden="true"><span>SI.</span><i>Available for selected opportunities</i></div>
  </section>
  <section className="contact-directory" aria-label="Contact details">
    {contacts.map(({number,label,icon:Icon,values})=><article key={label}><div className="contact-directory-head"><span>{number}</span><Icon/></div><p>{label}</p><div>{values.map(value=><strong key={value}>{value}</strong>)}</div></article>)}
  </section>
  <section className="contact-location"><span>Based in</span><strong>Khulna, Bangladesh</strong><p>Open to full-stack development, frontend engineering and collaborative product opportunities.</p></section>
  <footer><span>© 2026 Saidul Islam</span><span>Designed with intention. Built with Next.js.</span><a href="#top">Back to top ↑</a></footer>
</main>}
