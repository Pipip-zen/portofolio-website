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

/* ── Skill categories ── */
const skillCategories = [
    {
        title: 'Frontend',
        icon: '🖥️',
        accent: '#4285F4',
        skills: [
            { name: 'HTML / CSS', proficiency: 'Confident' },
            { name: 'Tailwind CSS', proficiency: 'Confident' },
            { name: 'React / Vue JS', proficiency: 'Familiar' },
        ],
    },
    {
        title: 'Backend',
        icon: '⚙️',
        accent: '#7B2FBE',
        skills: [
            { name: 'PHP / Laravel', proficiency: 'Confident' },
            { name: 'Python', proficiency: 'Familiar' },
        ],
    },
    {
        title: 'Creative & Vision',
        icon: '🤖',
        accent: '#EC4899',
        skills: [
            { name: 'Three.js & WebGL', proficiency: 'Confident' },
            { name: 'Babylon.js', proficiency: 'Confident' },
            { name: 'OpenCV', proficiency: 'Familiar' },
        ],
    },
    {
        title: 'DevOps & Tools',
        icon: '🛠️',
        accent: '#22C55E',
        skills: [
            { name: 'Git / GitHub', proficiency: 'Confident' },
            { name: 'AWS / Vercel', proficiency: 'Confident' },
            { name: 'Docker', proficiency: 'Familiar' },
            { name: 'Figma', proficiency: 'Familiar' },
        ],
    },
]

/* ── Interests ── */
const interests = [
    { icon: '🎮', title: 'Gaming' },
    { icon: '🎬', title: 'Film' },
    { icon: '⚔️', title: 'Medieval History' },
    { icon: '👓', title: 'Nerd Stuff' },
    { icon: '🌐', title: 'Tech Exploration' },
    { icon: '⌨️', title: 'Tech Gear Enthusiast' },
]

/* ── Skill row ── */
function SkillItem({ skill, accent, inView, delay }) {
    const isConfident = skill.proficiency.toLowerCase() === 'confident'

    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay }}
            className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0"
        >
            <span className="text-white/80 text-sm font-medium">{skill.name}</span>
            <span
                className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md"
                style={{
                    color: isConfident ? accent : 'rgba(255,255,255,0.6)',
                    background: isConfident ? `${accent}15` : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${isConfident ? `${accent}30` : 'rgba(255,255,255,0.1)'}`
                }}
            >
                {skill.proficiency}
            </span>
        </motion.div>
    )
}

export default function TechnicalArsenal() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="skills" ref={ref} className="relative py-28 overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-0 left-1/4 w-[500px] h-[400px] rounded-full opacity-[0.05] blur-3xl"
                    style={{ background: 'radial-gradient(circle, #4285F4, transparent)' }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-3xl"
                    style={{ background: 'radial-gradient(circle, #EC4899, transparent)' }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Section label */}
                <motion.div
                    variants={fadeIn} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0}
                    className="flex items-center gap-3 mb-4"
                >
                    <span className="text-xs font-bold tracking-[0.25em] uppercase text-electric/80">03 — Arsenal</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-electric/30 to-transparent max-w-[120px]" />
                </motion.div>

                <motion.h2
                    variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0.1}
                    className="text-4xl xl:text-5xl font-extrabold mb-4 leading-tight"
                >
                    Technical<br />
                    <span className="gradient-text">Arsenal</span>
                </motion.h2>

                <motion.p
                    variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0.18}
                    className="text-white/50 text-sm max-w-md mb-14"
                >
                    A curated stack of tools and technologies I use daily to build high-impact products.
                </motion.p>

                {/* 4-column skill grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
                    {skillCategories.map((cat, ci) => (
                        <motion.div
                            key={cat.title}
                            variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0.2 + ci * 0.1}
                            className="glass rounded-2xl p-5 hover-zoom relative overflow-hidden group border border-white/5"
                            style={{ boxShadow: `0 4px 30px ${cat.accent}12` }}
                        >
                            {/* Accent top bar */}
                            <div
                                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                                style={{ background: `linear-gradient(90deg, ${cat.accent}, transparent)` }}
                            />
                            {/* Hover overlay */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                                style={{ background: `radial-gradient(ellipse at top, ${cat.accent}0a, transparent 70%)` }}
                            />

                            {/* Title */}
                            <div className="flex items-center gap-2 mb-5">
                                <span
                                    className="text-xl w-9 h-9 flex items-center justify-center rounded-xl"
                                    style={{ background: `${cat.accent}20` }}
                                >
                                    {cat.icon}
                                </span>
                                <h3 className="text-white font-bold text-sm">{cat.title}</h3>
                            </div>

                            {/* Skills */}
                            <div className="flex flex-col">
                                {cat.skills.map((skill, si) => (
                                    <SkillItem
                                        key={skill.name}
                                        skill={skill}
                                        accent={cat.accent}
                                        inView={inView}
                                        delay={0.3 + ci * 0.1 + si * 0.07}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Divider */}
                <motion.div
                    variants={fadeIn} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0.6}
                    className="flex items-center gap-4 mb-10"
                >
                    <div className="flex-1 h-px bg-white/8" />
                    <span className="text-white/30 text-xs font-semibold uppercase tracking-widest px-3">Personal Interests</span>
                    <div className="flex-1 h-px bg-white/8" />
                </motion.div>

                {/* 6-column interests grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {interests.map((item, i) => (
                        <motion.div
                            key={item.title}
                            variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0.65 + i * 0.07}
                            className="glass rounded-2xl p-4 hover-zoom flex flex-col items-center gap-2 text-center border border-white/5 group cursor-pointer"
                        >
                            <span
                                className="text-2xl w-11 h-11 flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                                style={{ background: 'rgba(255,255,255,0.07)' }}
                            >
                                {item.icon}
                            </span>
                            <p className="text-white/60 text-xs font-semibold">{item.title}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
