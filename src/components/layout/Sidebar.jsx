import { motion } from 'framer-motion'
import { LayoutDashboard, Bitcoin, Users, Settings, PieChart, Menu } from 'lucide-react'
import { useState } from 'react'
import ThemeToggle from '../ui/ThemeToggle'

const Sidebar = () => {
    const [active, setActive] = useState('Dashboard')

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard' },
        { icon: Bitcoin, label: 'Crypto' },
        { icon: Users, label: 'Team' },
        { icon: PieChart, label: 'Analytics' },
        { icon: Settings, label: 'Settings' },
    ]

    return (
        <motion.aside
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-neutral-950 border-r border-neutral-200 dark:border-neutral-800 z-50 hidden md:flex flex-col"
        >
            <div className="p-6">
                <h1 className="text-xl font-bold text-black dark:text-white tracking-tight">
                    Nexus
                </h1>
            </div>

            <nav className="flex-1 px-4 space-y-1">
                {menuItems.map((item) => (
                    <div key={item.label}>
                        <button
                            onClick={() => setActive(item.label)}
                            className={`relative w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors duration-200 ${active === item.label ? 'bg-black dark:bg-white text-white dark:text-black' : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                                }`}
                        >
                            <item.icon size={18} />
                            <span className="font-medium text-sm">{item.label}</span>
                        </button>
                    </div>
                ))}
            </nav>

            <div className="mt-auto px-4 pb-6 space-y-4">
                <div className="flex items-center justify-between text-xs font-medium text-neutral-600 dark:text-neutral-400">
                    <span>Theme</span>
                    <ThemeToggle />
                </div>

                <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-4 transition-colors duration-500">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-semibold text-sm">
                            A
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <h4 className="text-sm font-semibold truncate text-black dark:text-white">Adarsh</h4>
                            <p className="text-xs text-neutral-600 dark:text-neutral-400 truncate">Pro Member</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.aside>
    )
}

export default Sidebar
