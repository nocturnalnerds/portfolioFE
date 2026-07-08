import { useInView } from '../hooks/useInView';
import { experiences } from '../data/portfolio';
import '../styles/Experience.css';

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section className="experience" id="experience" ref={ref as React.RefObject<HTMLElement>}>
      <div className="experience__inner">
        <div className={`experience__header reveal${inView ? ' visible' : ''}`}>
          <p className="section-label">Experience</p>
          <h2 className="section-title">Work History</h2>
        </div>

        <div className="experience__timeline">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`experience__item reveal reveal-delay-${Math.min(i + 1, 5)}${inView ? ' visible' : ''}`}
            >
              <div className="experience__left">
                <span className="experience__date">{exp.date}</span>
              </div>

              <div className="experience__dot-col">
                <div className="experience__dot" />
                {i < experiences.length - 1 && <div className="experience__line" />}
              </div>

              <div className="experience__right">
                <span className="experience__date-mobile">{exp.date}</span>
                <h3 className="experience__role">{exp.role}</h3>
                <p className="experience__company">{exp.company}</p>
                <ul className="experience__desc">
                  {exp.description.split('\n').map((line, j) => (
                    <li key={j}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
