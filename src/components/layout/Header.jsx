import { motion, AnimatePresence } from 'framer-motion'
import { Search, Bell, Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header = ({ onToggleSidebar, isSidebarOpen }) => {
    const [showSearch, setShowSearch] = useState(false)
    const [notifications, setNotifications] = useState(3)
    const [showNotifications, setShowNotifications] = useState(false)

    const notificationList = [
        { id: 1, text: 'New project assigned to you', time: '5m ago', unread: true },
        { id: 2, text: 'Team meeting in 30 minutes', time: '15m ago', unread: true },
        { id: 3, text: 'Report completed successfully', time: '1h ago', unread: true },
        { id: 4, text: 'Budget update available', time: '2h ago', unread: false },
    ]

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="sticky top-0 z-40 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800"
        >
            <div className="flex items-center justify-between px-4 py-4">
                {/* Left Section */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={onToggleSidebar}
                        className="md:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    >
                        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                    
                    <button
                        onClick={() => setShowSearch(!showSearch)}
                        className="hidden md:flex p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    >
                        <Search size={20} className="text-neutral-600 dark:text-neutral-400" />
                    </button>

                    <AnimatePresence>
                        {showSearch && (
                            <motion.div
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: 300, opacity: 1 }}
                                exit={{ width: 0, opacity: 0 }}
                                className="hidden md:block"
                            >
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                                    autoFocus
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-3">
                    {/* Mobile Search */}
                    <button className="md:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                        <Search size={20} className="text-neutral-600 dark:text-neutral-400" />
                    </button>

                    {/* Notifications */}
                    <div className="relative">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowNotifications(!showNotifications)}
                            className="relative p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        >
                            <Bell size={20} className="text-neutral-600 dark:text-neutral-400" />
                            {notifications > 0 && (
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            )}
                        </motion.button>

                        <AnimatePresence>
                            {showNotifications && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    className="absolute right-0 mt-2 w-80 bg-white dark:bg-neutral-900 rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden"
                                >
                                    <div className="px-4 py-3 border-b border-neutral-200 dark:border-neutral-800">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-semibold text-black dark:text-white">Notifications</h3>
                                            <span className="text-xs bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-full">
                                                {notifications} new
                                            </span>
                                        </div>
                                    </div>
                                    <div className="max-h-96 overflow-y-auto">
                                        {notificationList.map((notif) => (
                                            <motion.div
                                                key={notif.id}
                                                whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
                                                className={`px-4 py-3 border-b border-neutral-100 dark:border-neutral-800 cursor-pointer ${
                                                    notif.unread ? 'bg-blue-50/50 dark:bg-blue-950/20' : ''
                                                }`}
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div className={`w-2 h-2 rounded-full mt-1.5 ${notif.unread ? 'bg-blue-500' : 'bg-neutral-300 dark:bg-neutral-700'}`}></div>
                                                    <div className="flex-1">
                                                        <p className="text-sm text-black dark:text-white">{notif.text}</p>
                                                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{notif.time}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="px-4 py-3 border-t border-neutral-200 dark:border-neutral-800">
                                        <button className="w-full text-sm font-medium text-black dark:text-white hover:underline">
                                            View all notifications
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* User Profile */}
                    <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-neutral-200 dark:border-neutral-700">
                        <div className="w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-semibold text-sm">
                            A
                        </div>
                    </div>
                </div>
            </div>
        </motion.header>
    )
}

export default Header
