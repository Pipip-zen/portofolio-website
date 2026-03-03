import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut', delay: d } }),
}
const fadeIn = {
    hidden: { opacity: 0 },
    show: (d = 0) => ({ opacity: 1, transition: { duration: 0.55, ease: 'easeOut', delay: d } }),
}

/* ── Timeline data ── */
const timeline = [
    {
        period: '2024 – Present',
        degree: "Undergraduate in Multimedia Engineering Technology",
        school: 'Electronic Engineering Polytechnic Institute of Surabaya',
        location: 'Surabaya, Indonesia',
        desc: 'Focusing on full-stack development, network systems, and immersive media.',
        tags: ['Full Stack Development', 'Network Systems', 'Immersive Media', 'Software Engineering'],
        accent: '#4285F4',
        icon: '🎓',
        side: 'left',
        logo: '/PENS.PNG',
    },
    {
        period: 'January 2023 – March 2023',
        degree: "Intern Front-End Developer",
        school: 'PT. Educa Sisfomedia Indonesia',
        location: 'Salatiga, Indonesia',
        desc: 'Developed a business website for a local UMKM as the final internship project, focusing on clean UI and responsive design.',
        tags: ['Full Stack Development', 'Network Systems', 'Immersive Media', 'Software Engineering'],
        accent: '#F59E0B',
        icon: '💼',
        side: 'right',
        logo: '/educa.png',
    },
    {
        period: '2021 – 2024',
        degree: "Computer & Network Engineering",
        school: 'Ihsanul Fikri Vocational High School',
        location: 'Magelang, Indonesia',
        desc: 'Specialized in computer and network systems. Achieved 2nd place in the Web Technology competition (LKS) at the city level in 2023.',
        tags: ['Computer Systems', 'Network Administrator',],
        accent: '#7B2FBE',
        icon: '🎓',
        side: 'left',
        logo: '/SMK.png',
    },
]

/* ── Card component ── */
function TimelineCard({ item, index, inView }) {
    const isLeft = item.side === 'left'

    return (
        <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-0">
            {/* LEFT side */}
            <div className={`${isLeft ? 'flex justify-end pr-8' : ''}`}>
                {isLeft && (
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? 'show' : 'hidden'}
                        custom={0.2 + index * 0.15}
                        className="w-full max-w-sm"
                    >
                        <TimelineCardContent item={item} />
                    </motion.div>
                )}
            </div>

            {/* CENTER — dot */}
            <div className="flex flex-col items-center z-10 px-2">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ delay: 0.1 + index * 0.15, duration: 0.4, type: 'spring' }}
                    className="relative"
                >
                    {/* Glow ring */}
                    <div
                        className="absolute inset-0 rounded-full blur-md opacity-60 scale-150"
                        style={{ background: item.accent }}
                    />
                    {/* Dot */}
                    <div
                        className="relative w-10 h-10 rounded-full flex items-center justify-center text-lg border-2 border-midnight"
                        style={{ background: `linear-gradient(135deg, ${item.accent}cc, ${item.accent}44)`, boxShadow: `0 0 16px ${item.accent}88` }}
                    >
                        {item.icon}
                    </div>
                </motion.div>
            </div>

            {/* RIGHT side */}
            <div className={`${!isLeft ? 'flex justify-start pl-8' : ''}`}>
                {!isLeft && (
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? 'show' : 'hidden'}
                        custom={0.2 + index * 0.15}
                        className="w-full max-w-sm"
                    >
                        <TimelineCardContent item={item} />
                    </motion.div>
                )}
            </div>
        </div>
    )
}

function TimelineCardContent({ item }) {
    return (
        <div
            className="glass rounded-2xl p-5 hover-zoom relative overflow-hidden border border-white/5 group"
            style={{ boxShadow: `0 4px 30px ${item.accent}18` }}
        >
            {/* Accent bar */}
            <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }}
            />
            {/* Hover glow overlay */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${item.accent}0d, transparent 70%)` }}
            />

            {/* Period badge + Logo row */}
            <div className="flex items-center justify-between gap-3 mb-3">
                <span
                    className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{ background: `${item.accent}22`, color: item.accent }}
                >
                    {item.period}
                </span>
                {item.logo && (
                    <div
                        className="flex-shrink-0 flex items-center justify-center rounded-xl p-1.5"
                        style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', width: 56, height: 56 }}
                    >
                        <img
                            src={item.logo}
                            alt={item.school}
                            className="w-full h-full object-contain"
                            style={{ filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.5))' }}
                        />
                    </div>
                )}
            </div>

            <h3 className="text-white font-bold text-base leading-snug mb-2">{item.degree}</h3>
            <p className="text-white/60 text-sm font-medium mb-2">{item.school}</p>
            <p className="text-white/35 text-xs mb-3">{item.location}</p>

            <p className="text-white/45 text-xs leading-relaxed mb-3">{item.desc}</p>


            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md"
                        style={{ background: `${item.accent}15`, color: `${item.accent}cc`, border: `1px solid ${item.accent}25` }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default function AcademicJourney() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="academic" ref={ref} className="relative py-28 overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] blur-3xl"
                    style={{ background: 'radial-gradient(circle, #4285F4, #7B2FBE, transparent)' }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Section label */}
                <motion.div
                    variants={fadeIn} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0}
                    className="flex items-center gap-3 mb-4"
                >
                    <span className="text-xs font-bold tracking-[0.25em] uppercase text-electric/80">02 — Academic</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-electric/30 to-transparent max-w-[120px]" />
                </motion.div>

                <motion.h2
                    variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0.1}
                    className="text-4xl xl:text-5xl font-extrabold mb-4 leading-tight"
                >
                    Academic<br />
                    <span className="gradient-text">Journey</span>
                </motion.h2>

                <motion.p
                    variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0.18}
                    className="text-white/50 text-sm max-w-md mb-16"
                >
                    A path of continuous growth — from theory to practice, shaped by curiosity, and collaboration.
                </motion.p>

                {/* Timeline */}
                <div className="relative">
                    {/* Center vertical line */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                        style={{ transformOrigin: 'top' }}
                        className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
                    >
                        <div
                            className="w-full h-full"
                            style={{
                                background: 'linear-gradient(to bottom, transparent, #4285F488 15%, #7B2FBE88 50%, #00D2FF88 85%, transparent)',
                            }}
                        />
                    </motion.div>

                    {/* Cards */}
                    <div className="flex flex-col gap-12 relative">
                        {timeline.map((item, i) => (
                            <TimelineCard key={item.degree} item={item} index={i} inView={inView} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
