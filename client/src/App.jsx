import { useEffect, useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, Code2, Github,
  Globe2, Layers3, Linkedin, Mail, Menu, MessageCircle, Send, Sparkles,
  Terminal, X, Zap
} from 'lucide-react';

const fallbackProjects = [
  {
    id: 1, number: '01', title: 'Algorithm Visualizer',
    category: 'JAVA · DATA STRUCTURES',
    description: 'An educational tool concept for exploring how common data structures and algorithms behave.',
    tags: ['Java', 'Algorithms', 'OOP'], accent: 'violet',
    github_url: 'https://github.com/', demo_url: ''
  },
  {
    id: 2, number: '02', title: 'Business Dashboard',
    category: 'WEB APP · ANALYTICS',
    description: 'A clean dashboard concept for tracking key business metrics and turning raw numbers into clear actions.',
    tags: ['React', 'UI Design', 'API'], accent: 'lime',
    github_url: 'https://github.com/', demo_url: ''
  },
  {
    id: 3, number: '03', title: 'Client Contact API',
    category: 'BACKEND · DATABASE',
    description: 'A REST API that validates incoming contact requests and stores them persistently in a database.',
    tags: ['Node.js', 'Express', 'SQLite'], accent: 'blue',
    github_url: 'https://github.com/', demo_url: ''
  }
];

const skillGroups = [
  { title: 'Languages', items: ['Java', 'JavaScript', 'HTML', 'CSS'] },
  { title: 'Web development', items: ['React', 'Node.js', 'Express', 'REST APIs'] },
  { title: 'Core concepts', items: ['Data structures', 'OOP', 'Problem solving', 'SQL basics'] }
];

function Brand() {
  return <a className="brand" href="#home" aria-label="DevFolio home"><span className="brand-mark">m.</span><span>MOHAMED<span className="brand-muted">/DEV</span></span></a>;
}

