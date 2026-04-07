'use client';

import { useEffect, useState } from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
} from 'react-icons/fa';
import {
  SiVscodium,
  SiFigma,
  SiVercel,
} from 'react-icons/si';
import {
  HiArrowUpRight,
} from 'react-icons/hi2';
import {
  BsTerminalFill,
} from 'react-icons/bs';
import {
  MdOutlineSchool,
  MdOutlineComputer,
  MdOutlineDesignServices,
  MdOutlineDataObject,
} from 'react-icons/md';
import {
  VscCode,
} from 'react-icons/vsc';
import { FiGitBranch } from 'react-icons/fi';

const TICKER_ITEMS = [
  'WEB', 'PROGRAMMING', 'DEVELOPMENT', 'JAVASCRIPT', 'CSS', 'FIGMA', 'GIT', 'HTML',
  'REACT', 'NEXT.JS', 'TYPESCRIPT', 'TAILWIND', 'UI/UX', 'RESPONSIVE',
];

const NAV_LINKS = ['About', 'Experience', 'Formation', 'Projects', 'Contact'];

const EXPERIENCE = [
  {
    date: 'Oct 2025 – Present',
    title: 'Head & Frontend Instructor',
    company: 'ConnectX | Egypt',
    desc: 'Teaching and mentoring students in frontend development including HTML, CSS, JavaScript, and responsive design. Leading real-world projects and helping students build scalable applications.',
  },
  {
    date: 'Jun 2025 – Jan 2026',
    title: 'Frontend Developer Trainee',
    company: 'Route Academy | Egypt',
    desc: 'Built real-world responsive applications using React, Next.js, and TypeScript. Focused on clean architecture, reusable components, and API integration.',
  },
];

const FORMATION = [
  {
    title: 'Bachelor of Computer Science',
    platform: 'Ain Shams University',
    hours: 'GPA: 3.5',
    color: '#3b82f6',
    Icon: MdOutlineSchool,
  },
  {
    title: 'Frontend Development Diploma',
    platform: 'Route Academy',
    hours: '6 Months',
    color: '#22c55e',
    Icon: MdOutlineComputer,
  },
  {
    title: 'React & Next.js Advanced Training',
    platform: 'Self Learning + Projects',
    hours: 'Hands-on',
    color: '#8b5cf6',
    Icon: VscCode,
  },
  {
    title: 'UI/UX Design Fundamentals',
    platform: 'Figma + Online Courses',
    hours: '3 Months',
    color: '#ec4899',
    Icon: MdOutlineDesignServices,
  },
  {
    title: 'Problem Solving & Data Structures',
    platform: 'University + Practice',
    hours: 'Ongoing',
    color: '#f97316',
    Icon: MdOutlineDataObject,
  },
  {
    title: 'Version Control & Collaboration',
    platform: 'Git & GitHub',
    hours: 'Daily Use',
    color: '#14b8a6',
    Icon: FiGitBranch,
  },
];

const SOCIALS = [
  { label: 'LinkedIn',  Icon: FaLinkedin,  href: 'https://www.linkedin.com/in/elsiny',                      color: '#0a66c2' },
  { label: 'GitHub',    Icon: FaGithub,    href: 'https://github.com/muhammedkhaled0',                       color: '#e6edf3' },
  { label: 'E-mail',    Icon: FaEnvelope,  href: 'mailto:muhammedkhaled7882@gmail.com',                      color: '#ea4335' },
  { label: 'Instagram', Icon: FaInstagram, href: 'https://www.instagram.com/m.k_elsiny',                     color: '#e1306c' },
];

const projects = [
  { title: 'Social App',  url: 'https://route-posts-opal.vercel.app/',              image: './social.png'    },
  { title: 'E-Commerce',  url: 'https://e-commerce-five-iota-63.vercel.app/',        image: './ecommerce.png' },
  { title: 'Weather App', url: 'https://muhammedkhaled0.github.io/Weather/',          image: './weather.png'   },
];

const APP_ICONS = [
  { name: 'VS Code',   Icon: SiVscodium,     description: 'Code Editor',      color: '#007acc' },
  { name: 'Figma',     Icon: SiFigma,        description: 'Design Tool',      color: '#f24e1e' },
  { name: 'GitHub',    Icon: FaGithub,       description: 'Version Control',  color: '#e6edf3' },
  { name: 'Terminal',  Icon: BsTerminalFill, description: 'Command Line',     color: '#4fffb0' },
  { name: 'Vercel',    Icon: SiVercel,       description: 'Deployment',       color: '#ffffff' },
];

