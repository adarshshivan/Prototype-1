import { motion } from 'framer-motion'
import { LayoutDashboard, Folder, Users, Settings, PieChart, Menu } from 'lucide-react'
import { useState } from 'react'

const Sidebar = () => {
    const [active, setActive] = useState('Dashboard')

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard' },
        { icon: Folder, label: 'Projects' },
        { icon: Users, label: 'Team' },
        { icon: PieChart, label: 'Analytics' },
        { icon: Settings, label: 'Settings' },
    ]

    return (
        <motion.aside
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="fixed left-0 top-0 h-full w-64 glass-panel border-r border-white/10 z-50 hidden md:flex flex-col"
        >
            <div className="p-8">
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 tracking-tight">
                    NEXUS
                </h1>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {menuItems.map((item) => (
                    <div key={item.label} className="relative">
                        {active === item.label && (
                            <motion.div
                                layoutId="active-pill"
                                className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-20 rounded-xl"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}

                        <button
                            onClick={() => setActive(item.label)}
                            className={`relative w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-colors duration-200 group ${active === item.label ? 'text-white' : 'text-[var(--text-muted)] hover:text-white'
                                }`}
                        >
                            <item.icon size={20} className={`transition-transform duration-300 ${active === item.label ? 'scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'group-hover:scale-110'}`} />
                            <span className="font-medium tracking-wide">{item.label}</span>

                            {active === item.label && (
                                <motion.div
                                    layoutId="active-glow"
                                    className="absolute left-0 w-1 h-6 bg-[var(--secondary)] rounded-r-full blur-[2px]"
                                />
                            )}
                        </button>
                    </div>
                ))}
            </nav>

            <div className="p-4 m-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/20">
                        A
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <h4 className="text-sm font-semibold truncate text-white">Adarsh</h4>
                        <p className="text-xs text-[var(--text-muted)] truncate">Pro Member</p>
                    </div>
                </div>
            </div>
        </motion.aside>
    )
}

export default Sidebar
