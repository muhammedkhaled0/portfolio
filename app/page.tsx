'use client';

import { useEffect, useState } from 'react';
import type { IconType } from 'react-icons';
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLaptopCode,
  FaLinkedin,
  FaReact,
} from 'react-icons/fa';
import { BsTerminalFill } from 'react-icons/bs';
import { FiGitBranch, FiLayers, FiMonitor, FiPenTool } from 'react-icons/fi';
import {
  HiArrowUpRight,
  HiMiniSparkles,
  HiOutlineArrowSmallDown,
  HiOutlineCpuChip,
  HiOutlineRocketLaunch,
  HiOutlineSquares2X2,
} from 'react-icons/hi2';
import {
  MdOutlineComputer,
  MdOutlineDataObject,
  MdOutlineDesignServices,
  MdOutlineSchool,
} from 'react-icons/md';
import {
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVscodium,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

type NavLink = {
  label: string;
  href: string;
};

type ExperienceItem = {
  date: string;
  title: string;
  company: string;
  desc: string;
};

type FormationItem = {
  title: string;
  platform: string;
  hours: string;
  color: string;
  Icon: IconType;
};

type SocialItem = {
  label: string;
  href: string;
  color: string;
  Icon: IconType;
};

type ServiceItem = {
  title: string;
  desc: string;
  accent: string;
  glow: string;
  Icon: IconType;
};

type StatItem = {
  value: string;
  label: string;
  helper: string;
  Icon: IconType;
};

type StackItem = {
  name: string;
  accent: string;
  Icon: IconType;
};

type ProjectItem = {
  title: string;
  url: string;
  summary: string;
  stack: string[];
  accent: string;
  Icon: IconType;
};

type ToolItem = {
  name: string;
  description: string;
  color: string;
  Icon: IconType;
};

const ROLE_WORDS = [
  'Frontend Developer',
  'React Developer',
  'Next.js Builder',
];

const TICKER_ITEMS = [
  'REACT',
  'NEXT.JS',
  'TYPESCRIPT',
  'UI MOTION',
  'RESPONSIVE SYSTEMS',
  'COMPONENT DESIGN',
  'FIGMA TO CODE',
  'CLEAN ARCHITECTURE',
  'GIT WORKFLOW',
  'PERFORMANCE',
];

const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Formation', href: '#formation' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const EXPERIENCE: ExperienceItem[] = [
  {
    date: 'Oct 2025 - Present',
    title: 'Head & Frontend Instructor',
    company: 'ConnectX | Egypt',
    desc: 'Teaching and mentoring students in frontend development, leading practical projects, and helping learners turn design ideas into scalable web applications.',
  },
  {
    date: 'Jun 2025 - Jan 2026',
    title: 'Frontend Developer Trainee',
    company: 'Route Academy | Egypt',
    desc: 'Built responsive interfaces with React, Next.js, and TypeScript, with focus on reusable components, API integration, and cleaner frontend structure.',
  },
];

const FORMATION: FormationItem[] = [
  {
    title: 'Bachelor of Computer Science',
    platform: 'Ain Shams University',
    hours: 'GPA: 3.5',
    color: '#6aa7ff',
    Icon: MdOutlineSchool,
  },
  {
    title: 'Frontend Development Diploma',
    platform: 'Route Academy',
    hours: '6 Months',
    color: '#62e2a2',
    Icon: MdOutlineComputer,
  },
  {
    title: 'React & Next.js Advanced Training',
    platform: 'Self Learning + Projects',
    hours: 'Hands-on',
    color: '#9e7cff',
    Icon: VscCode,
  },
  {
    title: 'UI/UX Design Fundamentals',
    platform: 'Figma + Online Courses',
    hours: '3 Months',
    color: '#ff7ab8',
    Icon: MdOutlineDesignServices,
  },
  {
    title: 'Problem Solving & Data Structures',
    platform: 'University + Practice',
    hours: 'Ongoing',
    color: '#ff9d58',
    Icon: MdOutlineDataObject,
  },
  {
    title: 'Version Control & Collaboration',
    platform: 'Git & GitHub',
    hours: 'Daily Use',
    color: '#48d4c8',
    Icon: FiGitBranch,
  },
];

