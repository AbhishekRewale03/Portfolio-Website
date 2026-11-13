import {
  siFirebase,
  siGit,
  siGithub,
  siGithubactions,
  siJavascript,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siVitest,
  siReact,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from 'simple-icons'

const orbitIcons: Array<{ icon: SimpleIcon; radius: number; angle: number; color: string }> = [
  { icon: siReact, radius: 390, angle: 203, color: '#61dafb' },
  { icon: siNextdotjs, radius: 390, angle: 226, color: '#f8f5f0' },
  { icon: siTypescript, radius: 390, angle: 250, color: '#3178c6' },
  { icon: siJavascript, radius: 390, angle: 275, color: '#f7df1e' },
  { icon: siTailwindcss, radius: 390, angle: 300, color: '#06b6d4' },
  { icon: siNodedotjs, radius: 390, angle: 326, color: '#5fa04e' },
  { icon: siFirebase, radius: 300, angle: 214, color: '#ffca28' },
  { icon: siMongodb, radius: 300, angle: 250, color: '#47a248' },
  { icon: siVitest, radius: 300, angle: 289, color: '#6e9f18' },
  { icon: siGit, radius: 300, angle: 326, color: '#f05032' },
  { icon: siGithub, radius: 210, angle: 225, color: '#f8f5f0' },
  { icon: siGithubactions, radius: 210, angle: 315, color: '#2088ff' },
]

const mobileOrbitIcons: Array<{ icon: SimpleIcon; radius: number; angle: number; color: string }> = [
  { icon: siReact, radius: 150, angle: 198, color: '#61dafb' },
  { icon: siNextdotjs, radius: 150, angle: 226, color: '#f8f5f0' },
  { icon: siTypescript, radius: 150, angle: 255, color: '#3178c6' },
  { icon: siJavascript, radius: 150, angle: 285, color: '#f7df1e' },
  { icon: siTailwindcss, radius: 150, angle: 314, color: '#06b6d4' },
  { icon: siNodedotjs, radius: 150, angle: 342, color: '#5fa04e' },
  { icon: siFirebase, radius: 104, angle: 216, color: '#ffca28' },
  { icon: siMongodb, radius: 104, angle: 270, color: '#47a248' },
  { icon: siGithub, radius: 104, angle: 324, color: '#f8f5f0' },
]

const groups = [
  ['Frontend', 'React · Next.js · TypeScript · JavaScript · Tailwind CSS · TanStack Query · Recharts'],
  ['Backend', 'Node.js · Express.js · REST APIs · Zod · JWT'],
  ['Cloud & Data', 'Firebase · Firestore · MongoDB · Cloud Functions · Vercel'],
  ['Tools & Testing', 'Playwright · Emulator Suite · Git · GitHub · GitHub Actions'],
] as const

function point(radius: number, angle: number) {
  const rad = (angle * Math.PI) / 180
  return { x: 500 + radius * Math.cos(rad), y: 560 + radius * Math.sin(rad) }
}

function mobilePoint(radius: number, angle: number) {
  const rad = (angle * Math.PI) / 180
  return { x: 180 + radius * Math.cos(rad), y: 250 + radius * Math.sin(rad) }
}

export function OrbitSkills() {
  return (
    <div className="orbit-layout">
      <div className="orbit-stage desktop-orbit" aria-label="Technology orbit visualization">
        <svg className="orbit-svg" viewBox="0 0 1000 620" role="img" aria-labelledby="orbit-title orbit-desc">
          <title id="orbit-title">The tools behind the products</title>
          <desc id="orbit-desc">Concentric semicircular paths showing frontend, backend, cloud, and testing technologies.</desc>
          <defs>
            <linearGradient id="arc" x1="0" x2="1">
              <stop offset="0" stopColor="#ff6b25" stopOpacity="0" />
              <stop offset=".48" stopColor="#ff8a37" stopOpacity=".95" />
              <stop offset="1" stopColor="#ff6b25" stopOpacity="0" />
            </linearGradient>
            <filter id="glow"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          </defs>
          {[390, 300, 210].map((r) => (
            <g key={r}>
              <path className="orbit-track" d={`M ${500 - r} 560 A ${r} ${r} 0 0 1 ${500 + r} 560`} />
              <path className={`orbit-arc arc-${r}`} d={`M ${500 - r} 560 A ${r} ${r} 0 0 1 ${500 + r} 560`} />
            </g>
          ))}
          <path className="orbit-horizon" d="M80 560H920" />
          {orbitIcons.map(({ icon, radius, angle, color }) => {
            const { x, y } = point(radius, angle)
            return (
              <g key={icon.slug} transform={`translate(${x - 27} ${y - 27})`} className="orbit-node">
                <circle cx="27" cy="27" r="25" fill="#15100d" stroke="#4d3529" />
                <path d={icon.path} fill={color} transform="translate(13 13) scale(1.16)" />
              </g>
            )
          })}
          <g className="orbit-center">
            <circle cx="500" cy="560" r="82" fill="#100c0a" stroke="#ff7a31" strokeOpacity=".55" />
            <circle cx="500" cy="560" r="54" fill="#ff6b25" fillOpacity=".08" />
          </g>
        </svg>
        <div className="orbit-copy">
          <span className="eyebrow">Core stack</span>
          <h3>The tools behind<br />the products.</h3>
          <p>A practical stack chosen for shipping reliable software—not collecting logos.</p>
        </div>
      </div>

      <div className="mobile-orbit-stage" aria-label="Mobile technology orbit visualization">
        <svg className="mobile-orbit-svg" viewBox="0 0 360 260" role="img" aria-labelledby="mobile-orbit-title mobile-orbit-desc">
          <title id="mobile-orbit-title">Primary technologies orbiting the product stack</title>
          <desc id="mobile-orbit-desc">Two precise semicircular paths containing nine primary technology icons.</desc>
          <defs>
            <linearGradient id="mobile-arc" x1="0" x2="1">
              <stop offset="0" stopColor="#ff6b25" stopOpacity="0" />
              <stop offset=".5" stopColor="#ff8a37" stopOpacity=".95" />
              <stop offset="1" stopColor="#ff6b25" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[150, 104].map((radius) => (
            <g key={radius}>
              <path className="mobile-orbit-track" d={`M ${180 - radius} 250 A ${radius} ${radius} 0 0 1 ${180 + radius} 250`} />
              <path className={`mobile-orbit-arc mobile-arc-${radius}`} d={`M ${180 - radius} 250 A ${radius} ${radius} 0 0 1 ${180 + radius} 250`} />
            </g>
          ))}
          {mobileOrbitIcons.map(({ icon, radius, angle, color }) => {
            const { x, y } = mobilePoint(radius, angle)
            return (
              <g key={icon.slug} transform={`translate(${x - 19} ${y - 19})`} className="mobile-orbit-node">
                <circle cx="19" cy="19" r="18" fill="#15100d" stroke="#5a392b" />
                <path d={icon.path} fill={color} transform="translate(9 9) scale(.84)" />
              </g>
            )
          })}
        </svg>
        <div className="mobile-orbit-copy">
          <span className="eyebrow">Core stack</span>
          <h3>The tools behind<br />the products.</h3>
          <p>Purpose-built choices for reliable, production-ready software.</p>
        </div>
      </div>

      <div className="skill-groups">
        {groups.map(([title, items], index) => (
          <div className="skill-group" key={title}>
            <span>0{index + 1}</span>
            <div><h4>{title}</h4><p>{items}</p></div>
          </div>
        ))}
      </div>
    </div>
  )
}
