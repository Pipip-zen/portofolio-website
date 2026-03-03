import { motion } from 'framer-motion'
import { useRef } from 'react'

/* ── Animation variants ── */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: 'easeOut', delay },
    }),
}

const fadeIn = {
    hidden: { opacity: 0 },
    show: (delay = 0) => ({
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut', delay },
    }),
}

const slideRight = {
    hidden: { opacity: 0, x: 60 },
    show: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: 'easeOut', delay },
    }),
}

/* ── Stat card data ── */
const stats = [
    {
        icon: '🏆',
        value: '6+',
        label: 'Years Exp.',
        position: 'top-8 -left-12',
        animDelay: 1.2,
        floatClass: 'animate-float',
    },
    {
        icon: '🚀',
        value: '35+',
        label: 'Projects',
        position: 'bottom-24 -left-14',
        animDelay: 1.5,
        floatClass: 'animate-float-delayed',
    },
    {
        icon: '📜',
        value: '12',
        label: 'Certifications',
        position: 'top-20 -right-12',
        animDelay: 1.8,
        floatClass: 'animate-float-delayed-2',
    },
]

/* ── Buttons data ── */
const buttons = [
    {
        label: 'Download CV',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
        ),
        href: '#',
        className: 'btn-primary',
    },
    {
        label: 'Contact Me',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        href: '#contact',
        className: 'btn-outline',
    },
    {
        label: 'Showreel',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
            </svg>
        ),
        href: '#',
        className: 'btn-ghost',
    },
]

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center pt-24 pb-32 overflow-hidden"
        >
            {/* Ambient background glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
                    style={{ background: 'radial-gradient(circle, #4285F4, transparent)' }}
                />
                <div
                    className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
                    style={{ background: 'radial-gradient(circle, #7B2FBE, transparent)' }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* ── LEFT COLUMN ── */}
                <div className="flex flex-col gap-7 z-10">
                    {/* Badge */}
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        animate="show"
                        custom={0.4}
                        className="w-fit"
                    >
                        <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-semibold text-electric">
                            <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
                            Available for Work
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={0.6}
                        className="text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight"
                    >
                        Crafting{' '}
                        <span className="gradient-text">Bold Digital</span>
                        <br />
                        Experiences
                    </motion.h1>

                    {/* Intro paragraphs */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={0.8}
                        className="flex flex-col gap-4"
                    >
                        <p className="text-white/60 text-base leading-relaxed max-w-md">
                            I'm a full-stack developer and UI/UX designer with 6+ years of experience crafting
                            fast, beautiful, and accessible web products that leave lasting impressions.
                        </p>
                        <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                            From concept to deployment — I bridge the gap between stunning design and
                            rock-solid engineering, helping brands stand out in the digital landscape.
                        </p>
                    </motion.div>

                    {/* 3-tier Buttons */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={1.0}
                        className="flex flex-wrap items-center gap-3"
                    >
                        {buttons.map((btn) => (
                            <a
                                key={btn.label}
                                href={btn.href}
                                className={btn.className}
                            >
                                {btn.icon}
                                {btn.label}
                            </a>
                        ))}
                    </motion.div>

                    {/* Follow Me row */}
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        animate="show"
                        custom={1.2}
                        className="flex items-center gap-4 pt-2"
                    >
                        <span className="text-white/35 text-xs font-semibold uppercase tracking-widest">Follow Me</span>
                        <div className="flex items-center gap-2">
                            {/* GitHub */}
                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="w-9 h-9 glass rounded-xl flex items-center justify-center text-white/50 hover:text-white transition-all duration-200 hover:scale-95 hover:shadow-glow-blue"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-9 h-9 glass rounded-xl flex items-center justify-center text-white/50 hover:text-[#0A66C2] transition-all duration-200 hover:scale-95"
                                style={{ '--hover-shadow': '0 0 20px rgba(10,102,194,0.4)' }}
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            {/* Email */}
                            <a
                                href="mailto:hello@yourdomain.com"
                                aria-label="Email"
                                className="w-9 h-9 glass rounded-xl flex items-center justify-center text-white/50 hover:text-[#EA4335] transition-all duration-200 hover:scale-95"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* ── RIGHT COLUMN ── */}
                <motion.div
                    variants={slideRight}
                    initial="hidden"
                    animate="show"
                    custom={0.5}
                    className="relative flex justify-center lg:justify-end z-10"
                >
                    <div className="relative">
                        {/* Portrait card */}
                        <div className="portrait-card w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[420px] xl:w-96 xl:h-[480px] hover-zoom">
                            {/* Gradient overlay on top of image */}
                            <div
                                className="absolute inset-0 z-10 opacity-30"
                                style={{
                                    background: 'linear-gradient(to bottom, transparent 60%, #0C101A 100%)',
                                }}
                            />
                            {/* Portrait image */}
                            <img
                                src="/hero-portrait.png"
                                alt="Portfolio portrait"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    // Fallback gradient if image fails
                                    e.target.style.display = 'none'
                                    e.target.parentNode.style.background =
                                        'linear-gradient(135deg, #1a2440 0%, #2d1b4e 50%, #1a2440 100%)'
                                }}
                            />
                            {/* Name tag at bottom */}
                            <div className="absolute bottom-4 left-4 right-4 z-20">
                                <div className="glass rounded-xl px-3 py-2">
                                    <p className="text-white font-bold text-sm">Your Name</p>
                                    <p className="text-electric text-xs font-medium">Full-Stack Developer & Designer</p>
                                </div>
                            </div>
                        </div>

                        {/* ── Floating Stat Cards ── */}
                        {stats.map((stat) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.7 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: stat.animDelay, duration: 0.5, type: 'spring' }}
                                className={`absolute ${stat.position} stat-card ${stat.floatClass}`}
                            >
                                <span className="text-2xl">{stat.icon}</span>
                                <div>
                                    <p className="text-white font-extrabold text-base leading-none">{stat.value}</p>
                                    <p className="text-white/50 text-xs mt-0.5">{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}

                        {/* Decorative ring */}
                        <div
                            className="absolute -inset-4 rounded-[40px] opacity-20 pointer-events-none"
                            style={{
                                background: 'transparent',
                                border: '1px solid',
                                borderImage: 'linear-gradient(135deg, #4285F4, #7B2FBE) 1',
                            }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* ── SCROLL INDICATOR ── */}
            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.6 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
                aria-label="Scroll to About"
            >
                <span className="text-white/30 text-xs font-medium tracking-widest uppercase group-hover:text-white/60 transition-colors duration-200">Scroll</span>
                <div className="relative w-px h-16 bg-white/20 overflow-hidden rounded-full">
                    <motion.div
                        className="absolute top-0 left-0 right-0 w-full rounded-full"
                        style={{ height: '8px', background: '#4285F4', boxShadow: '0 0 6px #4285F4' }}
                        animate={{ y: [0, 56] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: 'linear', repeatDelay: 0.3 }}
                    />
                </div>
            </motion.a>
        </section>
    )
}
