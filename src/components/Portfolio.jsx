import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut', delay: d } }),
}
const fadeIn = {
    hidden: { opacity: 0 },
    show: (d = 0) => ({ opacity: 1, transition: { duration: 0.55, ease: 'easeOut', delay: d } }),
}

/* ── Project data ── */
const projects = [
    {
        id: 1,
        title: 'Agrisonta',
        desc: 'UMKM Business Website.',
        type: 'Web',
        tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
        accent: '#4285F4',
        cols: 'col-span-2',
        screen: '#1a2040',
        mockupType: 'laptop',
        image: '/portofolio/agrisonta.png',
        demoUrl: 'https://daniswara99.met.student.pens.ac.id/landing-page/index.html',
        githubUrl: 'https://github.com/Pipip-zen/agrisonta-web',
    },
    {
        id: 2,
        title: 'Invoice Tracker',
        desc: 'Invoice tracker web app.',
        type: 'Web',
        tags: ['React', 'Tailwind CSS', 'Supabase', 'Vercel'],
        accent: '#22C55E',
        cols: 'col-span-2',
        screen: '#0d2010',
        mockupType: 'laptop',
        image: '/portofolio/invoice.png',
        demoUrl: 'https://invoice-generator-khaki-nu.vercel.app/dashboard',
        githubUrl: 'https://invoice-generator-doc.vercel.app/',
        githubLabel: 'Documentation',
    },
    {
        id: 3,
        title: 'ArtEngine Studio',
        desc: 'Generative AI image creation and editing tool for designers.',
        type: 'Design',
        tags: ['Next.js', 'Stable Diffusion', 'Canvas API'],
        accent: '#EC4899',
        cols: 'col-span-1',
        screen: '#2a0d1e',
        mockupType: 'laptop',
    },
    {
        id: 4,
        title: 'WaveStore',
        desc: 'Modern e-commerce storefront with AR product previews.',
        type: 'Web',
        tags: ['Next.js', 'Three.js', 'Stripe'],
        accent: '#F59E0B',
        cols: 'col-span-1',
        screen: '#1e1500',
        mockupType: 'laptop',
    },
    {
        id: 5,
        title: 'Nomad Navigator',
        desc: 'Travel planning app with AI itinerary builder and offline maps.',
        type: 'Apps',
        tags: ['Flutter', 'MapBox', 'OpenAI'],
        accent: '#00D2FF',
        cols: 'col-span-1',
        screen: '#001e2a',
        mockupType: 'phone',
    },
    {
        id: 6,
        title: 'CipherVault',
        desc: 'End-to-end encrypted password manager with biometric authentication.',
        type: 'Apps',
        tags: ['React Native', 'AES-256', 'Biometrics'],
        accent: '#7B2FBE',
        cols: 'col-span-2',
        screen: '#140d20',
        mockupType: 'phone',
    },
]

const filters = ['All', 'Web', 'Apps', 'Design']

