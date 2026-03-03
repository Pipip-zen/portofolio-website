import { motion } from 'framer-motion'

export default function Footer() {
    const scrollTop = (e) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="relative border-t border-white/[0.06] py-6 overflow-hidden">
            {/* Subtle glow line at top */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(66,133,244,0.4), rgba(123,47,190,0.4), transparent)' }}
            />

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

                    {/* LEFT — Logo + name */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex items-center gap-3"
                    >
                        <span
                            className="text-xl font-extrabold tracking-tighter"
                            style={{ color: '#4285F4' }}
                        >
                            ME
                        </span>
                        <div className="h-4 w-px bg-white/15" />
                        <div>
                            <p className="text-white/70 text-xs font-semibold leading-tight">Your Name</p>
                            <p className="text-white/30 text-[10px]">Full-Stack Developer &amp; Designer</p>
                        </div>
                    </motion.div>

                    {/* CENTER — Copyright */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/30 text-xs text-center"
                    >
                        © {new Date().getFullYear()} · Built with{' '}
                        <span style={{ color: '#4285F4' }} className="font-semibold">passion</span>
                        {' '}and{' '}
                        <span style={{ color: '#7B2FBE' }} className="font-semibold">precision</span>
                    </motion.p>

                    {/* RIGHT — Back to top */}
                    <motion.a
                        href="#hero"
                        onClick={scrollTop}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="group inline-flex items-center gap-1.5 text-xs font-semibold text-white/40 hover:text-electric transition-colors duration-200"
                    >
                        Back to top
                        <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                    </motion.a>
                </div>
            </div>
        </footer>
    )
}
