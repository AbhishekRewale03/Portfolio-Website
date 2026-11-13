import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useScroll, useTransform } from 'motion/react'
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Clipboard,
  Cloud,
  Code2,
  Download,
  Menu,
  Server,
  X,
} from 'lucide-react'
import { siNodedotjs, siReact, siTypescript, type SimpleIcon } from 'simple-icons'
import { capabilities, experiences, navItems, projects } from './data'
import { OrbitSkills } from './components/OrbitSkills'
import { ProjectVisual } from './components/ProjectVisual'
import { Reveal } from './components/Reveal'

const email = 'abhishek.rewale.2004@gmail.com'
const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent('Portfolio inquiry')}`
const resumeUrl = `${import.meta.env.BASE_URL}abhishek-rewale-resume.pdf`
const resumeDownloadName = 'Abhishek-Rewale-Resume.pdf'
const linkedinUrl = 'https://www.linkedin.com/in/abhishek-rewale-81483a250'
const githubUrl = 'https://github.com/AbhishekRewale03'

function Logo() {
  return <a className="brand" href="#home" aria-label="Abhishek Rewale, home"><span className="monogram">AR</span><span>Abhishek Rewale</span></a>
}

function TechGlyph({ icon, label, className }: { icon: SimpleIcon; label: string; className: string }) {
  const reduce = useReducedMotion()
  const duration = className === 'tech-one' ? 6.2 : className === 'tech-two' ? 7.4 : 8.1

  return (
    <motion.div className={`floating-tech ${className}`} animate={reduce ? undefined : { y: [0, -8, 0], rotate: [0, 2, 0] }} transition={{ duration, repeat: Infinity, ease: 'easeInOut' }} aria-label={label}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d={icon.path} /></svg>
    </motion.div>
  )
}

function Header({ active }: { active: string }) {
  const [open, setOpen] = useState(false)
  const firstLink = useRef<HTMLAnchorElement>(null)
  const menuButton = useRef<HTMLButtonElement>(null)
  const menuPanel = useRef<HTMLDivElement>(null)
  const desktopNav = useRef<HTMLElement>(null)
  const desktopLinks = useRef<Array<HTMLAnchorElement | null>>([])
  const pinnedIndicator = useRef<number | null>(null)
  const indicatorX = useMotionValue(0)
  const indicatorWidth = useMotionValue(0)

  function closeMenu() {
    setOpen(false)
    window.requestAnimationFrame(() => menuButton.current?.focus())
  }

  function snapIndicator(index: number) {
    const nav = desktopNav.current
    const link = desktopLinks.current[index]
    if (!nav || !link) return
    const navRect = nav.getBoundingClientRect()
    const linkRect = link.getBoundingClientRect()
    pinnedIndicator.current = index
    indicatorX.set(linkRect.left - navRect.left)
    indicatorWidth.set(linkRect.width)
  }

  useEffect(() => {
    const nav = desktopNav.current
    if (!nav) return

    let frame = 0
    let disposed = false
    let sectionStops: number[] = []
    let linkMetrics: Array<{ x: number; width: number }> = []

    const measure = () => {
      const navRect = nav.getBoundingClientRect()
      linkMetrics = desktopLinks.current.map((link) => {
        const rect = link?.getBoundingClientRect()
        return rect ? { x: rect.left - navRect.left, width: rect.width } : { x: 0, width: 0 }
      })
      sectionStops = navItems.map((id, index) => {
        if (index === 0) return 0
        const section = document.getElementById(id)
        return section ? Math.max(0, section.getBoundingClientRect().top + window.scrollY - window.innerHeight * .38) : 0
      })
    }

    const update = () => {
      frame = 0
      if (!linkMetrics.length || !sectionStops.length) return
      const pinned = pinnedIndicator.current
      if (pinned !== null) {
        indicatorX.set(linkMetrics[pinned].x)
        indicatorWidth.set(linkMetrics[pinned].width)
        return
      }
      const y = window.scrollY
      let index = sectionStops.length - 1
      for (let next = 1; next < sectionStops.length; next += 1) {
        if (y < sectionStops[next]) {
          index = next - 1
          break
        }
      }
      const following = Math.min(index + 1, sectionStops.length - 1)
      const start = sectionStops[index]
      const end = sectionStops[following]
      const progress = end > start ? Math.min(1, Math.max(0, (y - start) / (end - start))) : 0
      const from = linkMetrics[index]
      const to = linkMetrics[following]
      indicatorX.set(from.x + (to.x - from.x) * progress)
      indicatorWidth.set(from.width + (to.width - from.width) * progress)
    }

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    const releasePin = () => {
      pinnedIndicator.current = null
      schedule()
    }
    const refresh = () => {
      if (disposed) return
      measure()
      schedule()
    }

    refresh()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', refresh)
    window.addEventListener('wheel', releasePin, { passive: true })
    window.addEventListener('touchstart', releasePin, { passive: true })
    window.addEventListener('keydown', releasePin)
    void document.fonts.ready.then(refresh)
    return () => {
      disposed = true
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', refresh)
      window.removeEventListener('wheel', releasePin)
      window.removeEventListener('touchstart', releasePin)
      window.removeEventListener('keydown', releasePin)
    }
  }, [indicatorWidth, indicatorX])

  useEffect(() => {
    if (!open) return
    firstLink.current?.focus()
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        window.requestAnimationFrame(() => menuButton.current?.focus())
        return
      }
      if (event.key !== 'Tab') return
      const focusable = menuPanel.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', handleKey)
    document.body.classList.add('menu-open')
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.classList.remove('menu-open')
    }
  }, [open])

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <nav ref={desktopNav} className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item, index) => <a ref={(link) => { desktopLinks.current[index] = link }} className={active === item ? 'active' : ''} href={`#${item}`} onClick={() => snapIndicator(index)} key={item}>{item[0].toUpperCase() + item.slice(1)}</a>)}
          <motion.span className="nav-indicator" style={{ x: indicatorX, width: indicatorWidth }} aria-hidden="true" />
        </nav>
        <a className="resume-button header-resume" href={resumeUrl} download={resumeDownloadName}><Download size={15} /> Resume</a>
        <button ref={menuButton} className="menu-button" type="button" aria-label="Open navigation" aria-controls="mobile-navigation" aria-expanded={open} onClick={() => setOpen(true)}><Menu /></button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div ref={menuPanel} id="mobile-navigation" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation" initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }} animate={{ opacity: 1, clipPath: 'inset(0)' }} exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }} transition={{ duration: .32, ease: [0.22, 1, 0.36, 1] }}>
            <div className="mobile-menu-top"><Logo /><button type="button" aria-label="Close navigation" onClick={closeMenu}><X /></button></div>
            <nav aria-label="Mobile navigation">
              {navItems.map((item, index) => <a ref={index === 0 ? firstLink : undefined} href={`#${item}`} onClick={closeMenu} key={item}><span>0{index + 1}</span>{item[0].toUpperCase() + item.slice(1)}<ArrowDownRight /></a>)}
            </nav>
            <a className="resume-button" href={resumeUrl} download={resumeDownloadName}><Download size={17}/> Download resume</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function SectionTitle({ label, title, note }: { label: string; title: string; note?: string }) {
  return <div className="section-heading"><div><span className="eyebrow">{label}</span><h2>{title}</h2></div>{note && <p>{note}</p>}</div>
}

