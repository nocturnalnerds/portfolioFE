import { useInView } from '../hooks/useInView';
import { projects } from '../data/portfolio';
import '../styles/Projects.css';

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const { ref, inView } = useInView(0.05);
  const isReverse = index % 2 !== 0;
  const num = String(index + 1).padStart(2, '0');

  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-row${isReverse ? ' project-row--reverse' : ''} reveal${inView ? ' visible' : ''}`}
      ref={ref as React.RefObject<HTMLAnchorElement>}
    >
      {/* Visual side */}
      <div className="project-row__visual">
        <div
          className="project-row__bg"
          style={{
            backgroundImage: project.imageSrc
              ? `url(${project.imageSrc})`
              : project.gradient,
          }}
        />
        {/* <span className="project-row__num">{num}</span> */}
        <div className="project-row__hover-overlay">
          <span className="project-row__open-label">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            View on GitHub
          </span>
        </div>
      </div>

      {/* Content side */}
      <div className="project-row__content">
        <span className="project-row__category">{project.category}</span>
        <h3 className="project-row__title">{project.title}</h3>
        <p className="project-row__desc">{project.description}</p>
        <div className="project-row__tech">
          {project.tech.map((t) => (
            <span key={t} className="project-row__chip">
              {t}
            </span>
          ))}
        </div>
        <span className="project-row__link">
          GitHub
          <svg className="project-row__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
    </a>
  );
}

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section className="projects" id="projects">
      <div className="projects__header" ref={ref as React.RefObject<HTMLDivElement>}>
        <div className="projects__header-inner">
          <div className={`reveal${inView ? ' visible' : ''}`}>
            <p className="section-label">Projects</p>
            <h2 className="section-title">Selected Work</h2>
          </div>
          <p className={`section-subtitle reveal reveal-delay-2${inView ? ' visible' : ''}`}>
            A collection of projects I've built — click any to view the source.
          </p>
        </div>
      </div>

      <div className="projects__list">
        {projects.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
