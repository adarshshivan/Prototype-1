import { motion } from 'framer-motion'

const PageHeader = ({ title, subtitle, action, breadcrumbs }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
        >
            {breadcrumbs && (
                <nav className="mb-4 flex gap-2 text-sm text-neutral-600 dark:text-neutral-400" aria-label="Breadcrumb">
                    {breadcrumbs.map((crumb, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            {idx > 0 && <span>/</span>}
                            <a href={crumb.href} className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                                {crumb.label}
                            </a>
                        </div>
                    ))}
                </nav>
            )}
            <div className="flex items-start justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-bold text-black dark:text-white mb-2">{title}</h1>
                    {subtitle && <p className="text-neutral-600 dark:text-neutral-400 text-lg">{subtitle}</p>}
                </div>
                {action && <div>{action}</div>}
            </div>
        </motion.div>
    )
}

export default PageHeader
