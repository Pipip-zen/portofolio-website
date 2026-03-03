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
        period: '2019 – 2023',
        degree: "Bachelor's in Informatics Engineering",
        school: 'University of Technology',
        location: 'Bandung, Indonesia',
        gpa: '3.87 / 4.00',
        desc: 'Specialized in software architecture and human-computer interaction. Graduated Cum Laude with a thesis on real-time distributed systems.',
        tags: ['Algorithms', 'HCI', 'Distributed Systems', 'Database Design'],
        accent: '#4285F4',
        icon: '🎓',
        side: 'left',
    },
    {
        period: '2023 – 2025',
        degree: "Master's in Computer Science",
        school: 'Institute of Advanced Technology',
        location: 'Jakarta, Indonesia',
        gpa: '3.94 / 4.00',
        desc: 'Research focus on neural rendering and real-time computer graphics. Collaborated with industry partners on interactive media installations.',
        tags: ['Neural Rendering', 'Computer Vision', 'WebGL', 'Deep Learning'],
        accent: '#7B2FBE',
        icon: '🔬',
        side: 'right',
    },
    {
        period: '2023',
        degree: 'Exchange Program',
        school: 'Seoul National University',
        location: 'Seoul, South Korea',
        gpa: 'Distinction',
        desc: 'Semester abroad focused on AI-driven UX research and advanced prototyping methodologies within the Digital Innovation Lab.',
        tags: ['UX Research', 'Prototyping', 'AI/UI', 'Innovation'],
        accent: '#00D2FF',
        icon: '🌏',
        side: 'left',
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

            {/* Period badge */}
            <span
                className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3"
                style={{ background: `${item.accent}22`, color: item.accent }}
            >
                {item.period}
            </span>

            <h3 className="text-white font-bold text-base leading-snug mb-0.5">{item.degree}</h3>
            <p className="text-white/60 text-sm font-medium">{item.school}</p>
            <p className="text-white/35 text-xs mb-3">{item.location}</p>

            {/* GPA */}
            <div
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg mb-3"
                style={{ background: `${item.accent}18`, color: item.accent }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                GPA {item.gpa}
            </div>

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
                    A path of continuous growth — from theory to practice, shaped by research, curiosity, and collaboration.
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
