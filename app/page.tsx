'use client';

import { useEffect, useState } from 'react';

const TICKER_ITEMS = [
  'WEB', 'PROGRAMMING', 'DEVELOPMENT', 'JAVASCRIPT', 'CSS', 'FIGMA', 'GIT', 'HTML',
  'REACT', 'NEXT.JS', 'TYPESCRIPT', 'TAILWIND', 'UI/UX', 'RESPONSIVE',
];

const NAV_LINKS = ['About', 'Experience', 'Formation', 'Projects', 'Contact'];

const EXPERIENCE = [
  {
    date: 'Jan 2023 – Aug 2024',
    title: 'Senior Frontend Developer',
    company: 'TechCorp | Remote',
    desc: 'Led the development of modern React applications, implemented design systems, and mentored junior developers. Reduced bundle size by 40% through code splitting and lazy loading strategies.',
  },
  {
    date: 'Jun 2022 – Dec 2022',
    title: 'Frontend Developer',
    company: 'StartupXYZ | Hybrid',
    desc: 'Built responsive web interfaces using React and TypeScript. Collaborated closely with designers to translate Figma mockups into pixel-perfect components.',
  },
  {
    date: 'Aug 2019 – Dec 2020',
    title: 'Junior Web Developer',
    company: 'AgencyPro | On-site',
    desc: 'Developed landing pages and marketing websites for various clients using HTML, CSS, and vanilla JavaScript to create engaging user experiences.',
  },
];

const FORMATION = [
  { title: 'UI / UX Design', platform: 'Origamid', hours: '17 hours', color: '#8b5cf6' },
  { title: 'HTML & CSS', platform: 'Origamid', hours: '23 hours', color: '#f97316' },
  { title: 'CSS Flexbox & Grid', platform: 'Origamid', hours: '8 hours', color: '#3b82f6' },
  { title: 'JavaScript', platform: 'Origamid', hours: '37 hours', color: '#eab308' },
  { title: 'Aprenda a Programar com JS, HTML e CSS', platform: 'Rodrigo Branas', hours: '12 hours', color: '#f97316' },
];

const SOCIALS = [
  { label: 'LinkedIn', icon: '💼', href: '#' },
  { label: 'Instagram', icon: '📷', href: '#' },
  { label: 'GitHub', icon: '🐙', href: '#' },
  { label: 'E-mail', icon: '✉️', href: '#' },
];