/* ── Laptop Mockup ── */
function LaptopMockup({ screen, accent, title, image }) {
    return (
        <div className="relative w-full flex justify-center py-3">
            {/* Screen bezel */}
            <div
                className="relative rounded-t-xl overflow-hidden border-[3px]"
                style={{ width: '90%', paddingTop: '56%', borderColor: `${accent}40`, background: '#0d0d0d' }}
            >
                {/* Screen content */}
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                    style={{ background: `linear-gradient(135deg, ${screen}, #0C101A)` }}
                >
                    {image ? (
                        <img src={image} alt={title} className="w-full h-full object-cover" />
                    ) : (
                        <>
                            <div className="w-3/4 h-2 rounded-full opacity-30" style={{ background: accent }} />
                            <div className="w-full flex gap-1 px-2">
                                <div className="flex-1 h-8 rounded glass opacity-30" />
                                <div className="w-1/3 h-8 rounded glass opacity-20" />
                            </div>
                            <div className="w-full grid grid-cols-3 gap-1 px-2">
                                {[1, 2, 3, 4, 5, 6].map(k => (
                                    <div key={k} className="h-6 rounded glass opacity-20" />
                                ))}
                            </div>
                        </>
                    )}
                    {/* Glow dot */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div
                            className="w-16 h-16 rounded-full blur-xl opacity-30"
                            style={{ background: accent }}
                        />
                    </div>
                </div>
                {/* Camera */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/20" />
            </div>
            {/* Base */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2" style={{ width: '95%' }}>
                <div
                    className="w-full h-2 rounded-b-xl"
                    style={{ background: `linear-gradient(180deg, #1a1a1a, #0d0d0d)`, border: `1px solid ${accent}25`, borderTop: 'none' }}
                />
                <div className="mx-auto h-1 rounded-b-full" style={{ width: '35%', background: '#1a1a1a' }} />
            </div>
        </div>
    )
}

/* ── Phone Mockup ── */
function PhoneMockup({ screen, accent, image }) {
    return (
        <div className="relative flex justify-center py-3">
            <div
                className="relative rounded-[22px] overflow-hidden border-[3px] w-24 h-40"
                style={{ borderColor: `${accent}40`, background: '#0d0d0d' }}
            >
                {/* Screen */}
                <div
                    className="absolute inset-0 flex flex-col gap-1.5 p-2 pt-5"
                    style={{ background: `linear-gradient(135deg, ${screen}, #0C101A)` }}
                >
                    {image ? (
                        <img src={image} alt="Mobile View" className="w-full h-full object-cover rounded-[14px]" />
                    ) : (
                        <>
                            <div className="w-full h-2 rounded-full opacity-30" style={{ background: accent }} />
                            {[1, 2, 3].map(k => (
                                <div key={k} className="w-full h-4 rounded glass opacity-20" />
                            ))}
                            <div className="flex gap-1 mt-1">
                                <div className="flex-1 h-4 rounded glass opacity-20" />
                                <div className="flex-1 h-4 rounded glass opacity-15" />
                            </div>
                        </>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-10 h-10 rounded-full blur-xl opacity-30" style={{ background: accent }} />
                    </div>
                </div>
                {/* Notch */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-1.5 rounded-full bg-black/60" />
                {/* Home indicator */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-white/25" />
            </div>
        </div>
    )
}

/* ── Project Card ── */
function ProjectCard({ project, delay, inView }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay }}
            className={`${project.cols} glass rounded-2xl overflow-hidden hover-zoom border border-white/5 group relative`}
            style={{ boxShadow: `0 4px 30px ${project.accent}15` }}
        >
            {/* Accent bar */}
            <div
                className="absolute top-0 left-0 right-0 h-[3px] z-10"
                style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
            />

            {/* Mockup area */}
            <div
                className="relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${project.screen}88, #0C101A)`, minHeight: project.mockupType === 'laptop' ? 160 : 180 }}
            >
                {/* Hover glow overlay */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at center, ${project.accent}12, transparent 70%)` }}
                />
                {project.mockupType === 'laptop'
                    ? <LaptopMockup screen={project.screen} accent={project.accent} title={project.title} image={project.image} />
                    : (
                        <div className="flex justify-center items-center h-full py-2">
                            <PhoneMockup screen={project.screen} accent={project.accent} image={project.image} />
                        </div>
                    )
                }
            </div>

            {/* Info */}
            <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-white font-bold text-sm leading-snug">{project.title}</h3>
                    <span
                        className="flex-none text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{ background: `${project.accent}22`, color: project.accent }}
                    >
                        {project.type}
                    </span>
                </div>
                <p className="text-white/45 text-xs leading-relaxed mb-3">{project.desc}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map(tag => (
                        <span
                            key={tag}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-md"
                            style={{ background: `${project.accent}14`, color: `${project.accent}bb`, border: `1px solid ${project.accent}22` }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 hover:opacity-80"
                            style={{ color: project.accent }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                            Live Demo
                        </a>
                    )}
                    <a
                        href={project.githubUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/40 hover:text-white/70 transition-all duration-200"
                    >
                        {project.githubLabel === 'Documentation' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        )}
                        {project.githubLabel || 'Source'}
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default function Portfolio() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [active, setActive] = useState('All')

    const filtered = active === 'All' ? projects : projects.filter(p => p.type === active)

    return (
        <section id="portfolio" ref={ref} className="relative py-28 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-[0.04] blur-3xl"
                    style={{ background: 'radial-gradient(circle, #4285F4, #EC4899, transparent)' }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Section label */}
                <motion.div
                    variants={fadeIn} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0}
                    className="flex items-center gap-3 mb-4"
                >
                    <span className="text-xs font-bold tracking-[0.25em] uppercase text-electric/80">06 — Portfolio</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-electric/30 to-transparent max-w-[120px]" />
                </motion.div>

                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
                    <motion.h2
                        variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0.1}
                        className="text-4xl xl:text-5xl font-extrabold leading-tight"
                    >
                        Selected<br />
                        <span className="gradient-text">Work</span>
                    </motion.h2>

                    {/* Filter tabs — top right */}
                    <motion.div
                        variants={fadeIn} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0.2}
                        className="flex gap-1.5 glass rounded-xl p-1 w-fit"
                    >
                        {filters.map(f => (
                            <button
                                key={f}
                                onClick={() => setActive(f)}
                                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${active === f
                                    ? 'bg-electric text-white shadow-glow-blue'
                                    : 'text-white/50 hover:text-white'
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Masonry-style grid */}
                <AnimatePresence mode="popLayout">
                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filtered.map((project, i) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                delay={i * 0.08}
                                inView={inView}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* View all button */}
                <motion.div
                    variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0.5}
                    className="flex justify-center mt-10"
                >
                    <a href="#" className="btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m0 0l-6.75-6.75M20.25 12l-6.75 6.75" />
                        </svg>
                        View All Projects
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
