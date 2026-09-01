import { ArrowUpRight, Code2 } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectGallery({items}:{items:Project[]}) {
  return <div className="project-list">{items.map((project)=><article className={`project project-showcase ${project.tone}`} key={project.title}>
    <div className="project-visual">
      <div className="project-identity"><h3>{project.title}</h3></div>
      <div className="project-screenshot-frame">
        <div className="browser-bar"><i/><i/><i/><span>{project.title.toLowerCase().replaceAll(" ","")}.app</span></div>
        <img className="project-screenshot" src={project.image} alt={`${project.title} desktop interface`} loading="lazy"/>
      </div>
      <div className="scene-word" aria-hidden="true">{project.title}</div>
    </div>
    <div className="project-story">
      <div><p>{project.summary}</p><div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div>
      <div className="case-notes"><div><span>The challenge</span><p>{project.problem}</p></div><div><span>The response</span><p>{project.solution}</p></div></div>
      <div className="project-links">{project.liveUrl?<a href={project.liveUrl} target="_blank" rel="noreferrer">Live Demo <ArrowUpRight/></a>:<span className="project-live-pending" aria-disabled="true" title="Live URL will be added soon">Live Demo <ArrowUpRight/></span>}<a href={project.githubUrl} target="_blank" rel="noreferrer"><Code2/> GitHub Repo</a></div>
    </div>
  </article>)}</div>;
}
