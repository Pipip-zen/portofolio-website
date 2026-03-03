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

export default function CodeStats() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const username = 'Pipip-zen'

    // Theme configuration for GitHub stats
    const statsTheme = "theme=transparent&hide_border=true&title_color=4285F4&icon_color=4285F4&text_color=ffffff99&text_bold=false"
    const streakTheme = "theme=transparent&hide_border=true&stroke=4285F4&ring=4285F4&fire=F59E0B&currStreakNum=ffffff&sideLabels=ffffff99&dates=ffffff99"

    const githubStats = [
        {
            title: 'GitHub Stats',
            icon: '📊',
            url: `https://github-readme-stats-one-zeta.vercel.app/api?username=${username}&show_icons=true&${statsTheme}`,
            source: 'LIVE VIA MIRROR-STATS',
            accent: '#4285F4'
        },
        {
            title: 'Streak',
            icon: '🔥',
            url: `https://github-readme-streak-stats.herokuapp.com/?user=${username}&${streakTheme}`,
            source: 'LIVE VIA STREAK-STATS',
            accent: '#F59E0B'
        },
        {
            title: 'Top Languages',
            icon: '💻',
            url: `https://github-readme-stats-one-zeta.vercel.app/api/top-langs/?username=${username}&layout=compact&${statsTheme}`,
            source: 'LIVE VIA MIRROR-STATS',
            accent: '#7B2FBE'
        }
    ]

    return (
        <section id="activity" ref={ref} className="relative py-28 overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full opacity-[0.03] blur-3xl"
                    style={{ background: 'radial-gradient(circle, #4285F4, transparent)' }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Section label */}
                <motion.div
                    variants={fadeIn} initial="hidden" animate={isInView ? 'show' : 'hidden'} custom={0}
                    className="flex items-center gap-3 mb-4"
                >
                    <span className="text-xs font-bold tracking-[0.25em] uppercase text-electric/80">04 — Activity</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-electric/30 to-transparent max-w-[120px]" />
                </motion.div>

                <motion.h2
                    variants={fadeUp} initial="hidden" animate={isInView ? 'show' : 'hidden'} custom={0.1}
                    className="text-4xl xl:text-5xl font-extrabold mb-4 leading-tight"
                >
                    Code <span className="gradient-text">Stats</span>
                </motion.h2>

                <motion.p
                    variants={fadeUp} initial="hidden" animate={isInView ? 'show' : 'hidden'} custom={0.18}
                    className="text-white/50 text-sm max-w-md mb-16"
                >
                    Real numbers, real activity — live from GitHub & personal benchmarks.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {githubStats.map((stat, i) => (
                        <motion.div
                            key={stat.title}
                            variants={fadeUp} initial="hidden" animate={isInView ? 'show' : 'hidden'} custom={0.2 + i * 0.1}
                            className="glass rounded-2xl p-6 relative overflow-hidden group border border-white/5"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-xl p-2 rounded-xl bg-white/5">{stat.icon}</span>
                                <h3 className="text-white/70 font-bold text-xs uppercase tracking-widest">{stat.title}</h3>
                            </div>

                            <div className="w-full flex justify-center items-center min-h-[160px] bg-midnight/30 rounded-xl overflow-hidden mb-4">
                                <img
                                    src={stat.url}
                                    alt={stat.title}
                                    className="max-w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'block';
                                    }}
                                />
                                <div className="hidden text-white/20 text-xs italic">Unable to load — check username</div>
                            </div>

                            <div className="flex items-center gap-1.5 opacity-40">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-[9px] font-bold uppercase tracking-wider text-white">{stat.source}</span>
                            </div>
                        </motion.div>
                    ))}

                    {/* Typing Speed Card - Custom Implementation matching screenshot */}
                    <motion.div
                        variants={fadeUp} initial="hidden" animate={isInView ? 'show' : 'hidden'} custom={0.5}
                        className="glass rounded-2xl p-6 relative overflow-hidden group border border-white/5"
                        style={{ borderLeft: '2px solid #7B2FBE22' }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-xl p-2 rounded-xl bg-white/5">⌨️</span>
                            <h3 className="text-white/70 font-bold text-xs uppercase tracking-widest">Typing Speed</h3>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex items-baseline gap-3">
                                <span className="text-7xl font-black italic tracking-tighter gradient-text leading-none">75</span>
                                <span className="text-white/40 font-bold text-sm tracking-widest">WPM</span>
                            </div>
                            <p className="text-white/30 text-[9px] font-bold uppercase tracking-[0.2em] -mt-4">Words Per Minute</p>

                            <div className="space-y-4">
                                {/* Accuracy */}
                                <div className="space-y-1.5">
                                    <div className="flex justify-between text-[10px] font-bold tracking-wider">
                                        <span className="text-white/40 uppercase">Accuracy</span>
                                        <span className="text-white/80">90.19%</span>
                                    </div>
                                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={isInView ? { width: '90.19%' } : { width: 0 }}
                                            transition={{ duration: 1.5, delay: 0.8 }}
                                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_8px_rgba(66,133,244,0.4)]"
                                        />
                                    </div>
                                </div>

                                {/* Correct Words */}
                                <div className="space-y-1.5">
                                    <div className="flex justify-between text-[10px] font-bold tracking-wider">
                                        <span className="text-white/40 uppercase">Correct Words</span>
                                        <span className="text-white/80">63 / 66</span>
                                    </div>
                                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={isInView ? { width: '95%' } : { width: 0 }}
                                            transition={{ duration: 1.5, delay: 1 }}
                                            className="h-full bg-gradient-to-r from-green-500 to-emerald-400 shadow-[0_0_8px_rgba(34,197,94,0.4)]"
                                        />
                                    </div>
                                </div>

                                {/* Text sample from screenshot */}
                                <div className="mt-4 p-4 rounded-xl bg-midnight/40 border border-white/5 font-mono text-xs whitespace-nowrap overflow-hidden">
                                    <span className="text-white/70">const</span> <span className="text-blue-400">solution</span> <span className="text-white/70">=</span> <span className="text-emerald-400">buildAndDeliv</span>
                                    <span className="w-1.5 h-3.5 bg-electric inline-block ml-1 animate-pulse align-middle" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center gap-1.5 opacity-40">
                            <div className="w-1.5 h-1.5 rounded-full bg-electric" />
                            <span className="text-[9px] font-bold uppercase tracking-wider text-white">TESTED VIA 10FASTFINGERS.COM</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