const SOCIALS: SocialItem[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/elsiny',
    color: '#0a66c2',
    Icon: FaLinkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/muhammedkhaled0',
    color: '#e6edf3',
    Icon: FaGithub,
  },
  {
    label: 'E-mail',
    href: 'mailto:muhammedkhaled7882@gmail.com',
    color: '#ea4335',
    Icon: FaEnvelope,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/m.k_elsiny',
    color: '#e1306c',
    Icon: FaInstagram,
  },
];

const SERVICES: ServiceItem[] = [
  {
    title: 'Frontend Engineering',
    desc: 'Readable components, scalable structure, and clean implementation for modern React and Next.js interfaces.',
    accent: '#6be3b8',
    glow: 'rgba(107, 227, 184, 0.18)',
    Icon: FiMonitor,
  },
  {
    title: 'Interactive UI Motion',
    desc: 'Subtle movement, reveal animations, and hover feedback that makes the experience feel more alive and polished.',
    accent: '#78a9ff',
    glow: 'rgba(120, 169, 255, 0.18)',
    Icon: HiMiniSparkles,
  },
  {
    title: 'Design To Code',
    desc: 'Turning visual ideas and Figma references into responsive layouts with strong spacing, hierarchy, and detail.',
    accent: '#ff8db4',
    glow: 'rgba(255, 141, 180, 0.18)',
    Icon: FiPenTool,
  },
];

const STATS: StatItem[] = [
  {
    value: '03',
    label: 'Featured Projects',
    helper: 'Live demos included',
    Icon: HiOutlineRocketLaunch,
  },
  {
    value: '02',
    label: 'Professional Roles',
    helper: 'Teaching and hands-on work',
    Icon: HiOutlineCpuChip,
  },
  {
    value: '06',
    label: 'Formation Blocks',
    helper: 'Focused learning tracks',
    Icon: HiOutlineSquares2X2,
  },
];

const STACK_ITEMS: StackItem[] = [
  { name: 'React', accent: '#61dafb', Icon: FaReact },
  { name: 'Next.js', accent: '#ffffff', Icon: SiNextdotjs },
  { name: 'TypeScript', accent: '#3178c6', Icon: SiTypescript },
  { name: 'JavaScript', accent: '#f7df1e', Icon: SiJavascript },
  { name: 'Tailwind', accent: '#38bdf8', Icon: SiTailwindcss },
  { name: 'HTML5', accent: '#e34f26', Icon: SiHtml5 },
  // { name: 'CSS3', accent: '#1572b6', Icon: SiCss3 },
  { name: 'Git', accent: '#f05032', Icon: SiGit },
];

const PROJECTS: ProjectItem[] = [
  {
    title: 'Social App',
    url: 'https://route-posts-opal.vercel.app/',
    summary: 'A social experience focused on feed interactions, auth flows, and responsive layouts with a modern React-based feel.',
    stack: ['React', 'API', 'Responsive UI'],
    accent: 'linear-gradient(135deg, rgba(97, 218, 251, 0.26), rgba(8, 37, 53, 0.08))',
    Icon: FaReact,
  },
  {
    title: 'E-Commerce',
    url: 'https://e-commerce-five-iota-63.vercel.app/',
    summary: 'Product browsing, structured sections, and a cleaner store experience built around reusable frontend building blocks.',
    stack: ['Next.js', 'TypeScript', 'Reusable Components'],
    accent: 'linear-gradient(135deg, rgba(120, 169, 255, 0.28), rgba(19, 33, 56, 0.06))',
    Icon: FiLayers,
  },
  {
    title: 'Weather App',
    url: 'https://muhammedkhaled0.github.io/Weather/',
    summary: 'A lightweight UI for weather information with focus on fast interaction, clean styling, and clear visual hierarchy.',
    stack: ['JavaScript', 'API', 'UI States'],
    accent: 'linear-gradient(135deg, rgba(255, 160, 97, 0.28), rgba(60, 35, 16, 0.08))',
    Icon: HiOutlineCpuChip,
  },
];

