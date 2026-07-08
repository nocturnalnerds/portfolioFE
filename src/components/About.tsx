import { useInView } from '../hooks/useInView';
import { personalInfo } from '../data/portfolio';
import '../styles/About.css';

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section className="about" id="about" ref={ref as React.RefObject<HTMLElement>}>
      <div className="about__inner">
        <div className={`about__left reveal${inView ? ' visible' : ''}`}>
          <p className="section-label">About Me</p>
          <h2 className="section-title">The person<br />behind the code.</h2>

          <div className="about__avatar">
            <div className="about__avatar-ring" />
            <img
              src={personalInfo.avatarSrc}
              alt={personalInfo.name}
              className="about__avatar-img"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>

        <div className="about__right">
          {personalInfo.about.split('\n\n').map((paragraph, i) => (
            <p
              key={i}
              className={`about__paragraph reveal reveal-delay-${i + 2}${inView ? ' visible' : ''}`}
            >
              {paragraph}
            </p>
          ))}

          <div className={`about__meta reveal reveal-delay-4${inView ? ' visible' : ''}`}>
            <div className="about__meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{personalInfo.location}</span>
            </div>
            <div className="about__meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
