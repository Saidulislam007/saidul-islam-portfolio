import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MotionExperience from "@/components/MotionExperience";
import NavigationMenu from "@/components/NavigationMenu";
import ProjectGallery from "@/components/ProjectGallery";
import { projects } from "@/data/projects";

export const metadata:Metadata={title:"All Projects — Saidul Islam",description:"Selected full-stack and frontend projects by Saidul Islam."};

export default function ProjectsPage(){return <main className="projects-page" id="top">
  <MotionExperience/><NavigationMenu/>
  <section className="projects-page-hero"><Link href="/#work"><ArrowLeft/> Back to portfolio</Link><p className="kicker">Project archive · 2026</p><h1>Products built with<br/><em>purpose and clarity.</em></h1><p>Six responsive web experiences—from AI travel planning and healthcare to commerce, galleries and digital libraries.</p></section>
  <section className="work section projects-archive"><ProjectGallery items={projects}/></section>
  <footer><span>© 2026 Saidul Islam</span><span>Designed with intention. Built with Next.js.</span><a href="#top">Back to top ↑</a></footer>
</main>}
