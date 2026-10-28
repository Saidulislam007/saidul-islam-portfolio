import type { CSSProperties } from 'react';
import { ArrowUpRight, Code2 } from 'lucide-react';
import type { Project } from '@/data/projects';

export default function StackedProjects({items}:{items:Project[]}) {
  return <div className="stacked-projects">{items.map((project,index)=><article className="stack-card" key={project.title} style={{'--card-index':index,'--card-color':['#fcf0d5','#e9e3fa','#f6dce5','#dcf5eb','#e7e3fb','#e0ecfa','#f7e6d7','#e5ecd8'][index%8]} as CSSProperties}>
    <div className="stack-copy">
      <span className="stack-category">{project.label}</span>
      <h3>{project.title}</h3>
      <p className="stack-summary">{project.summary}</p>
      <div className="stack-meta"><div><span>Focus</span><strong>{project.tags[0]} development</strong></div><div><span>Project</span><strong>{String(index+1).padStart(2,'0')} / {String(items.length).padStart(2,'0')}</strong></div></div>
      <div className="stack-tags">{project.tags.slice(0,5).map(tag=><span key={tag}>{tag}</span>)}</div>
      <div className="stack-actions">{project.liveUrl?<a href={project.liveUrl} target="_blank" rel="noreferrer"><span className="stack-avatar">{project.title.slice(0,2).toUpperCase()}</span><span><strong>Explore {project.title}</strong><small>View live project</small></span><ArrowUpRight/></a>:<a href={project.githubUrl} target="_blank" rel="noreferrer"><span className="stack-avatar"><Code2 size={17}/></span><span><strong>Explore {project.title}</strong><small>View source code</small></span><ArrowUpRight/></a>}<a className="stack-github" href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository`}><Code2 size={19}/></a></div>
    </div>
    <a className="stack-image" href={project.liveUrl||project.githubUrl} target="_blank" rel="noreferrer" aria-label={`Explore ${project.title}`}><img src={project.image} alt={`${project.title} website screenshot`} loading="lazy"/><span>View project <ArrowUpRight size={16}/></span></a>
  </article>)}</div>;
}
