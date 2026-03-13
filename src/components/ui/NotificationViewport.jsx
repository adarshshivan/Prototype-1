import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Info, TriangleAlert, X, XCircle } from 'lucide-react'
import { useNotification } from '../../context/NotificationContext'

const notificationStyles = {
    success: {
        icon: CheckCircle2,
        accent: 'text-emerald-500',
        border: 'border-emerald-200 dark:border-emerald-900/60',
    },
    error: {
        icon: XCircle,
        accent: 'text-red-500',
        border: 'border-red-200 dark:border-red-900/60',
    },
    warning: {
        icon: TriangleAlert,
        accent: 'text-amber-500',
        border: 'border-amber-200 dark:border-amber-900/60',
    },
    info: {
        icon: Info,
        accent: 'text-blue-500',
        border: 'border-blue-200 dark:border-blue-900/60',
    },
}

const NotificationViewport = () => {
    const { notifications, removeNotification } = useNotification()

    return (
        <div className="pointer-events-none fixed right-4 top-4 z-[100] flex w-full max-w-sm flex-col gap-3">
            <AnimatePresence>
                {notifications.map((notification) => {
                    const style = notificationStyles[notification.type] ?? notificationStyles.info
                    const Icon = style.icon

                    return (
                        <motion.div
                            key={notification.id}
                            initial={{ opacity: 0, x: 32, scale: 0.96 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 32, scale: 0.96 }}
                            className={`pointer-events-auto rounded-2xl border bg-white/95 p-4 shadow-xl backdrop-blur dark:bg-neutral-950/95 ${style.border}`}
                        >
                            <div className="flex items-start gap-3">
                                <Icon size={18} className={`mt-0.5 ${style.accent}`} />
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-black dark:text-white">{notification.message}</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => removeNotification(notification.id)}
                                    aria-label="Dismiss notification"
                                    className="rounded-lg p-1 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        </motion.div>
                    )
                })}
            </AnimatePresence>
        </div>
    )
}

export default NotificationViewport