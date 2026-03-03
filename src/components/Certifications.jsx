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
        issuer: 'MikroTik',
        accent: '#FF0000',
        logo: '/mikrotik.png',
        title: 'MikroTik Certified Routing Engineering',
        subtitle: 'MikroTik Certification',
        year: '2024',
        id: '2402RE5771',
        tags: ['MikroTik', 'Routing', 'Networking'],
        bgGrad: 'linear-gradient(135deg, rgba(255,0,0,0.18), rgba(255,0,0,0.04))',
        verifyUrl: 'https://mikrotik.com/training/certificates/c285771c3217a1fb3895',
    },
    {
        issuer: 'MikroTik',
        accent: '#FF0000',
        logo: '/mikrotik.png',
        title: 'MikroTik Certified Network Associate',
        subtitle: 'MikroTik Certification',
        year: '2023',
        id: '2303NA7558',
        tags: ['MikroTik', 'Routing', 'Networking'],
        bgGrad: 'linear-gradient(135deg, rgba(255,0,0,0.18), rgba(255,0,0,0.04))',
        verifyUrl: 'https://mikrotik.com/training/certificates/c257558c3e6a1013e22e',
    },
    {
        issuer: 'Cisco',
        accent: '#00B4E5',
        logo: '/cisco.png',
        title: 'Cybersecurity Essentials',
        subtitle: 'Cisco',
        year: '2022',
        id: '2e19f3f2-1bce-4046-9074-3230a0723393',
        tags: ['Cybersecurity', 'Networking', 'Security'],
        bgGrad: 'linear-gradient(135deg, rgba(0,180,229,0.18), rgba(0,180,229,0.04))',
        verifyUrl: 'https://www.credly.com/badges/2e19f3f2-1bce-4046-9074-3230a0723393/linked_in_profile',
    },
    {
        issuer: 'AWS',
        accent: '#FF9900',
        logo: '/aws.png',
        title: 'AWS Academy Graduate - Introduction to Cloud Semester 1',
        subtitle: 'Amazon Web Services',
        year: '2022',
        id: '778dde73-7024-44b3-add6-118b714540b4',
        tags: ['AWS Cloud', 'AWS Support', 'AWS Core'],
        bgGrad: 'linear-gradient(135deg, rgba(255,153,0,0.18), rgba(255,153,0,0.04))',
        verifyUrl: 'https://www.credly.com/badges/778dde73-7024-44b3-add6-118b714540b4/linked_in_profile',
    },
    {
        issuer: 'Ec-Council',
        accent: '#EE3124',
        logo: '/ec-council.png',
        title: 'Network Defense Essentials',
        subtitle: 'Ec-Council',
        year: '2024',
        id: 'ECC6451279038',
        tags: ['Network Defense', 'Security'],
        bgGrad: 'linear-gradient(135deg, rgba(238,49,36,0.18), rgba(238,49,36,0.04))',
        verifyUrl: null,
    },
    {
        issuer: 'Red Hat',
        accent: '#EE0000',
        logo: '/red-hat.png',
        title: 'Red Hat Certified Specialist in Containers',
        subtitle: 'Red Hat',
        year: '2022',
        id: '230-270-092',
        tags: ['Containers', 'Red Hat', 'DevOps'],
        bgGrad: 'linear-gradient(135deg, rgba(238,0,0,0.18), rgba(238,0,0,0.04))',
        verifyUrl: 'https://www.credly.com/badges/05c334fb-8f74-4e30-b38b-fdb5e89dbaed/public_url',
    },
    {
        issuer: 'Gamelab Indonesia',
        accent: '#00AEEF',
        logo: '/gamelab.png',
        title: 'HTML dan CSS',
        subtitle: 'Gamelab Indonesia',
        year: '2022',
        id: 'GL6862994310',
        tags: ['HTML', 'CSS'],
        bgGrad: 'linear-gradient(135deg, rgba(0,174,239,0.18), rgba(0,174,239,0.04))',
        verifyUrl: 'https://www.gamelab.id/certificate/GL6862994310',
    },
    {
        issuer: 'Gamelab Indonesia',
        accent: '#00AEEF',
        logo: '/gamelab.png',
        title: 'Bootstrap dan SASS',
        subtitle: 'Gamelab Indonesia',
        year: '2022',
        id: 'GL2637762688',
        tags: ['Bootstrap', 'SASS'],
        bgGrad: 'linear-gradient(135deg, rgba(0,174,239,0.18), rgba(0,174,239,0.04))',
        verifyUrl: 'https://www.gamelab.id/certificate/GL2637762688',
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
                    <span className="text-xs font-bold tracking-[0.25em] uppercase text-electric/80">05 — Credentials</span>
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
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center p-1.5 overflow-hidden"
                                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
                                >
                                    <img
                                        src={cert.logo}
                                        alt={cert.issuer}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm leading-tight">{cert.issuer}</p>
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
                            {cert.verifyUrl ? (
                                <a
                                    href={cert.verifyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-200 hover:scale-95 group/btn"
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
                            ) : (
                                <div className="h-8" /> // Spacer when no verify button
                            )}
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
