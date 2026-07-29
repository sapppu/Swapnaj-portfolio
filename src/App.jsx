import { useState } from 'react';
import { profile } from './data/profile';
import { educationData, certificationsData, achievementsData } from './data/about';
import { skillsData } from './data/skills';
import { projects } from './data/projects';
import SkillPill from './components/SkillPill';
import ScrollReveal from './components/ScrollReveal';
import './App.css';

const HIGHLIGHTS = [
  'Full-Stack Development',
  'Java & Spring Boot',
  'React & Next.js',
  'AI / Agentic Workflows',
  'Database Design',
];

const STATS = [
  { value: '5', suffix: '+', label: 'Projects Built', dark: false },
  { value: '5', suffix: '', label: 'Certifications Earned', dark: true },
  { value: 'Top 5', suffix: '', label: 'National AI Sprint Finalist', dark: false },
];

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

function Header({ menuOpen, onToggleMenu }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#" className="logo">
          <span className="logo-mark">ST</span>
          <span className="logo-text">{profile.shortName}</span>
        </a>

        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => onToggleMenu(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <div className="header-social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">GH</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">IN</a>
          </div>
          <a className="btn btn-dark btn-sm" href={profile.github} target="_blank" rel="noopener noreferrer">
            View GitHub
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => onToggleMenu(!menuOpen)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-wrap">
        <h1 className="hero-giant" aria-hidden="true">developer</h1>

        <div className="hero-photo">
          <img src={profile.photo} alt={profile.name} width={560} height={680} />
        </div>

        <div className="hero-grid">
          <div className="hero-card hero-card--left">
            <h2 className="hero-intro">
              Hello! I&apos;m {profile.shortName}
              <br />
              <span>{profile.title.toLowerCase()}.</span>
            </h2>
            <ul className="hero-tags">
              {HIGHLIGHTS.map((item) => (
                <li key={item}>
                  <span className="hero-tag-icon">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-center">
            <ScrollReveal
              baseOpacity={0}
              enableBlur
              baseRotation={4}
              blurStrength={8}
              containerClassName="hero-tagline-reveal"
              textClassName="hero-tagline"
            >
              Full-stack apps, clean code, and AI-powered tools — built from scratch.
            </ScrollReveal>
            <a className="btn btn-dark" href="#projects">
              View projects
              <span className="btn-dot" />
            </a>
          </div>

          <div className="hero-card hero-card--right">
            {STATS.map((stat) => (
              <div key={stat.label} className={`stat-card ${stat.dark ? 'stat-card--dark' : ''}`}>
                <strong>
                  {stat.value}
                  {stat.suffix}
                </strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-ring" aria-hidden="true">
          <span className="hero-ring-dot" />
        </div>
      </div>
    </section>
  );
}

function Marquee({ text }) {
  const line = `${text} · `.repeat(8);
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <span>{line}</span>
        <span>{line}</span>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);

  return (
    <article className={`project-item ${index % 2 ? 'project-item--alt' : ''}`}>
      <div className="project-meta">
        <div>
          <h3>
            <button type="button" className="project-title-btn" onClick={() => setOpen((v) => !v)}>
              {project.title}
            </button>
          </h3>
          <div className="tag-row">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <button type="button" className="project-arrow" onClick={() => setOpen((v) => !v)} aria-label="Toggle details">
          ↗
        </button>
      </div>
      <a className="project-thumb" href={project.image} target="_blank" rel="noopener noreferrer">
        <img src={project.image} alt={project.title} loading="lazy" />
      </a>
      {open && (
        <div className="project-detail">
          <p>{project.caseStudy.overview}</p>
        </div>
      )}
    </article>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const year = new Date().getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    e.target.reset();
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <div className="page">
      <Header menuOpen={menuOpen} onToggleMenu={setMenuOpen} />

      <main>
        <Hero />

        <section className="about section" id="about">
          <div className="container">
            <ScrollReveal
              baseOpacity={0}
              enableBlur
              baseRotation={5}
              blurStrength={10}
              containerClassName="section-title section-title--big"
              textClassName="section-title-text"
            >
              I build full-stack products with strong backend foundations, modern frontends,
              and practical AI integration — explore the work below.
            </ScrollReveal>
            <div className="about-grid">
              <div className="about-photo">
                <img src={profile.photo} alt={profile.name} loading="lazy" />
              </div>
              <div className="about-copy">
                <p>{profile.bio}</p>
                <p>
                  From Spring Boot ERP systems to custom SQL engines and agentic mobile apps,
                  I focus on shipping real software — not just demos. Currently pursuing MCA at
                  MIT WPU while open to internships and full-time roles.
                </p>
                <div className="about-badge">
                  <strong>2+</strong>
                  <span>Years building projects</span>
                </div>
              </div>
            </div>
            <div className="about-stats">
              <div className="about-stat">
                <strong>MCA</strong>
                <span>MIT WPU · 2027</span>
              </div>
              <div className="about-stat">
                <strong>BSc CS</strong>
                <span>D.Y. Patil · 2025</span>
              </div>
            </div>
          </div>
        </section>

        <Marquee text="Skills" />

        <section className="skills section section--dark" id="skills">
          <div className="container">
            {skillsData.map((group, i) => (
              <div key={group.category} className={`skill-row ${i % 2 ? 'skill-row--alt' : ''}`}>
                <div className="skill-row-head">
                  <span className="skill-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{group.category}</h3>
                    <p>{group.description}</p>
                    <div className="skill-pills">
                      {group.skills.slice(0, 8).map((skill, j) => (
                        <SkillPill key={skill} name={skill} tint="#c8f135" depth="#0c0c0c" variant={j} />
                      ))}
                      {group.skills.length > 8 && (
                        <span className="skill-more">+{group.skills.length - 8} more</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="container">
            <div className="section-head">
              <h2 className="section-watermark">works</h2>
              <p className="section-kicker">Selected projects</p>
            </div>
            <div className="projects-list">
              {projects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        </section>

        <section className="education section" id="education">
          <div className="container">
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur
              baseRotation={3}
              blurStrength={6}
              containerClassName="section-title"
              textClassName="section-title-text"
            >
              Education and achievements
            </ScrollReveal>
            <ul className="edu-list">
              {educationData.map((edu) => (
                <li key={edu.degree} className="edu-item">
                  <div className="edu-top">
                    <h3>{edu.degree}</h3>
                    <time>{edu.period}</time>
                  </div>
                  <p>{edu.institution}</p>
                  {edu.detail && <p className="edu-detail">{edu.detail}</p>}
                </li>
              ))}
            </ul>

            <h3 className="block-label">Achievements</h3>
            <ul className="achieve-list">
              {achievementsData.map((a) => (
                <li key={a.title}>
                  <a href={a.url} target="_blank" rel="noopener noreferrer" className="achieve-item">
                    <strong>{a.title}</strong>
                    <span>{a.detail}</span>
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="block-label">Certifications</h3>
            <ul className="cert-list">
              {certificationsData.map((cert) => (
                <li key={cert.title}>
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="cert-item">
                    <div className="cert-top">
                      <span>{cert.issuer}</span>
                      <time>{cert.year}</time>
                    </div>
                    <h4>{cert.title}</h4>
                    <p>{cert.description}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="contact section section--dark" id="contact">
          <div className="container contact-grid">
            <div className="contact-left">
              <ScrollReveal
                baseOpacity={0}
                enableBlur
                baseRotation={4}
                blurStrength={10}
                containerClassName="contact-title-wrap"
                textClassName="contact-title"
              >
                Let&apos;s build something meaningful
              </ScrollReveal>
              <div className="contact-links">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <span>//</span>
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
              </div>
              <div className="contact-card">
                <img src={profile.photo} alt="" className="contact-thumb" />
                <div>
                  <h3>{profile.name}</h3>
                  <p>{profile.title}</p>
                  <p className="contact-loc">{profile.location}</p>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input type="text" name="name" required placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" name="email" required placeholder="you@email.com" />
              </label>
              <label>
                Message
                <textarea name="message" rows={5} required placeholder="Say hello..." />
              </label>
              <button type="submit" className="btn btn-accent btn-full">
                Submit message
              </button>
              {formSent && <p className="form-ok">Thanks! I&apos;ll get back to you soon.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <h4>Quick links</h4>
            <ul>
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <a href="#home" className="footer-top" aria-label="Back to top">↑</a>
          <div className="footer-meta">
            <h4>{profile.shortName} Portfolio</h4>
            <p>© {year} {profile.name}</p>
          </div>
        </div>
        <p className="footer-giant">{profile.shortName}</p>
      </footer>
    </div>
  );
}
