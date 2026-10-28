import { BookOpen, GraduationCap, School } from 'lucide-react';

const qualifications = [
  { year:'2016', label:'Secondary education', title:'Secondary School Certificate', short:'SSC', institution:'H. R. H. Prince Aga Khan Secondary School, Khulna', subject:'Science · Jessore Board', score:'4.78', total:'5.00', icon:School, note:'A foundation in science, quantitative reasoning and curiosity for technology.' },
  { year:'2018', label:'Higher secondary education', title:'Higher Secondary Certificate', short:'HSC', institution:'Govt. Bangabandhu College', subject:'Science · Jessore Board', score:'4.08', total:'5.00', icon:BookOpen, note:'Advanced mathematics and science strengthened my logical reasoning and problem-solving.' },
  { year:'2024', label:'Undergraduate degree', title:'B.Sc. (Honours) in Mathematics', short:'B.Sc.', institution:'National University, Bangladesh', subject:'Mathematics · Honours', score:'3.08', total:'4.00', icon:GraduationCap, note:'Mathematical thinking became the analytical foundation I bring to software engineering.' },
];

export default function EducationSection(){
  return <section className="academic-section" id="education" aria-labelledby="academic-title">
    <div className="academic-intro"><p className="kicker">Educational qualification</p><h2 id="academic-title">A foundation in logic.</h2><p>Science built my curiosity. Mathematics trained my reasoning.<br/>Software development gave both a practical direction.</p></div>
    <div className="academic-stage">
      <span className="academic-script" aria-hidden="true">Always learning</span>
      <span className="academic-word" aria-hidden="true">EDUCATION</span>
      <div className="academic-cards">{qualifications.map(({year,label,title,short,institution,subject,score,total,icon:Icon,note},index)=><article className="academic-card" key={short}>
        <div className="academic-card-top"><span>00{index+1}</span><span>{year}</span></div>
        <Icon className="academic-icon" size={34} strokeWidth={1.15}/>
        <div className="academic-card-body"><p className="academic-label">{label}</p><h3>{short}</h3><p className="academic-degree">{title}</p><p className="academic-institution">{institution}</p><p className="academic-subject">{subject}</p></div>
        <div className="academic-score"><span>GPA</span><strong>{score}<small> / {total}</small></strong></div>
        <p className="academic-note">{note}</p>
      </article>)}</div>
    </div>
  </section>;
}
