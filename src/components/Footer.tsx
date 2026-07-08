import { personalInfo } from '../data/portfolio';
import '../styles/Footer.css';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <a
              href="#"
              className="footer__logo"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              {personalInfo.initials}
            </a>
            <p className="footer__tagline">
              Building things for the web.
            </p>
          </div>

          <nav className="footer__nav">
            <div className="footer__nav-col">
              <span className="footer__nav-heading">Navigate</span>
              <ul>
                {['#about', '#skills', '#experience', '#projects', '#contact'].map((href) => (
                  <li key={href}>
                    <a href={href} onClick={(e) => scrollTo(e, href)}>
                      {href.replace('#', '').charAt(0).toUpperCase() + href.replace('#', '').slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__nav-col">
              <span className="footer__nav-heading">Connect</span>
              <ul>
                <li><a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href={`mailto:${personalInfo.email}`}>Email</a></li>
                <li><a href={personalInfo.cvUrl} download>Download CV</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="footer__built">
            Built with React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
