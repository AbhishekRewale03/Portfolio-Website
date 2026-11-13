export const navItems = ['home', 'about', 'skills', 'experience', 'projects', 'contact'] as const

export const experiences = [
  {
    role: 'Independent Full-Stack Developer',
    company: 'Self-Initiated SaaS Products',
    period: 'Jun 2026 — Present',
    points: [
      'Launched GymPro for two paying gym businesses and continue to ship enhancements, support, and fixes.',
      'Building Turfmate for market launch with transaction-backed booking integrity.',
      'Own product architecture, authorization, automated testing, and deployment end to end.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Springer Capital',
    period: 'Feb 2026 — May 2026',
    points: [
      'Contributed to a production product redesign from responsive Figma specifications.',
      'Built Advisor, Operations, and Compliance dashboards with reusable React and TypeScript components.',
      'Collaborated through Git branches, pull requests, code reviews, and design feedback.',
    ],
  },
] as const

export const projects = [
  {
    number: '01',
    id: 'gympro',
    url: 'https://gympro.in',
    title: 'GymPro',
    subtitle: 'Multi-Tenant Gym Management SaaS',
    description: 'A production platform that keeps member operations, money movement, and tenant boundaries reliable as real gyms use it every day.',
    proof: 'Live with 2 paying gym businesses',
    tech: ['Next.js', 'TypeScript', 'Firebase Auth', 'Firestore', 'Cloud Functions', 'Security Rules'],
    points: [
      'Tenant-isolated memberships, renewals, attendance, payments, and reporting.',
      'Server-authoritative financial workflows with tested authorization boundaries.',
      'WhatsApp signup flows and a connector-ready biometric attendance gateway.',
    ],
  },
  {
    number: '02',
    id: 'turfmate',
    url: 'https://turfmate-automation-saas.vercel.app/',
    title: 'Turfmate',
    subtitle: 'Concurrency-Safe Booking SaaS',
    description: 'A focused booking product for turf owners, engineered around the hard part: making every reservation trustworthy under contention.',
    proof: 'Preparing for market launch',
    tech: ['Next.js', 'TypeScript', 'Firestore', 'Transactions', 'UPI workflows'],
    points: [
      'Multi-owner architecture with public booking links and owner-scoped authorization.',
      'Configurable hours and time-based pricing with transaction-backed reservations.',
      'Conflict checks, idempotent retries, and manual UPI verification workflows.',
    ],
  },
  {
    number: '03',
    id: 'forever',
    url: 'https://forever-store-eight.vercel.app/',
    title: 'Forever',
    subtitle: 'Clothing E-Commerce Platform',
    description: 'An editorial storefront and admin system joining a refined shopping experience with the operational workflows behind it.',
    proof: 'Full-stack portfolio build',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Cloudinary', 'Stripe / Razorpay'],
    points: [
      'MERN storefront and admin dashboard with JWT authentication and REST APIs.',
      'Product, cart, order, image-management, and payment workflows.',
      'Separate deployment surfaces designed for clear operational boundaries.',
    ],
  },
] as const

export const capabilities = [
  ['01', 'Scalable Frontend Systems', 'Responsive, maintainable interfaces shaped around real product workflows.'],
  ['02', 'Secure Backend Workflows', 'Authorization, validation, and server authority where trust boundaries matter.'],
  ['03', 'Product Thinking', 'A direct line from customer need to a useful, testable release.'],
  ['04', 'Testing & Reliability', 'Focused validation across units, integrations, emulators, and user journeys.'],
] as const
