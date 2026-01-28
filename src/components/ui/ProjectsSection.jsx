import { motion } from 'framer-motion'
import { TrendingUp, Clock, Users, MoreVertical } from 'lucide-react'

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-white dark:bg-neutral-900 rounded-xl p-5 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-lg transition-all duration-300"
        >
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h3 className="font-bold text-base text-black dark:text-white mb-1">
                        {project.name}
                    </h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        project.status === 'active' 
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                            : project.status === 'pending'
                            ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                            : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                    }`}>
                        {project.status}
                    </span>
                </div>
                <button className="p-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                    <MoreVertical size={16} className="text-neutral-400" />
                </button>
            </div>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                {project.description}
            </p>

            {/* Progress Bar */}
            <div className="mb-4">
                <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-neutral-600 dark:text-neutral-400">Progress</span>
                    <span className="font-semibold text-black dark:text-white">{project.progress}%</span>
                </div>
                <div className="h-2 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        className={`h-full rounded-full ${
                            project.progress >= 75
                                ? 'bg-green-500'
                                : project.progress >= 50
                                ? 'bg-blue-500'
                                : 'bg-yellow-500'
                        }`}
                    ></motion.div>
                </div>
            </div>

            {/* Project Stats */}
            <div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                        <Clock size={14} />
                        <span>{project.deadline}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                        <Users size={14} />
                        <span>{project.team}</span>
                    </div>
                </div>
                {project.trending && (
                    <div className="flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400">
                        <TrendingUp size={14} />
                        <span>+{project.trendingValue}%</span>
                    </div>
                )}
            </div>
        </motion.div>
    )
}

const ProjectsSection = () => {
    const projects = [
        {
            id: 1,
            name: 'Website Redesign',
            description: 'Complete overhaul of company website with modern UI/UX',
            status: 'active',
            progress: 75,
            deadline: '2 weeks',
            team: 5,
            trending: true,
            trendingValue: 12
        },
        {
            id: 2,
            name: 'Mobile App',
            description: 'Cross-platform mobile application development',
            status: 'active',
            progress: 60,
            deadline: '1 month',
            team: 8,
            trending: true,
            trendingValue: 8
        },
        {
            id: 3,
            name: 'Marketing Campaign',
            description: 'Q1 digital marketing strategy and execution',
            status: 'planning',
            progress: 30,
            deadline: '3 weeks',
            team: 4,
            trending: false
        },
        {
            id: 4,
            name: 'Data Migration',
            description: 'Legacy system data migration to cloud infrastructure',
            status: 'pending',
            progress: 45,
            deadline: '1 week',
            team: 3,
            trending: false
        },
    ]

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-black dark:text-white">Active Projects</h2>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                        Track your ongoing projects
                    </p>
                </div>
                <button className="text-sm font-medium text-black dark:text-white hover:underline">
                    View all
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </div>
    )
}

export default ProjectsSection