// Application icons for the contact section (one per application)
const APP_ICONS = [
  { name: 'VS Code', icon: '💻', description: 'Code Editor' },
  { name: 'Figma', icon: '🎨', description: 'Design Tool' },
  { name: 'GitHub', icon: '🐙', description: 'Version Control' },
  { name: 'Terminal', icon: '⌨️', description: 'Command Line' },
  { name: 'Chrome', icon: '🌐', description: 'Browser' },
  { name: 'Slack', icon: '💬', description: 'Communication' },
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
        <div style={{ 
          display: 'flex', 
          gap: 'clamp(10px,2.5vw,32px)', 
          alignItems: 'center', 
          flexWrap: 'wrap',
        }}>
          {NAV_LINKS.map(l => (
            <a
              key={l} href={`#${l.toLowerCase()}`}
              className={`nav-link${activeNav === l ? ' active' : ''}`}
              onClick={() => setActiveNav(l)}
            >{l}</a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: '60px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{
          flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 'clamp(40px,8vh,80px) clamp(16px,5vw,60px)',
          gap: 'clamp(24px,5vw,60px)', flexWrap: 'wrap',
          flexDirection: 'column',
          textAlign: 'center',
        }}>
          {/* Two side-by-side elements instead of emoji row */}
          <div style={{
            display: 'flex',
            gap: 'clamp(30px,6vw,80px)',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 'clamp(20px,5vh,40px)',
            flexWrap: 'wrap',
          }}>
            {/* Element 1: Code Badge */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(79,255,176,0.1)',
              padding: '12px 24px',
              borderRadius: '40px',
              border: '1px solid rgba(79,255,176,0.3)',
              backdropFilter: 'blur(4px)',
            }}>
              <span style={{ fontSize: '1.8rem' }}>⚡</span>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--accent)', fontFamily: "'Space Mono',monospace" }}>ACTIVE</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}>Open for work</div>
              </div>
            </div>

            {/* Element 2: Location Badge */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(79,255,176,0.05)',
              padding: '12px 24px',
              borderRadius: '40px',
              border: '1px solid rgba(79,255,176,0.2)',
            }}>
              <span style={{ fontSize: '1.8rem' }}>🌍</span>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--accent2)', fontFamily: "'Space Mono',monospace" }}>LOCATION</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}>Remote / Worldwide</div>
              </div>
            </div>
          </div>

          {/* Code box */}
          <div style={{
            border: '2px solid var(--accent)',
            width: 'clamp(140px,18vw,200px)', height: 'clamp(140px,18vw,200px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', flexShrink: 0,
            background: 'rgba(79,255,176,0.03)',
            animation: 'fadeUp 0.6s ease both',
            margin: '0 auto',
          }}>
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 'clamp(1.4rem,3vw,2.2rem)', color: 'var(--accent)', fontWeight: 700 }}>{'</>'}</span>
            <div style={{
              position: 'absolute', bottom: '-22px', right: '-14px',
              fontFamily: "'Space Mono',monospace", fontSize: '0.8rem',
              color: 'var(--accent)', border: '1px solid var(--accent)',
              padding: '2px 8px', background: 'var(--bg)',
            }}>{'</>'}</div>
          </div>
          {/* Hero text */}
          <div style={{ animation: 'fadeUp 0.8s ease 0.2s both' }}>
            <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '6px', fontFamily: "'Space Mono',monospace" }}>Hi, I'm</p>
            <h1 style={{ fontWeight: 800, fontSize: 'clamp(2rem,6vw,3.8rem)', lineHeight: 1.05, marginBottom: '10px' }}>
              Dev<span style={{ color: 'var(--accent)' }}>.</span>
            </h1>
            <div style={{
              fontSize: 'clamp(1rem,3vw,1.6rem)', color: 'var(--accent2)',
              fontWeight: 700, fontFamily: "'Space Mono',monospace",
              minHeight: '2em', display: 'flex', alignItems: 'center',
              justifyContent: 'center',
            }}>
              {role}<span className="cursor" style={{ color: 'var(--accent)', marginLeft: '2px' }}>|</span>
            </div>
          </div>
        </div>

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
      </section>

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
                <span style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>↗</span>
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
                fontSize: '1rem',
              }}>📚</div>
              <span style={{ flex: 1, fontWeight: 600, color: 'var(--text)', fontSize: '0.92rem' }}>{f.title}</span>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ color: 'var(--muted)', fontSize: '0.78rem' }}>{f.platform}</div>
                <div style={{ color: 'var(--accent2)', fontSize: '0.78rem', fontFamily: "'Space Mono',monospace" }}>{f.hours}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS - with 3 iframes */}
      <section id="projects" style={{ padding: 'clamp(60px,10vh,100px) clamp(16px,5vw,60px)', background: 'var(--bg2)' }}>
        <h2 className="section-title" style={{ marginBottom: 'clamp(36px,6vh,64px)', textAlign: 'center' }}>
          Projects<span style={{ color: 'var(--accent2)' }}>.</span>
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(20px, 3vw, 30px)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {/* Iframe 1 */}
          <div style={{
            position: 'relative',
            width: '100%',
            paddingBottom: '56.25%', // 16:9 aspect ratio
            height: 0,
            overflow: 'hidden',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
          }}>
            <iframe
              src="https://route-posts-opal.vercel.app/"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '12px',
              }}
              title="Project 1"
              loading="lazy"
            />
          </div>

          {/* Iframe 2 */}
          <div style={{
            position: 'relative',
            width: '100%',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
          }}>
            <iframe
              src="https://e-commerce-five-iota-63.vercel.app/"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '12px',
              }}
              title="Project 2"
              loading="lazy"
            />
          </div>

          {/* Iframe 3 */}
          <div style={{
            position: 'relative',
            width: '100%',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
          }}>
            <iframe
              src="https://muhammedkhaled0.github.io/Weather/"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '12px',
              }}
              title="Project 3"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CONTACT - Now with Application Icons section */}
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
            <a key={i} href={s.href} className="social-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1rem' }}>{s.icon}</span>
                <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>{s.label}</span>
              </div>
              <span style={{ color: 'var(--accent)' }}>↗</span>
            </a>
          ))}
        </div>

        {/* Application Icons Section */}
        <div style={{ marginTop: '48px' }}>
          <h3 style={{ 
            textAlign: 'center', 
            fontSize: '1.2rem', 
            marginBottom: '28px',
            color: 'var(--accent2)',
            fontFamily: "'Space Mono', monospace"
          }}>
            Apps & Tools I Use
          </h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'clamp(20px, 4vw, 40px)',
            maxWidth: '700px',
            margin: '0 auto',
          }}>
            {APP_ICONS.map((app, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 18px',
                  background: 'rgba(79,255,176,0.05)',
                  borderRadius: '16px',
                  border: '1px solid rgba(79,255,176,0.15)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  minWidth: '90px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = 'rgba(79,255,176,0.4)';
                  e.currentTarget.style.background = 'rgba(79,255,176,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(79,255,176,0.15)';
                  e.currentTarget.style.background = 'rgba(79,255,176,0.05)';
                }}
              >
                <span style={{ fontSize: '2rem' }}>{app.icon}</span>
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
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @media (max-width: 768px) {
          .nav-link {
            font-size: 0.85rem;
          }
        }
        
        @media (max-width: 480px) {
          .nav-link[href="#contact"],
          .nav-link[href="#formation"] {
            display: none;
          }
        }
      `}</style>
    </main>
  );
}