const APP_ICONS: ToolItem[] = [
  {
    name: 'VSCodium',
    description: 'Code Editor',
    color: '#007acc',
    Icon: SiVscodium,
  },
  {
    name: 'Figma',
    description: 'Design Tool',
    color: '#f24e1e',
    Icon: SiFigma,
  },
  {
    name: 'GitHub',
    description: 'Version Control',
    color: '#e6edf3',
    Icon: FaGithub,
  },
  {
    name: 'Terminal',
    description: 'Command Line',
    color: '#58ffba',
    Icon: BsTerminalFill,
  },
  {
    name: 'Vercel',
    description: 'Deployment',
    color: '#ffffff',
    Icon: SiVercel,
  },
];

function useTypingEffect(
  words: string[],
  typingSpeed = 95,
  deletingSpeed = 50,
  pause = 1500,
) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const delay = !isDeleting && displayed === currentWord
      ? pause
      : isDeleting
        ? deletingSpeed
        : typingSpeed;

    const timer = window.setTimeout(() => {
      if (!isDeleting) {
        if (displayed === currentWord) {
          setIsDeleting(true);
          return;
        }

        setDisplayed(currentWord.slice(0, displayed.length + 1));
        return;
      }

      if (displayed === '') {
        setIsDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
        return;
      }

      setDisplayed(currentWord.slice(0, displayed.length - 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deletingSpeed, displayed, isDeleting, pause, typingSpeed, wordIndex, words]);

  return displayed;
}

function usePageMotion(setActiveSection: (sectionId: string) => void) {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealNodes = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    );
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));

    if (reduceMotion) {
      revealNodes.forEach((node) => {
        node.dataset.visible = 'true';
      });
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || reduceMotion) {
            entry.target.setAttribute('data-visible', 'true');
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    );

    if (!reduceMotion) {
      revealNodes.forEach((node) => revealObserver.observe(node));
    }

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: [0.2, 0.4, 0.65], rootMargin: '-42% 0px -42% 0px' },
    );

    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, [setActiveSection]);
}

