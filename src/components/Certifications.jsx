import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut', delay: d } }),
}
const fadeIn = {
    hidden: { opacity: 0 },
    show: (d = 0) => ({ opacity: 1, transition: { duration: 0.55, ease: 'easeOut', delay: d } }),
}

const certs = [
    {
        issuer: 'Google',
        accent: '#4285F4',
        logo: (
            <svg viewBox="0 0 48 48" className="w-8 h-8">
                <path fill="#4285F4" d="M43.6 20.5H42V20H24v8h11.3C33.6 33.1 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.2 6.5 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z" />
                <path fill="#34A853" d="M6.3 14.7l6.6 4.8C14.5 15.1 18.9 12 24 12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.2 6.5 29.4 4 24 4c-7.7 0-14.3 4.5-17.7 10.7z" />
                <path fill="#FBBC05" d="M24 44c5.3 0 10.1-1.9 13.7-5.1l-6.3-5.2C29.6 35.6 26.9 36 24 36c-5.1 0-9.5-2.9-11.3-7.1l-6.6 5.1C9.6 39.4 16.4 44 24 44z" />
                <path fill="#EA4335" d="M43.6 20.5H42V20H24v8h11.3c-.9 2.5-2.5 4.6-4.6 6l6.3 5.2c-.4.4 6-4.4 6-13.2 0-1.2-.1-2.4-.4-3.5z" />
            </svg>
        ),
        title: 'Professional Machine Learning Engineer',
        subtitle: 'Google Cloud Certification',
        year: '2024',
        id: 'GCP-MLE-2024-9821',
        tags: ['ML', 'Cloud', 'TensorFlow'],
        bgGrad: 'linear-gradient(135deg, rgba(66,133,244,0.18), rgba(66,133,244,0.04))',
    },
    {
        issuer: 'NVIDIA',
        accent: '#76B900',
        logo: (
            <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
                <rect width="48" height="48" rx="10" fill="#76B900" />
                <text x="5" y="34" fontSize="14" fontWeight="900" fill="white" fontFamily="sans-serif">NV</text>
            </svg>
        ),
        title: 'Deep Learning for Computer Vision',
        subtitle: 'NVIDIA DLI Certificate',
        year: '2023',
        id: 'NVDLI-CV-2023-4417',
        tags: ['Deep Learning', 'CUDA', 'Computer Vision'],
        bgGrad: 'linear-gradient(135deg, rgba(118,185,0,0.18), rgba(118,185,0,0.04))',
    },
    {
        issuer: 'AWS',
        accent: '#FF9900',
        logo: (
            <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
                <rect width="48" height="48" rx="10" fill="#232F3E" />
                <path d="M14 28c3.2 1.7 6.5 2.6 10 2.6s6.8-.9 10-2.6" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M10 20l14 6 14-6" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M38 20v8M10 20v8" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
        ),
        title: 'AWS Solutions Architect – Associate',
        subtitle: 'Amazon Web Services',
        year: '2023',
        id: 'AWS-SAA-2023-0552',
        tags: ['Cloud', 'Architecture', 'DevOps'],
        bgGrad: 'linear-gradient(135deg, rgba(255,153,0,0.18), rgba(255,153,0,0.04))',
    },
    {
        issuer: 'Adobe',
        accent: '#FF0000',
        logo: (
            <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
                <rect width="48" height="48" rx="10" fill="#FF0000" />
                <path d="M8 38L20 10l6 14M40 38L28 10l-6 14M14 28h20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Adobe Certified Expert – Premiere Pro',
        subtitle: 'Adobe Creative Cloud',
        year: '2022',
        id: 'ACE-PP-2022-7783',
        tags: ['Video Editing', 'Motion Graphics', 'Creative'],
        bgGrad: 'linear-gradient(135deg, rgba(255,0,0,0.18), rgba(255,0,0,0.04))',
    },
    {
        issuer: 'Meta',
        accent: '#0668E1',
        logo: (
            <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
                <rect width="48" height="48" rx="10" fill="#0668E1" />
                <path d="M8 30c0-4 2-8 5.5-10.5C17 17 21 17.5 24 19.5c3-2 7-2.5 10.5-.5S40 26 40 30" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                <ellipse cx="24" cy="30" rx="8" ry="5" stroke="white" strokeWidth="2.2" />
            </svg>
        ),
        title: 'Meta Front-End Developer',
        subtitle: 'Meta Professional Certificate',
        year: '2022',
        id: 'META-FE-2022-3341',
        tags: ['React', 'JavaScript', 'UI Design'],
        bgGrad: 'linear-gradient(135deg, rgba(6,104,225,0.18), rgba(6,104,225,0.04))',
    },
]

export default function Certifications() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const scrollRef = useRef(null)
    const [activeIdx, setActiveIdx] = useState(0)

    const scroll = (dir) => {
        const el = scrollRef.current
        if (!el) return
        const amount = 360
        el.scrollBy({ left: dir === 'next' ? amount : -amount, behavior: 'smooth' })
    }

    return (
        <section id="certifications" ref={ref} className="relative py-28 overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full opacity-[0.05] blur-3xl"
                    style={{ background: 'radial-gradient(circle, #4285F4, #FF9900, transparent)' }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Section label */}
                <motion.div
                    variants={fadeIn} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0}
                    className="flex items-center gap-3 mb-4"
                >
                    <span className="text-xs font-bold tracking-[0.25em] uppercase text-electric/80">04 — Credentials</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-electric/30 to-transparent max-w-[120px]" />
                </motion.div>

                <div className="flex items-end justify-between mb-10">
                    <motion.h2
                        variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0.1}
                        className="text-4xl xl:text-5xl font-extrabold leading-tight"
                    >
                        Certifications &amp;<br />
                        <span className="gradient-text">Credentials</span>
                    </motion.h2>

                    {/* Carousel controls */}
                    <motion.div
                        variants={fadeIn} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0.2}
                        className="hidden sm:flex gap-2"
                    >
                        <button
                            onClick={() => scroll('prev')}
                            className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => scroll('next')}
                            className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </motion.div>
                </div>

                {/* Horizontal scrollable carousel */}
                <motion.div
                    variants={fadeIn} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0.25}
                    ref={scrollRef}
                    className="flex gap-5 overflow-x-auto pb-4 scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {certs.map((cert, i) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, x: 40 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.55, ease: 'easeOut' }}
                            className="flex-none w-72 sm:w-80 glass rounded-2xl p-6 hover-zoom relative overflow-hidden border border-white/5 group cursor-pointer"
                            style={{ background: cert.bgGrad, boxShadow: `0 4px 30px ${cert.accent}18` }}
                        >
                            {/* Accent top bar */}
                            <div
                                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                                style={{ background: `linear-gradient(90deg, ${cert.accent}, transparent)` }}
                            />

                            {/* Checkmark badge — top right */}
                            <div
                                className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center"
                                style={{ background: `${cert.accent}25`, border: `1px solid ${cert.accent}50` }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ color: cert.accent }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>

                            {/* Logo + issuer */}
                            <div className="flex items-center gap-3 mb-4">
                                {cert.logo}
                                <div>
                                    <p className="text-white font-bold text-sm">{cert.issuer}</p>
                                    <p className="text-white/40 text-[10px]">{cert.year}</p>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-white font-bold text-sm leading-snug mb-1">{cert.title}</h3>
                            <p className="text-white/50 text-xs mb-4">{cert.subtitle}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 mb-5">
                                {cert.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md"
                                        style={{ background: `${cert.accent}18`, color: `${cert.accent}cc`, border: `1px solid ${cert.accent}28` }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Credential ID */}
                            <p className="text-white/25 text-[10px] font-mono mb-4">ID: {cert.id}</p>

                            {/* Verify button */}
                            <a
                                href="#"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-200 hover:scale-95"
                                style={{
                                    background: `${cert.accent}22`,
                                    color: cert.accent,
                                    border: `1px solid ${cert.accent}35`,
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                </svg>
                                Verify Certificate
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Scroll hint */}
                <motion.p
                    variants={fadeIn} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0.7}
                    className="text-white/25 text-xs text-center mt-4 sm:hidden"
                >
                    ← Swipe to explore →
                </motion.p>
            </div>
        </section>
    )
}
