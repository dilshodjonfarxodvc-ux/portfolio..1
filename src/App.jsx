import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Mail, ArrowUpRight, Award } from "lucide-react";
import { useState } from "react";

import profileImg from "./assets/photo_2026-10-13_18-46-59.jpg";
import certificateImg from "./assets/sertifikat.jpg";

import "./App.css";

const SOCIALS = [
  {
    icon: FaGithub,
    href: "https://github.com/dilshodjonfarxodvc-ux",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/dilshod-boymurodov-2b52243b5",
    label: "LinkedIn",
  },
  {
    icon: FaTwitter,
    href: "https://x.com/burunduqboi_02",
    label: "Twitter",
  },
];

const STATS = [
  { value: "2+", label: "years experience" },
  { value: "15+", label: "projects" },
  { value: "8", label: "technologies" },
];

const SKILL_GROUPS = [
  {
    title: "Languages & Frameworks",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Style & Design",
    items: ["Tailwind CSS", "Bootstrap", "Figma"],
  },
  {
    title: "Tools & Deploy",
    items: ["Git", "GitHub", "VS Code", "Vercel", "Netlify"],
  },
];

const PROJECTS = [
  {
    name: "YouTube Clone",
    description:
      "A responsive YouTube-style video platform with a sidebar, video grid, search, and video player page.",
    tech: ["React JS", "Tailwind CSS"],
    featured: true,
    link: "https://you-tube01.vercel.app/",
  },
  {
    name: "English Game",
    description:
      "A game-based English learning site for kids with 6 mini-games, levels and XP, daily streaks, and achievement badges.",
    tech: ["React JS", "CSS"],
    featured: false,
    link: "https://claude.ai/artifact/DJig1aDHTxxGRydfF6tMXu",
  },
];

const ACHIEVEMENTS = [
  {
    title: "Web Developer Certificate",
    issuer: "TestDome",
    date: "Oct 1, 2026",
    result: "Ranking in the top 25%",
    description:
      "Passed the public Web Developer test on TestDome, an online skills platform that evaluates candidates through small samples of real-world work.",
    image: certificateImg,
    link: "https://www.testdome.com/certificates/8638bf1c4804482d9448b7bfbcb72dd3",
  },
];

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <Background />

      <header className="header">
        <div className="header-inner">
          <button onClick={() => setPage("home")} className="logo">
            DILSHOD
          </button>

          <nav className="nav-desktop">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => setPage(n.id)}
                className={`nav-btn ${
                  page === n.id ? "nav-btn-active" : ""
                }`}
              >
                {n.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setPage("contact")}
            className="btn-amber header-cta"
          >
            Contact
          </button>
        </div>

        <nav className="nav-mobile">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => setPage(n.id)}
              className={`nav-btn-sm ${
                page === n.id ? "nav-btn-active" : ""
              }`}
            >
              {n.label}
            </button>
          ))}
        </nav>
      </header>

      <main key={page} className="page animate-page-in">
        {page === "home" && <HomePage onNavigate={setPage} />}
        {page === "about" && <AboutPage />}
        {page === "skills" && <SkillsPage />}
        {page === "projects" && <ProjectsPage />}
        {page === "achievements" && <AchievementsPage />}
        {page === "contact" && <ContactPage />}
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} — All rights reserved
      </footer>
    </div>
  );
}

/* ---------- Background ---------- */

function Background() {
  return (
    <div className="bg">
      <div className="glow glow-amber" />
      <div className="glow glow-lavender" />
      <div className="dots" />

      <svg className="grain" aria-hidden="true">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      <div className="fade-bottom" />
    </div>
  );
}

/* ---------- Home ---------- */

