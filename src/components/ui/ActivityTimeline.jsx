import { motion } from 'framer-motion'
import { GitCommit, Clock } from 'lucide-react'

const ActivityTimeline = () => {
    const activities = [
        {
            id: 1,
            type: 'project',
            title: 'New project created',
            description: 'Marketing campaign dashboard',
            time: '2 minutes ago',
            color: 'bg-blue-500'
        },
        {
            id: 2,
            type: 'document',
            title: 'Document uploaded',
            description: 'Q4 Financial Report.pdf',
            time: '1 hour ago',
            color: 'bg-green-500'
        },
        {
            id: 3,
            type: 'team',
            title: 'Team member joined',
            description: 'Sarah joined Design Team',
            time: '3 hours ago',
            color: 'bg-purple-500'
        },
        {
            id: 4,
            type: 'update',
            title: 'Project milestone reached',
            description: 'Website redesign 75% complete',
            time: '5 hours ago',
            color: 'bg-orange-500'
        },
        {
            id: 5,
            type: 'meeting',
            title: 'Meeting completed',
            description: 'Weekly standup with team',
            time: '1 day ago',
            color: 'bg-pink-500'
        },
    ]

    return (
        <div className="space-y-1">
            {activities.map((activity, index) => (
                <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 pb-6 last:pb-0"
                >
                    {/* Timeline line */}
                    {index !== activities.length - 1 && (
                        <div className="absolute left-[11px] top-8 w-[2px] h-full bg-neutral-200 dark:bg-neutral-700"></div>
                    )}

                    {/* Timeline dot */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        className={`absolute left-0 top-1.5 w-6 h-6 ${activity.color} rounded-full flex items-center justify-center shadow-lg`}
                    >
                        <GitCommit size={14} className="text-white" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        whileHover={{ x: 4 }}
                        className="bg-neutral-50 dark:bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer border border-neutral-200 dark:border-neutral-700"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                                <h4 className="font-semibold text-sm text-black dark:text-white mb-1">
                                    {activity.title}
                                </h4>
                                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                                    {activity.description}
                                </p>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 whitespace-nowrap">
                                <Clock size={12} />
                                {activity.time}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    )
}

export default ActivityTimeline
