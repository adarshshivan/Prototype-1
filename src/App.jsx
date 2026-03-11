import { motion } from 'framer-motion' // Used in JSX: motion.div, motion.button
import { useMemo, useState } from 'react'
import DashboardLayout from './components/layout/DashboardLayout'
import GlassCard from './components/ui/GlassCard'
import NeoButton from './components/ui/NeoButton'
import PageHeader from './components/ui/PageHeader'
import ProjectsSection from './components/ui/ProjectsSection'
import { FileText, Briefcase, Users, Folder, Plus, TrendingUp, ArrowRight, Calendar, Activity } from 'lucide-react'
import { formatDate } from './utils/dateUtils'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const stats = [
    { title: 'Documents', value: '12', icon: FileText, trend: '+2.5%' },
    { title: 'Projects', value: '5', icon: Briefcase, trend: '+12%' },
    { title: 'Team Members', value: '3', icon: Users, trend: '0%' },
    { title: 'Folders', value: '8', icon: Folder, trend: '+5%' },
  ]

  const quickActions = [
    { label: 'Schedule', icon: Calendar },
    { label: 'Activity', icon: Activity },
    { label: 'Reports', icon: FileText },
  ]

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
      trendingValue: 12,
    },
    {
      id: 2,
      name: 'Client Portal',
      description: 'Launch a secure document and approvals hub for enterprise clients',
      status: 'active',
      progress: 62,
      deadline: '10 days',
      team: 6,
      trending: true,
      trendingValue: 9,
    },
    {
      id: 3,
      name: 'Marketing Campaign',
      description: 'Coordinate Q2 launch assets, landing pages, and paid acquisition setup',
      status: 'planning',
      progress: 30,
      deadline: '3 weeks',
      team: 4,
      trending: false,
    },
    {
      id: 4,
      name: 'Data Migration',
      description: 'Move reporting workloads from the legacy warehouse to the new cloud stack',
      status: 'pending',
      progress: 45,
      deadline: '1 week',
      team: 3,
      trending: false,
    },
  ]

  const normalizedQuery = searchQuery.trim().toLowerCase()

  const filteredStats = useMemo(() => {
    if (!normalizedQuery) {
      return stats
    }

    return stats.filter((stat) => stat.title.toLowerCase().includes(normalizedQuery))
  }, [normalizedQuery])

  const filteredQuickActions = useMemo(() => {
    if (!normalizedQuery) {
      return quickActions
    }

    return quickActions.filter((action) => action.label.toLowerCase().includes(normalizedQuery))
  }, [normalizedQuery])

  const filteredProjects = useMemo(() => {
    if (!normalizedQuery) {
      return projects
    }

    return projects.filter((project) => {
      const content = `${project.name} ${project.description} ${project.status}`.toLowerCase()
      return content.includes(normalizedQuery)
    })
  }, [normalizedQuery])

  return (
    <DashboardLayout searchValue={searchQuery} onSearchChange={setSearchQuery}>
      <div className="max-w-7xl mx-auto space-y-8 py-8 px-4">

        {/* Page Header */}
        <PageHeader
          title="Dashboard"
          subtitle={`Welcome back! Here's a quick snapshot of your progress for ${formatDate(new Date(), 'DDDD, MMM DD, YYYY')}.`}
          breadcrumbs={[
            { label: 'Workspace', href: '#' },
            { label: 'Dashboard', href: '#' },
          ]}
          action={(
            <div className="flex gap-3">
            <NeoButton variant="secondary">Reports</NeoButton>
            <NeoButton variant="primary">
              <Plus size={16} />
              New Project
            </NeoButton>
            </div>
          )}
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredStats.map((stat, index) => (
            <GlassCard key={stat.title} delay={index * 0.08}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-2">{stat.title}</p>
                  <div className="text-3xl font-bold text-black dark:text-white">{stat.value}</div>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-3 rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900"
                >
                  <stat.icon size={22} className="text-neutral-700 dark:text-neutral-300" />
                </motion.div>
              </div>
              {stat.trend !== '0%' && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-2 rounded-lg w-fit"
                >
                  <TrendingUp size={14} />
                  {stat.trend}
                </motion.div>
              )}
            </GlassCard>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Performance Chart */}
          <GlassCard delay={0.2} className="lg:col-span-2">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-lg font-bold text-black dark:text-white">Performance</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">Last 12 months trend</p>
              </div>
              <div className="flex gap-2">
                {['Month', 'Year'].map(t => (
                  <button key={t} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">{t}</button>
                ))}
              </div>
            </div>

            {/* Chart Bars */}
            <div className="h-64 flex items-end gap-1.5">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: `${h}%`, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.15 + (i * 0.02), ease: 'easeOut' }}
                  whileHover={{ height: `${Math.min(h + 10, 100)}%` }}
                  className="flex-1 bg-gradient-to-t from-black/80 to-black dark:from-white/80 dark:to-white rounded-t-lg transition-all cursor-pointer relative group shadow-sm hover:shadow-md"
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900 dark:bg-neutral-100 px-2.5 py-1 rounded-lg text-xs font-semibold text-white dark:text-black pointer-events-none whitespace-nowrap">
                    {h}%
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>

          {/* Quick Actions Sidebar */}
          <GlassCard delay={0.3}>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-black dark:text-white mb-6">Quick Actions</h3>

              {filteredQuickActions.map((action) => (
                <motion.button
                  key={action.label}
                  whileHover={{ x: 4 }}
                  className="w-full flex items-center justify-between p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <action.icon size={18} className="text-neutral-700 dark:text-neutral-300" />
                    <span className="font-medium text-sm text-black dark:text-white">{action.label}</span>
                  </div>
                  <ArrowRight size={16} className="text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300" />
                </motion.button>
              ))}

              {normalizedQuery && filteredQuickActions.length === 0 && (
                <div className="rounded-lg border border-dashed border-neutral-200 dark:border-neutral-700 px-4 py-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
                  No quick actions match “{searchQuery}”.
                </div>
              )}

              <hr className="border-neutral-200 dark:border-neutral-700 my-2" />

              <NeoButton variant="outline" className="w-full">
                <Plus size={16} />
                View All
              </NeoButton>
            </div>
          </GlassCard>
        </div>

        <ProjectsSection projects={filteredProjects} />

      </div>
    </DashboardLayout>
  )
}

export default App
