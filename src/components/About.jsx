import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

/* ── Animation helpers ── */
const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut', delay: d } }),
}
const fadeIn = {
    hidden: { opacity: 0 },
    show: (d = 0) => ({ opacity: 1, transition: { duration: 0.55, ease: 'easeOut', delay: d } }),
}

/* ── Info card data ── */
const infoCards = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.607L5 14.5m14.8.5l-1.57.393A9.065 9.065 0 0112 20.25a9.065 9.065 0 01-6.23-5.357L5 14.5" />
            </svg>
        ),
        label: 'Professional Focus',
        value: 'Full-Stack & UI/UX',
        accent: '#4285F4',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
        label: 'Based In',
        value: 'Indonesia 🇮🇩',
        accent: '#00D2FF',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        label: 'Availability',
        value: 'Open to Work',
        accent: '#22C55E',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
            </svg>
        ),
        label: 'Languages',
        value: 'ID / EN',
        accent: '#7B2FBE',
    },
]

/* ── Niche cards ── */
const nicheCards = [
    { icon: '👁️', title: 'Computer Vision', desc: 'Object detection & image processing pipelines' },
    { icon: '🎮', title: 'Interactive Media', desc: 'Immersive web experiences & WebGL' },
    { icon: '🤖', title: 'AI Integration', desc: 'LLM-powered tools & automation' },
    { icon: '📱', title: 'Mobile-First Design', desc: 'Fluid, responsive interfaces across devices' },
]

export default function About() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="about" ref={ref} className="relative py-28 overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-3xl"
                    style={{ background: 'radial-gradient(circle, #7B2FBE, transparent)' }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.06] blur-3xl"
                    style={{ background: 'radial-gradient(circle, #00D2FF, transparent)' }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Section label */}
                <motion.div
                    variants={fadeIn} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0}
                    className="flex items-center gap-3 mb-4"
                >
                    <span className="text-xs font-bold tracking-[0.25em] uppercase text-electric/80">01 — About</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-electric/30 to-transparent max-w-[120px]" />
                </motion.div>

                <motion.h2
                    variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0.1}
                    className="text-4xl xl:text-5xl font-extrabold mb-14 leading-tight"
                >
                    The Human Behind<br />
                    <span className="gradient-text">the Code</span>
                </motion.h2>

                {/* Main grid: bio left, cards right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* LEFT — Bio */}
                    <motion.div
                        variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0.2}
                        className="flex flex-col gap-5"
                    >
                        <p className="text-white/70 text-base leading-relaxed">
                            Hi, I'm a passionate developer and designer who loves turning complex problems into
                            elegant, user-centered solutions. With 6+ years in the industry, I've led projects
                            across fintech, e-commerce, and creative media sectors.
                        </p>
                        <p className="text-white/55 text-sm leading-relaxed">
                            I believe great software is both technically robust and beautifully intuitive.
                            My workflow bridges high-fidelity design systems with clean, scalable engineering —
                            from architecting REST/GraphQL APIs to crafting pixel-perfect React interfaces.
                        </p>
                        <p className="text-white/55 text-sm leading-relaxed">
                            Outside coding, I explore computational art, contribute to open-source tooling,
                            and mentor junior developers. I'm driven by curiosity and the belief that
                            technology should empower people.
                        </p>

                        {/* CTA */}
                        <div className="flex gap-3 mt-2">
                            <a href="#" className="btn-primary text-xs px-5 py-2.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download CV
                            </a>
                            <a href="#contact" className="btn-outline text-xs px-5 py-2.5">Get in Touch</a>
                        </div>
                    </motion.div>

                    {/* RIGHT — 2×2 Info Cards */}
                    <div className="grid grid-cols-2 gap-4">
                        {infoCards.map((card, i) => (
                            <motion.div
                                key={card.label}
                                variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0.2 + i * 0.1}
                                className="glass rounded-2xl p-5 hover-zoom group relative overflow-hidden"
                            >
                                {/* Accent line */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-70"
                                    style={{ background: `linear-gradient(90deg, ${card.accent}, transparent)` }}
                                />
                                <div
                                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                                    style={{ background: `${card.accent}22`, color: card.accent }}
                                >
                                    {card.icon}
                                </div>
                                <p className="text-white/50 text-[10px] font-semibold uppercase tracking-widest mb-1">{card.label}</p>
                                <p className="text-white font-bold text-sm">{card.value}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom — Niche Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
                    {nicheCards.map((card, i) => (
                        <motion.div
                            key={card.title}
                            variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0.45 + i * 0.08}
                            className="glass rounded-2xl p-4 hover-zoom flex flex-col gap-2 border border-white/5"
                        >
                            <span className="text-2xl">{card.icon}</span>
                            <p className="text-white font-semibold text-sm">{card.title}</p>
                            <p className="text-white/45 text-xs leading-relaxed">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