export default function Home() {
  const [activeNav, setActiveNav] = useState('about');
  const typedRole = useTypingEffect(ROLE_WORDS);
  const tickerLoop = [...TICKER_ITEMS, ...TICKER_ITEMS];
  const currentYear = new Date().getFullYear();

  usePageMotion(setActiveNav);

  return (
    <main className="page-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="ambient ambient-c" />
      <div className="grid-overlay" />

      <nav className="topbar">
        <a className="brand" href="#top" aria-label="Go to top">
          MR<span>/</span>SINY
        </a>

        <div className="topbar-links">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '');

            return (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link${activeNav === sectionId ? ' active' : ''}`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </nav>

      <section id="top" className="hero-section">
        <div className="shell hero-grid">
          <div className="hero-copy" data-reveal>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Available for frontend opportunities
            </div>

            <p className="hero-kicker">Hello, I&apos;m</p>
            <h1 className="hero-title">Muhammed Elsiny</h1>
            <h2 className="hero-role">
              {typedRole}
              <span className="typing-caret" />
            </h2>

            <p className="hero-text">
              Frontend developer focused on building elegant, scalable web apps
              with React, Next.js, and TypeScript. I care about clean structure,
              strong UI presence, and interfaces that feel smooth instead of static.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#projects">
                Explore Projects
                <HiArrowUpRight />
              </a>
              <a className="button-secondary" href="#contact">
                Let&apos;s Connect
              </a>
            </div>

            <div className="hero-metrics">
              <div className="metric-card">
                <strong>React</strong>
                <span>Modern component flow</span>
              </div>
              <div className="metric-card">
                <strong>Next.js</strong>
                <span>Fast, structured experiences</span>
              </div>
              <div className="metric-card">
                <strong>UI Motion</strong>
                <span>Cleaner interaction feel</span>
              </div>
            </div>

            <div className="hero-socials">
              {SOCIALS.map(({ label, href, Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hero-social"
                >
                  <Icon color={color} />
                </a>
              ))}
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="visual-window">
              <div className="window-head">
                <span />
                <span />
                <span />
              </div>

              <div className="profile-stage">
                <div className="profile-badge">
                  <HiMiniSparkles />
                  Clean UI
                </div>

                <div className="photo-frame">
                  <div className="photo-fallback">ME</div>
                  <img
                    src="/myImg.jpg"
                    alt="Muhammed Elsiny"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                <div className="profile-note">
                  <strong>Currently</strong>
                  <span>Head & Frontend Instructor at ConnectX</span>
                </div>
              </div>

              <div className="code-panel">
                <div className="code-line">
                  <span className="code-accent">const</span> focus = [
                  <span className="code-string">&apos;React&apos;</span>,
                  <span className="code-string">&apos;Next.js&apos;</span>,
                  <span className="code-string">&apos;Motion&apos;</span>];
                </div>
                <div className="code-line">
                  <span className="code-accent">build</span>(
                  <span className="code-string">&apos;clean experiences&apos;</span>)
                </div>
              </div>
            </div>

            <div className="floating-chip chip-a">
              <FaReact />
              Responsive UI
            </div>
            <div className="floating-chip chip-b">
              <SiTypescript />
              Typed Components
            </div>
            <div className="floating-chip chip-c">
              <SiFigma />
              Design to Code
            </div>
          </div>
        </div>

        <a className="scroll-hint" href="#about" aria-label="Scroll to about section">
          <HiOutlineArrowSmallDown />
          Scroll
        </a>
      </section>

      <div className="ticker-wrap">
        <div className="ticker-track">
          {tickerLoop.map((item, index) => (
            <span key={`${item}-${index}`} className="ticker-item">
              {item}
            </span>
          ))}
        </div>
      </div>

      <section id="about" className="section-block">
        <div className="shell">
          <div className="section-head" data-reveal>
            <span className="section-kicker">About</span>
            <h2 className="section-title">A cleaner portfolio with more character.</h2>
            <p className="section-text">
              I enjoy building interfaces that feel crisp, calm, and intentional.
              The goal is not just to make something work, but to make it feel well-crafted.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card panel" data-reveal>
              <div className="card-icon">
                <FaLaptopCode />
              </div>
              <h3>Frontend mindset</h3>
              <p>
                I work on responsive interfaces, reusable components, and layouts
                that stay solid across different screen sizes and project stages.
              </p>
            </div>

            <div className="about-card panel" data-reveal>
              <div className="card-icon">
                <FiLayers />
              </div>
              <h3>Structure first</h3>
              <p>
                Clean hierarchy, spacing, and content rhythm matter as much as
                the code itself. Good UI starts with good decisions.
              </p>
            </div>

            <div className="about-card panel" data-reveal>
              <div className="card-icon">
                <HiMiniSparkles />
              </div>
              <h3>Polish matters</h3>
              <p>
                Hover states, reveal motion, and visual depth can turn a normal
                portfolio into something that feels much more premium.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="highlights" className="section-block section-alt">
        <div className="shell">
          <div className="section-head" data-reveal>
            <span className="section-kicker">Highlights</span>
            <h2 className="section-title">More sections, but each one earns its place.</h2>
          </div>

          <div className="stats-grid">
            {STATS.map(({ value, label, helper, Icon }, index) => (
              <div
                key={label}
                className="stat-card panel"
                data-reveal
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <Icon className="stat-icon" />
                <strong>{value}</strong>
                <span>{label}</span>
                <small>{helper}</small>
              </div>
            ))}
          </div>

          <div className="services-grid">
            {SERVICES.map(({ title, desc, accent, glow, Icon }, index) => (
              <article
                key={title}
                className="service-card panel"
                data-reveal
                style={{
                  borderColor: `${accent}33`,
                  boxShadow: `0 28px 60px ${glow}`,
                  transitionDelay: `${index * 0.08}s`,
                }}
              >
                <div className="service-icon" style={{ background: `${accent}22`, color: accent }}>
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="section-block">
        <div className="shell">
          <div className="section-head" data-reveal>
            <span className="section-kicker">Core Stack</span>
            <h2 className="section-title">Icons instead of emoji, and a stronger visual system.</h2>
            <p className="section-text">
              The tools below shape the way I build, from code structure and design
              handoff to deployment and clean delivery.
            </p>
          </div>

          <div className="stack-grid">
            {STACK_ITEMS.map(({ name, accent, Icon }, index) => (
              <div
                key={name}
                className="stack-card panel"
                data-reveal
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="stack-icon" style={{ color: accent }}>
                  <Icon />
                </div>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section-block section-alt">
        <div className="shell">
          <div className="section-head" data-reveal>
            <span className="section-kicker">Experience</span>
            <h2 className="section-title">Real work, teaching, and hands-on product practice.</h2>
          </div>

          <div className="timeline">
            {EXPERIENCE.map((item, index) => (
              <article
                key={item.title}
                className="timeline-item panel"
                data-reveal
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="timeline-line" />
                <div className="timeline-date">{item.date}</div>
                <h3>{item.title}</h3>
                <div className="timeline-company">
                  <span>{item.company}</span>
                  <HiArrowUpRight />
                </div>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="formation" className="section-block">
        <div className="shell">
          <div className="section-head" data-reveal>
            <span className="section-kicker">Formation</span>
            <h2 className="section-title">Learning background with clearer presentation.</h2>
          </div>

          <div className="formation-grid">
            {FORMATION.map(({ title, platform, hours, color, Icon }, index) => (
              <article
                key={title}
                className="formation-card panel"
                data-reveal
                style={{ transitionDelay: `${index * 0.06}s` }}
              >
                <div className="formation-icon" style={{ background: `${color}22`, color }}>
                  <Icon />
                </div>
                <div className="formation-copy">
                  <strong>{title}</strong>
                  <span>{platform}</span>
                </div>
                <small>{hours}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-block section-alt">
        <div className="shell">
          <div className="section-head" data-reveal>
            <span className="section-kicker">Projects</span>
            <h2 className="section-title">Featured work with stronger cards and hover depth.</h2>
            <p className="section-text">
            </p>
          </div>

          <div className="projects-grid">
            {PROJECTS.map(({ title, url, summary, stack, accent, Icon }, index) => (
              <a
                key={title}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card panel"
                data-reveal
                style={{
                  background: accent,
                  transitionDelay: `${index * 0.08}s`,
                }}
              >
                <div className="project-top">
                  <div className="project-badge">
                    <Icon />
                  </div>
                  <HiArrowUpRight />
                </div>
                <h3>{title}</h3>
                <p>{summary}</p>
                <div className="project-tags">
                  {stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-block">
        <div className="shell">
          <div className="contact-layout">
            <div className="contact-panel panel" data-reveal>
              <span className="section-kicker">Contact</span>
              <h2 className="section-title">Let&apos;s build something calmer, sharper, and more premium.</h2>
     

              <div className="contact-actions">
                <a className="button-primary" href="mailto:muhammedkhaled7882@gmail.com">
                  Email Me
                  <HiArrowUpRight />
                </a>
                <a className="button-secondary" href="https://github.com/muhammedkhaled0" target="_blank" rel="noopener noreferrer">
                  View GitHub
                </a>
              </div>
            </div>

            <div className="contact-side">
              <div className="social-grid">
                {SOCIALS.map(({ label, href, Icon, color }, index) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-card panel"
                    data-reveal
                    style={{ transitionDelay: `${index * 0.06}s` }}
                  >
                    <div className="social-left">
                      <div className="social-icon" style={{ color }}>
                        <Icon />
                      </div>
                      <span>{label}</span>
                    </div>
                    <HiArrowUpRight />
                  </a>
                ))}
              </div>

              <div className="tools-panel panel" data-reveal>
                <h3>Apps &amp; Tools I Use</h3>
                <div className="tools-grid">
                  {APP_ICONS.map(({ name, description, color, Icon }) => (
                    <div key={name} className="tool-card">
                      <Icon color={color} />
                      <strong>{name}</strong>
                      <span>{description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        ©{currentYear} Dev Portfolio. Crafted with React energy, cleaner motion, and stronger visual rhythm.
      </footer>
    </main>
  );
}