function App() {
  const [projects, setProjects] = useState(fallbackProjects);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formState, setFormState] = useState({ status: 'idle', message: '' });
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.ok ? res.json() : Promise.reject(new Error('API unavailable')))
      .then((data) => { if (Array.isArray(data.projects) && data.projects.length) setProjects(data.projects); })
      .catch(() => {});
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const updateField = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  async function handleSubmit(event) {
    event.preventDefault();
    setFormState({ status: 'loading', message: '' });
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Could not send your message.');
      setForm({ name: '', email: '', message: '' });
      setFormState({ status: 'success', message: 'Message saved successfully. Thanks for reaching out!' });
    } catch (error) {
      setFormState({
        status: 'error',
        message: error.message === 'Failed to fetch'
          ? 'The backend is not running yet. Start the app with npm run dev.'
          : error.message
      });
    }
  }

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="topbar">
        <div className="container nav-wrap">
          <Brand />
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR SELECT FREELANCE PROJECTS</div>
            <h1>I turn ideas<br />into <span className="gradient-text">digital things.</span></h1>
            <p className="hero-description">I'm Mohamed Atya — a Computer Science student and aspiring full-stack developer who enjoys programming, solving problems, and building useful projects.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-quiet" href="#contact"><Mail size={17} /> Contact me</a>
            </div>
            <div className="hero-meta">
              <div className="meta-item"><span className="meta-number">01</span><span>Curious by nature</span></div>
              <div className="meta-item"><span className="meta-number">02</span><span>Built to keep learning</span></div>
            </div>
          </div>
          <div className="hero-visual" aria-label="Decorative code editor illustration">
            <div className="visual-orbit orbit-a" />
            <div className="visual-orbit orbit-b" />
            <div className="code-window">
              <div className="window-top"><div className="window-dots"><i /><i /><i /></div><span>developer.js</span><span className="window-lock"><Terminal size={14} /></span></div>
              <div className="code-body">
                <div className="code-line"><span className="line-no">01</span><span><b className="code-purple">const</b> developer = {'{'}</span></div>
                <div className="code-line indent"><span className="line-no">02</span><span><em>name</em>: <b className="code-green">'Mohamed Atya'</b>,</span></div>
                <div className="code-line indent"><span className="line-no">03</span><span><em>focus</em>: <b className="code-green">'Full-stack'</b>,</span></div>
                <div className="code-line indent"><span className="line-no">04</span><span><em>mindset</em>: <b className="code-green">'Always learning'</b>,</span></div>
                <div className="code-line indent"><span className="line-no">05</span><span><em>coffee</em>: <b className="code-orange">true</b></span></div>
                <div className="code-line"><span className="line-no">06</span><span>{'}'};</span></div>
                <div className="code-gap" />
                <div className="code-line"><span className="line-no">07</span><span><b className="code-purple">function</b> <b className="code-blue">buildSomething</b>() {'{'}</span></div>
                <div className="code-line indent"><span className="line-no">08</span><span><b className="code-purple">return</b> <b className="code-green">'Ideas → Impact'</b>;</span></div>
                <div className="code-line"><span className="line-no">09</span><span>{'}'}</span></div>
                <div className="code-cursor" />
              </div>
              <div className="window-bottom"><span><span className="tiny-green" /> All systems curious</span><span>UTF-8&nbsp;&nbsp; JavaScript</span></div>
            </div>
            <div className="floating-chip chip-top"><Code2 size={16} /><span>Clean code</span></div>
            <div className="floating-chip chip-bottom"><Sparkles size={16} /><span>Big ideas, built small</span></div>
          </div>
          <a className="scroll-cue" href="#work"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="ticker" aria-label="Areas of interest"><div className="ticker-track">
          {['FRONTEND DEVELOPMENT', '✳', 'BACKEND SYSTEMS', '✳', 'PROBLEM SOLVING', '✳', 'BUILDING PROJECTS', '✳', 'FRONTEND DEVELOPMENT', '✳', 'BACKEND SYSTEMS', '✳'].map((item, i) => <span key={i} className={item === '✳' ? 'ticker-star' : ''}>{item}</span>)}
        </div></section>

        <section className="section container" id="work">
          <div className="section-heading">
            <div><div className="section-kicker">01 / SELECTED WORK</div><h2>Ideas in <span className="gradient-text">progress.</span></h2></div>
            <p>Some projects I've built or am developing to strengthen my skills. Each one is an opportunity to learn by making.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => <article className={`project-card accent-${project.accent || ['violet','lime','blue'][index % 3]}`} key={project.id || project.title}>
              <div className="project-art">
                <div className="art-top"><span>{project.number || `0${index + 1}`}</span><span className="art-type">{project.category || 'DEVELOPMENT PROJECT'}</span></div>
                {index % 3 === 0 ? <div className="algorithm-art"><div className="algo-node">A</div><div className="algo-line" /><div className="algo-node active">B</div><div className="algo-line" /><div className="algo-node">C</div><div className="algo-bars"><i /><i /><i /><i /><i /><i /><i /></div></div>
                  : index % 3 === 1 ? <div className="dashboard-art"><div className="dash-label">PROJECT OVERVIEW</div><div className="dash-value">+28.4% <span>↗</span></div><div className="dash-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="dash-footer"><span /><span /><span /></div></div>
                  : <div className="api-art"><span className="api-method">POST</span><span className="api-path">/api/contact</span><div className="api-line"><i /><i /><i /></div><div className="api-response"><Check size={14} /> 201 CREATED</div></div>}
                <a className="project-arrow" href={project.github_url || 'https://github.com/'} target="_blank" rel="noreferrer" aria-label={`Open GitHub for ${project.title}`}><ArrowUpRight size={19} /></a>
              </div>
              <div className="project-content"><div className="project-title-row"><h3>{project.title}</h3><span className="project-index">{project.number || `0${index + 1}`}</span></div><p>{project.description}</p><div className="tag-list">{(project.tags || []).map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href={project.github_url || 'https://github.com/'} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>{project.demo_url && <a href={project.demo_url} target="_blank" rel="noreferrer">Live demo <Globe2 size={14} /></a>}</div></div>
            </article>)}
          </div>
          <div className="project-note"><Sparkles size={16} /><span>Portfolio note: replace sample project links with your own repositories before sharing this site.</span></div>
        </section>

        <section className="about-section" id="about"><div className="container about-grid">
          <div className="about-left"><div className="section-kicker">02 / A LITTLE ABOUT ME</div><h2>Learning the craft.<br /><span className="gradient-text">Building the future.</span></h2><div className="about-stamp"><Layers3 size={22} /><span>Curiosity<br />in every layer.</span></div></div>
          <div className="about-right"><p className="about-lead">I'm a third-year Computer Science student interested in how thoughtful software can solve everyday problems.</p><p className="muted-copy">I'm growing my skills in programming and full-stack development by building projects, learning from feedback, and improving one iteration at a time. I'm especially interested in practical work where clear communication matters as much as the code.</p><div className="about-facts"><div><span className="fact-number">01</span><span>Learn by building</span></div><div><span className="fact-number">02</span><span>Keep it user-focused</span></div><div><span className="fact-number">03</span><span>Improve every version</span></div></div></div>
        </div></section>

        <section className="section container" id="skills">
          <div className="section-heading"><div><div className="section-kicker">03 / MY TOOLKIT</div><h2>Tools for the <span className="gradient-text">job.</span></h2></div><p>My current learning toolkit. The list should reflect what I can actually use and explain, and I'll expand it as I grow.</p></div>
          <div className="skills-grid">{skillGroups.map((group, i) => <article className="skill-card" key={group.title}><div className="skill-card-head"><span className="skill-number">0{i + 1}</span>{i === 0 ? <Terminal /> : i === 1 ? <Globe2 /> : <Zap />}</div><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div>
        </section>

        <section className="process-section"><div className="container process-inner"><div className="section-kicker">04 / HOW I WORK</div><h2>Good work starts with <span className="gradient-text">good questions.</span></h2><div className="process-grid"><div><span className="process-no">01</span><h3>Understand</h3><p>Clarify the goal, audience, requirements, and what success should look like.</p></div><div><span className="process-no">02</span><h3>Build</h3><p>Break the problem into manageable steps and create a useful first version.</p></div><div><span className="process-no">03</span><h3>Refine</h3><p>Test, listen to feedback, fix issues, and polish the experience.</p></div></div></div></section>

        <section className="contact-section container" id="contact"><div className="contact-panel"><div className="contact-copy"><div className="section-kicker">05 / HAVE A PROJECT?</div><h2>Let's make<br />something <span className="gradient-text">useful.</span></h2><p>Have an idea, a small business challenge, or a project you'd like to discuss? Send me a message and let's talk about it.</p><a className="contact-email" href="mailto:hello@example.com"><Mail size={17} /> hello@example.com <ArrowUpRight size={15} /></a><div className="contact-socials"><a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a><a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a></div></div>
          <form className="contact-form" onSubmit={handleSubmit}><div className="form-heading"><MessageCircle size={18} /><span>Send a message</span></div><label>Your name<input name="name" value={form.name} onChange={updateField} placeholder="Jane Smith" minLength="2" maxLength="80" required /></label><label>Email address<input name="email" type="email" value={form.email} onChange={updateField} placeholder="jane@company.com" maxLength="254" required /></label><label>What are you thinking about?<textarea name="message" value={form.message} onChange={updateField} placeholder="Tell me a little about your idea..." minLength="10" maxLength="3000" rows="4" required /></label><button className="button button-primary submit-button" type="submit" disabled={formState.status === 'loading'}>{formState.status === 'loading' ? 'Sending...' : 'Send message'} <Send size={16} /></button>{formState.message && <div className={`form-feedback ${formState.status}`} role="status">{formState.status === 'success' && <Check size={15} />}{formState.message}</div>}<p className="form-privacy">Your message is submitted to this portfolio's backend.</p></form>
        </div></section>
      </main>

      <footer className="footer"><div className="container footer-inner"><Brand /><span>Designed with intention. Built while learning. © {year}.</span><a href="#home">Back to top <ArrowRight size={14} /></a></div></footer>
    </div>
  );
}

export default App;
