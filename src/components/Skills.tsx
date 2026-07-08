import { useInView } from '../hooks/useInView';
import { skills } from '../data/portfolio';
import '../styles/Skills.css';

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section className="skills" id="skills" ref={ref as React.RefObject<HTMLElement>}>
      <div className="skills__inner">
        <div className={`skills__header reveal${inView ? ' visible' : ''}`}>
          <p className="section-label">Skills</p>
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">
            Technologies and tools I work with regularly.
          </p>
        </div>

        <div className="skills__groups">
          {skills.map((group, gi) => (
            <div
              key={group.category}
              className={`skills__group reveal reveal-delay-${gi + 1}${inView ? ' visible' : ''}`}
            >
              <h3 className="skills__category">{group.category}</h3>
              <div className="skills__tags">
                {group.items.map((skill) => (
                  <span key={skill} className="skills__tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