function useTypingEffect(words: string[], speed = 100, pause = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIdx)); setCharIdx(c => c + 1); }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIdx)); setCharIdx(c => c - 1); }, speed / 2);
    } else {
      setDeleting(false);
      setWordIdx(w => (w + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      }),
      { threshold: 0.1 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  const [activeNav, setActiveNav] = useState('About');
  const role = useTypingEffect(['Frontend Dev', 'C++ Developer', 'React Developer', 'Next.js Dev']);
  useScrollReveal();
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>

      {/* NAVBAR */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(10,14,20,0.9)', backdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--border)',
        padding: '0 clamp(16px,5vw,60px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '60px',
      }}>
        <span style={{ fontFamily: "'Space Mono',monospace", fontWeight: 700, color: 'var(--text)', fontSize: '1.1rem' }}>
          Dev<span style={{ color: 'var(--accent)' }}>/</span>
        </span>
        <div style={{ display: 'flex', gap: 'clamp(10px,2.5vw,32px)', alignItems: 'center', flexWrap: 'wrap' }}>
          {NAV_LINKS.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className={`nav-link${activeNav === l ? ' active' : ''}`}
              onClick={() => setActiveNav(l)}
            >{l}</a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        paddingTop: '80px', minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        padding: 'clamp(40px,8vh,80px) clamp(16px,5vw,60px)',
      }}>
        <div style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'center',
          justifyContent: 'space-between', gap: '40px',
          width: '100%', maxWidth: '1200px', margin: '0 auto',
        }}>
          <div style={{ flex: 1, minWidth: '280px' }}>
            <p style={{ color: 'var(--muted)', fontFamily: "'Space Mono'" }}>Hello, I'm</p>
            <h1 style={{
              fontSize: 'clamp(2.5rem,6vw,4rem)', fontWeight: 300, margin: '10px 0',
              background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Muhammed Elsiny</h1>
            <h2 style={{ color: 'var(--accent2)', fontFamily: "'Space Mono'", minHeight: '2em' }}>
              {role} |
            </h2>
            <p style={{ marginTop: '20px', color: 'var(--muted)', lineHeight: 1.8, maxWidth: '500px' }}>
              Frontend Developer specialized in building scalable web apps using React,
              Next.js, and TypeScript. Currently Head &amp; Instructor at ConnectX.
            </p>
          </div>
          <div style={{ flex: 1, minWidth: '260px', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              border: '2px solid var(--accent)', width: '220px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Space Mono'", fontSize: '2rem', color: 'var(--accent)',
              position: 'relative', background: 'rgba(79,255,176,0.05)',
            }}>
              <img className="w-full" src="/myImg.jpg" alt="Profile Image" />
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div style={{ background: 'var(--accent)', overflow: 'hidden', padding: '13px 0', flexShrink: 0 }}>
        <div className="ticker-track">
          {doubled.map((item, i) => (
            <span key={i} style={{
              fontFamily: "'Space Mono',monospace", fontWeight: 700,
              fontSize: '0.82rem', color: 'var(--bg)',
              padding: '0 20px', whiteSpace: 'nowrap',
            }}>
              {item}<span style={{ marginLeft: '20px', opacity: 0.3 }}>/</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" style={{ padding: 'clamp(60px,10vh,100px) clamp(16px,5vw,60px)' }}>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 'clamp(36px,6vh,64px)' }}>
          About<span>.</span>
        </h2>
        <div data-reveal style={{
          display: 'flex', gap: 'clamp(20px,4vw,60px)', alignItems: 'flex-start',
          flexWrap: 'wrap', maxWidth: '860px', margin: '0 auto',
          opacity: 0, transform: 'translateY(32px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}>
          <div style={{
            width: 'clamp(130px,20vw,195px)', height: 'clamp(155px,24vw,235px)',
            background: 'linear-gradient(135deg,var(--accent2),var(--accent))',
            borderRadius: '4px', flexShrink: 0, opacity: 0.85,
          }} />
          <div style={{ flex: 1, minWidth: '220px' }}>
            <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '16px', marginBottom: '18px' }}>
              <p style={{ color: 'var(--accent)', fontWeight: 700 }}>Web Developer</p>
              <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>transitioning to a career in technology.</p>
            </div>
            <p style={{ color: 'var(--text)', lineHeight: 1.8, marginBottom: '14px', fontSize: '0.93rem' }}>
              Currently, my focus is on learning and mastering essential web development skills.
              I have a solid foundation in <strong style={{ color: 'var(--accent)' }}>HTML</strong>,{' '}
              <strong style={{ color: 'var(--accent)' }}>CSS</strong>,{' '}
              <strong style={{ color: 'var(--accent2)' }}>Git</strong> and{' '}
              <strong style={{ color: 'var(--accent)' }}>JavaScript</strong>.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: '0.88rem' }}>
              Currently, my focus is on learning and mastering essential web development skills.
              I have a solid foundation in modern frameworks and tools, always looking for new
              challenges that push me to grow as a developer.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ padding: 'clamp(60px,10vh,100px) clamp(16px,5vw,60px)', background: 'var(--bg2)' }}>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 'clamp(36px,6vh,64px)' }}>
          Experience<span style={{ color: 'var(--accent2)' }}>.</span>
        </h2>
        <div style={{ maxWidth: '780px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '38px' }}>
          {EXPERIENCE.map((exp, i) => (
            <div key={i} data-reveal className="exp-item" style={{
              opacity: 0, transform: 'translateY(32px)',
              transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`,
            }}>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '0.7rem', color: 'var(--accent2)', marginBottom: '6px' }}>
                {exp.date}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                <h3 style={{ fontWeight: 700, fontSize: '1rem' }}>{exp.title}</h3>
                <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>| {exp.company}</span>
                <HiArrowUpRight style={{ color: 'var(--accent)', fontSize: '1rem' }} />
              </div>
              <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: '0.88rem' }}>{exp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORMATION */}
      <section id="formation" style={{ padding: 'clamp(60px,10vh,100px) clamp(16px,5vw,60px)' }}>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 'clamp(36px,6vh,64px)' }}>
          Formation<span>.</span>
        </h2>
        <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {FORMATION.map((f, i) => (
            <div key={i} data-reveal className="formation-card" style={{
              opacity: 0, transform: 'translateY(32px)',
              transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
            }}>
              <div style={{
                width: '38px', height: '38px', borderRadius: '8px',
                background: f.color, flexShrink: 0, opacity: 0.9,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <f.Icon size={20} color="#fff" />
              </div>
              <span style={{ flex: 1, fontWeight: 600, color: 'var(--text)', fontSize: '0.92rem' }}>{f.title}</span>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ color: 'var(--muted)', fontSize: '0.78rem' }}>{f.platform}</div>
                <div style={{ color: 'var(--accent2)', fontSize: '0.78rem', fontFamily: "'Space Mono',monospace" }}>{f.hours}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: 'clamp(60px,10vh,100px) clamp(16px,5vw,60px)', background: 'var(--bg2)' }}>
        <h2 className="section-title" style={{ marginBottom: 'clamp(36px,6vh,64px)', textAlign: 'center' }}>
          Projects<span style={{ color: 'var(--accent2)' }}>.</span>
        </h2>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px', maxWidth: '1200px', margin: '0 auto',
        }}>
          {projects.map((p, i) => (
            <div key={i} onClick={() => window.open(p.url, '_blank')} style={{
              cursor: 'pointer', borderRadius: '16px', overflow: 'hidden',
              position: 'relative', height: '280px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)', transition: '0.3s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.4)';
                const overlay = e.currentTarget.querySelector('.overlay') as HTMLElement;
                if (overlay) overlay.style.opacity = '1';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
                const overlay = e.currentTarget.querySelector('.overlay') as HTMLElement;
                if (overlay) overlay.style.opacity = '0';
              }}
            >
              <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="overlay" style={{
                position: 'absolute', inset: 0,
                background: 'rgba(0,0,0,0.5)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                opacity: 0, transition: '0.3s',
              }}>
                <h3 style={{ color: '#fff' }}>{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: 'clamp(60px,10vh,100px) clamp(16px,5vw,60px)' }}>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '12px' }}>
          Contact<span>.</span>
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '40px' }}>
          Contact me or follow my social media
        </p>

        {/* Social Links */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
          gap: '12px', maxWidth: '560px', margin: '0 auto 48px auto',
        }}>
          {SOCIALS.map((s, i) => (
            <a key={i} href={s.href} className="social-card" style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noopener noreferrer">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <s.Icon size={18} color={s.color} />
                <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>{s.label}</span>
              </div>
              <HiArrowUpRight style={{ color: 'var(--accent)' }} />
            </a>
          ))}
        </div>

        {/* App Icons */}
        <div style={{ marginTop: '48px' }}>
          <h3 style={{
            textAlign: 'center', fontSize: '1.2rem', marginBottom: '28px',
            color: 'var(--accent2)', fontFamily: "'Space Mono', monospace",
          }}>
            Apps &amp; Tools I Use
          </h3>
          <div style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
            gap: 'clamp(20px, 4vw, 40px)', maxWidth: '700px', margin: '0 auto',
          }}>
            {APP_ICONS.map((app, idx) => (
              <div key={idx} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
                padding: '12px 18px',
                background: 'rgba(79,255,176,0.05)',
                borderRadius: '16px',
                border: '1px solid rgba(79,255,176,0.15)',
                transition: 'all 0.3s ease', cursor: 'default', minWidth: '90px',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = 'rgba(79,255,176,0.4)';
                  e.currentTarget.style.background = 'rgba(79,255,176,0.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(79,255,176,0.15)';
                  e.currentTarget.style.background = 'rgba(79,255,176,0.05)';
                }}
              >
                <app.Icon size={32} color={app.color} />
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text)' }}>{app.name}</span>
                <span style={{ fontSize: '0.65rem', color: 'var(--muted)' }}>{app.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        textAlign: 'center', padding: '22px',
        borderTop: '1px solid var(--border)',
        color: 'var(--muted)', fontSize: '0.78rem',
        fontFamily: "'Space Mono',monospace",
      }}>
        ©2024 | Dev Portfolio
      </footer>

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-link { font-size: 0.85rem; }
        }
        @media (max-width: 480px) {
          .nav-link[href="#contact"],
          .nav-link[href="#formation"] { display: none; }
        }
      `}</style>
    </main>
  );
}