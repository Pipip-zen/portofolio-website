import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'py-3 glass border-b border-white/10 shadow-glow-card'
                : 'py-5 bg-transparent'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#"
                    className="relative group flex items-center"
                    whileHover={{ scale: 0.97 }}
                >
                    <img src="/logo-rn.svg" alt="RN Logo" className="h-8 w-auto" />
                </motion.a>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <motion.li
                            key={link.label}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i + 0.3, duration: 0.4 }}
                        >
                            <a
                                href={link.href}
                                className="relative text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric group-hover:w-full transition-all duration-300 rounded-full" />
                            </a>
                        </motion.li>
                    ))}
                </ul>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    className="hidden md:block"
                >
                    <a href="#contact" className="btn-primary text-xs px-5 py-2.5">
                        Let's Talk
                    </a>
                </motion.div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </nav>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={menuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="md:hidden overflow-hidden"
            >
                <div className="px-6 py-4 flex flex-col gap-4 glass border-t border-white/10">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a href="#contact" className="btn-primary text-xs w-fit">
                        Let's Talk
                    </a>
                </div>
            </motion.div>
        </motion.header>
    )
}