function App() {
  const [active, setActive] = useState('home')
  const [copied, setCopied] = useState(false)
  const reduce = useReducedMotion()
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 46])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: '-35% 0px -55%', threshold: 0 })
    navItems.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  async function copyEmail() {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2200)
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header active={active} />
      <main id="main">
        <section className="hero" id="home" ref={heroRef}>
          <motion.div className="hero-art" style={{ y: heroY }} aria-hidden="true">
            <picture><source media="(min-width: 821px) and (max-width: 1100px)" srcSet="/assets/abhishek-hero-tablet.webp" type="image/webp"/><source media="(min-width: 821px) and (max-width: 1100px)" srcSet="/assets/abhishek-hero-tablet.jpg" type="image/jpeg"/><source srcSet="/assets/abhishek-hero.webp" type="image/webp"/><img src="/assets/abhishek-hero.jpg" alt="" fetchPriority="high" /></picture>
          </motion.div>
          <div className="hero-shade" aria-hidden="true" />
          <svg className="hero-orbits" viewBox="0 0 720 720" aria-hidden="true"><circle cx="430" cy="380" r="270"/><circle cx="430" cy="380" r="205"/><path d="M48 560C190 420 330 620 704 332"/></svg>
          <TechGlyph icon={siReact} label="React" className="tech-one" />
          <TechGlyph icon={siTypescript} label="TypeScript" className="tech-two" />
          <TechGlyph icon={siNodedotjs} label="Node.js" className="tech-three" />
          <div className="hero-inner container">
            <motion.div className="hero-copy" initial={reduce ? false : 'hidden'} animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: .11, delayChildren: .18 } } }}>
              <motion.p className="eyebrow hero-eyebrow" variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>Software engineer / Product builder</motion.p>
              <motion.h1 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 }, }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}>Hi, I’m Abhishek.<br/><span>Full-Stack</span><br/>Software Engineer.</motion.h1>
              <motion.p className="hero-description" variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}>I build production-ready SaaS products and modern web experiences with React, Next.js, TypeScript, Node.js, and Firebase.</motion.p>
              <motion.div className="hero-actions" variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}>
                <a className="button primary" href="#projects">View my work <ArrowDownRight size={18}/></a>
                <a className="button secondary" href={resumeUrl} download={resumeDownloadName}><Download size={17}/> Download resume</a>
              </motion.div>
              <motion.div className="tablet-hero-art" variants={{ hidden: { opacity: 0, y: 20, scale: .98 }, visible: { opacity: 1, y: 0, scale: 1 } }} aria-hidden="true">
                <picture><source srcSet="/assets/abhishek-hero-tablet.webp" type="image/webp"/><img src="/assets/abhishek-hero-tablet.jpg" alt="" /></picture>
              </motion.div>
              <motion.div className="mobile-hero-art" variants={{ hidden: { opacity: 0, y: 20, scale: .98 }, visible: { opacity: 1, y: 0, scale: 1 } }} aria-hidden="true">
                <picture><source srcSet="/assets/abhishek-hero-mobile.webp" type="image/webp"/><img src="/assets/abhishek-hero-mobile.jpg" alt="" /></picture>
              </motion.div>
              <motion.div className="proof-strip" variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}>
                <span><b>02</b> paying gyms</span><i/><span><b>03</b> featured products</span><i/><span><b>01</b> production internship</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="container about-grid">
            <Reveal className="about-visual">
              <div className="about-frame"><picture><source srcSet="/assets/abhishek-about.webp" type="image/webp"/><img src="/assets/abhishek-about.jpg" alt="Stylized portrait of Abhishek working on a laptop in a warm modern lounge" loading="lazy" /></picture><span className="image-index">AR / 01</span></div>
              <div className="education-note"><span>Education</span><strong>BSc Computer Science</strong><p>JVM Mehta College, Airoli · CGPA 8.21 · 2022–2025</p></div>
            </Reveal>
            <Reveal className="about-copy" delay={.1}>
              <span className="eyebrow">Beyond the code</span>
              <h2>I build products<br/><em>designed for real people.</em></h2>
              <p className="lead">I work across design, implementation, validation, and deployment—turning complex product requirements into interfaces that feel clear and systems that remain dependable.</p>
              <p>That means refined frontend engineering, secure backend workflows, and the practical ownership required to serve paying customers after launch.</p>
              <div className="capability-lines">
                <div><Code2/><span><b>Frontend Engineering</b><small>Responsive product interfaces with clear systems beneath them.</small></span></div>
                <div><Server/><span><b>Backend & APIs</b><small>Validated, authorized workflows designed around trust boundaries.</small></span></div>
                <div><Cloud/><span><b>Cloud, Testing & Delivery</b><small>From emulator-backed checks to dependable deployments.</small></span></div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="container">
            <Reveal><SectionTitle label="Selected technologies" title="Built on a deliberate stack." note="Tools matter when they help a product stay understandable, secure, and ready for real use." /></Reveal>
            <Reveal delay={.1}><OrbitSkills /></Reveal>
          </div>
        </section>

        <section className="experience section" id="experience">
          <div className="container">
            <Reveal><SectionTitle label="Experience" title="A practice shaped by shipping." note="Product work, production collaboration, and the responsibility that starts after release." /></Reveal>
            <div className="timeline">
              {experiences.map((experience, index) => (
                <Reveal className="timeline-entry" delay={index * .08} key={experience.role}>
                  <div className="timeline-marker"><span>0{index + 1}</span></div>
                  <div className="timeline-role"><time>{experience.period}</time><h3>{experience.role}</h3><p>{experience.company}</p></div>
                  <ul>{experience.points.map((point) => <li key={point}>{point}</li>)}</ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="container">
            <Reveal><SectionTitle label="Featured projects" title="Products, not prototypes." note="Three systems that show how I approach product engineering from interface to infrastructure." /></Reveal>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.id}>
                <div className="container project-grid">
                  <Reveal className="project-visual-wrap"><ProjectVisual id={project.id}/></Reveal>
                  <Reveal className="project-copy" delay={.08}>
                    <div className="project-kicker"><span>{project.number}</span><i/><em>{project.proof}</em></div>
                    <h3>{project.title}</h3><h4>{project.subtitle}</h4><p>{project.description}</p>
                    <ul>{project.points.map((point) => <li key={point}><Check size={16}/>{point}</li>)}</ul>
                    <div className="tech-pills">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
                    <a className="project-live-link" href={project.url} target="_blank" rel="noreferrer">Visit live project <ArrowUpRight size={17}/></a>
                  </Reveal>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="value section" aria-labelledby="value-title">
          <div className="container value-grid">
            <Reveal className="value-intro"><span className="eyebrow">How I add value</span><h2 id="value-title">Engineering<br/><em>with purpose.</em></h2><p>Good product engineering is technical judgment in service of a clear human outcome.</p></Reveal>
            <div className="value-list">
              {capabilities.map(([number, title, text], index) => <Reveal className="value-row" delay={index * .06} key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight/></Reveal>)}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-orbit" aria-hidden="true"/><div className="contact-glow" aria-hidden="true"/>
          <div className="container contact-inner">
            <Reveal><span className="eyebrow">Start a conversation</span><h2>Have something<br/>ambitious <em>in mind?</em></h2><p>Let’s turn it into something exceptional.</p></Reveal>
            <Reveal className="contact-actions" delay={.08}>
              <a className="contact-primary" href={gmailComposeUrl} target="_blank" rel="noreferrer" aria-label={`Compose an email to ${email} in Gmail`}>Let’s connect <ArrowUpRight/></a>
              <button className="copy-email" onClick={copyEmail} type="button">{copied ? <Check/> : <Clipboard/>}<span>{copied ? 'Email copied' : email}</span></button>
            </Reveal>
            <Reveal className="contact-meta" delay={.14}>
              <div><span>Email</span><a href={gmailComposeUrl} target="_blank" rel="noreferrer" aria-label={`Compose an email to ${email} in Gmail`}>{email}</a></div>
              <div><span>Phone</span><a href="tel:+917715996714">+91 77159 96714</a></div>
              <div><span>Profiles</span><div className="profile-links"><a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13}/></a><a href={githubUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a></div></div>
              <div><span>Resume</span><a href={resumeUrl} download={resumeDownloadName}>Download PDF <Download size={14}/></a></div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner"><Logo/><p>Full-stack software engineer building reliable products for real people.</p><nav>{navItems.slice(1, 5).map((item) => <a href={`#${item}`} key={item}>{item}</a>)}</nav><span>© {new Date().getFullYear()} Abhishek Rewale</span></div>
      </footer>
      <div className="noise" aria-hidden="true" />
    </>
  )
}

export default App