function HomePage({ onNavigate }) {
  return (
    <>
      <section className="home">
        <div className="home-text">
          <div className="badge">
            <span className="badge-dot" />
            Open to work
          </div>

          <h1 className="home-title">Dilshod Boymurodov</h1>

          <p className="home-role">Frontend Developer</p>

          <p className="home-desc">
            I build modern, fast, and user-friendly web applications.
            I turn ideas into working products through clean code,
            thoughtful animations, and precise details.
          </p>

          <div className="home-actions">
            <a href="#" className="btn-amber btn-lg">
              Download CV
            </a>

            <button
              onClick={() => onNavigate("projects")}
              className="link-btn"
            >
              View Projects
            </button>
          </div>

          <div className="socials">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Profil rasmi */}
        <div className="photo-wrap">
          <div className="photo-glow" />

          <div className="photo-box">
            <img
              src={profileImg}
              alt="Dilshod Boymurodov - Frontend Developer"
              className="profile-img"
            />
          </div>
        </div>
      </section>

      <div className="about-section">
        <section className="section section-compact">
          <h2 className="section-title" style={{ textAlign: "center" }}>
            About Me
          </h2>

          <div className="section-text" style={{ textAlign: "center" }}>
            <p>
              I am <strong>Dilshod Boymurodov</strong>, a Web developer.
              I was born on October 6, 2009 in Zjarkurgan, Surkhandarya,
              Uzbekistan. My main profession is programming.
            </p>

            <p>
              I am interested in digital technology and always try to learn
              new things that will benefit humanity.
            </p>
          </div>

          <div className="about-details" style={{ textAlign: "center" }}>
            <p>
              <strong>Name:</strong> Dilshod Boymurodov
            </p>
            <p>
              <strong>Tel:</strong> +998 94 214 50-09
            </p>
            <p>
              <strong>Age:</strong> 17
            </p>
            <p>
              <strong>From:</strong> Uzbekistan, Surxondaryo
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

/* ---------- About ---------- */

function AboutPage() {
  return (
    <div className="about-section">
      <section className="section">
        <h2 className="section-title">About Me</h2>

        <div className="section-text">
          <p>
            I am <strong>Dilshod Boymurodov</strong>, a Web developer.
            I was born on October 6, 2009 in Zjarkurgan, Surkhandarya,
            Uzbekistan. My main profession is programming.
          </p>

          <p>
            I am interested in digital technology and always try to learn
            new things that will benefit humanity.
          </p>
        </div>

        <div className="about-details">
          <p>
            <strong>Name:</strong> Dilshod Boymurodov
          </p>
          <p>
            <strong>Tel:</strong> +998 94 214 50-09
          </p>
          <p>
            <strong>Age:</strong> 17
          </p>
          <p>
            <strong>From:</strong> Uzbekistan, Surxondaryo
          </p>
        </div>
      </section>
    </div>
  );
}

/* ---------- Skills ---------- */

function SkillsPage() {
  return (
    <section className="section">
      <h2 className="section-title">Skills</h2>

      <div className="skill-groups">
        {SKILL_GROUPS.map((g) => (
          <div key={g.title} className="card">
            <h3 className="card-title">{g.title}</h3>

            <div className="tags">
              {g.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */

function ProjectsPage() {
  return (
    <section className="section">
      <h2 className="section-title">Projects</h2>

      <div className="projects">
        {PROJECTS.map((p) => (
          <a
            key={p.name}
            href={p.link}
            className="card project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-head">
              <div className="project-name">
                <h3>{p.name}</h3>
                {p.featured && <span className="featured">Featured</span>}
              </div>

              <ArrowUpRight size={18} className="project-arrow" />
            </div>

            <p className="project-desc">{p.description}</p>

            <div className="tags">
              {p.tech.map((t) => (
                <span key={t} className="tag tag-sm">
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ---------- Achievements ---------- */

function AchievementsPage() {
  return (
    <section className="section">
      <h2 className="section-title">Achievements</h2>

      <p className="achievements-sub">
        Certificates and results that confirm my skills.
      </p>

      <div className="achievements">
        {ACHIEVEMENTS.map((a) => (
          <div key={a.title} className="card achievement-card">
            <a
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              className="achievement-img-link"
            >
              <img
                src={a.image}
                alt={`${a.title} from ${a.issuer}`}
                className="achievement-img"
              />
            </a>

            <div className="achievement-body">
              <div className="achievement-head">
                <Award size={18} className="achievement-icon" />
                <h3>{a.title}</h3>
              </div>

              <div className="tags">
                <span className="tag tag-sm">{a.issuer}</span>
                <span className="tag tag-sm">{a.date}</span>
                <span className="featured">{a.result}</span>
              </div>

              <p className="project-desc">{a.description}</p>

              <a
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-amber achievement-btn"
              >
                View certificate <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

function ContactPage() {
  return (
    <section className="section contact">
      <h2 className="section-title">Contact</h2>

      <p className="contact-sub">
        Have a project? Let's build it together.
      </p>

      <a
        href="mailto:dilshodboymurodovv02@gmail.com"
        className="btn-amber btn-lg"
      >
        <Mail size={16} />
        dilshodboymurodovv02@gmail.com
      </a>

      <div className="socials">
        {SOCIALS.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </section>
  );
}