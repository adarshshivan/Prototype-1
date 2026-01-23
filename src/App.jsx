import { motion } from 'framer-motion'
import DashboardLayout from './components/layout/DashboardLayout'
import GlassCard from './components/ui/GlassCard'
import NeoButton from './components/ui/NeoButton'
import { FileText, Briefcase, Users, Folder, Plus, TrendingUp } from 'lucide-react'

function App() {
  const stats = [
    { title: 'Documents', value: '12', icon: FileText, trend: '+2.5%' },
    { title: 'Projects', value: '5', icon: Briefcase, trend: '+12%' },
    { title: 'Team Members', value: '3', icon: Users, trend: '0%' },
    { title: 'Folders', value: '8', icon: Folder, trend: '+5%' },
  ]

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-8 py-8">

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-black dark:text-white mb-2"
            >
              Dashboard
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-neutral-600 dark:text-neutral-400"
            >
              Welcome back! Here's your overview.
            </motion.p>
          </div>
          <div className="flex gap-3">
            <NeoButton variant="secondary">Reports</NeoButton>
            <NeoButton variant="primary">
              <Plus size={16} />
              New Project
            </NeoButton>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <GlassCard
              key={stat.title}
              delay={index * 0.05}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400 mb-2">{stat.title}</p>
                  <div className="text-2xl font-bold text-black dark:text-white">{stat.value}</div>
                </div>
                <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800">
                  <stat.icon size={20} className="text-neutral-600 dark:text-neutral-400" />
                </div>
              </div>
              {stat.trend !== '0%' && (
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400">
                  <TrendingUp size={12} />
                  {stat.trend}
                </div>
              )}
            </GlassCard>
          ))}
        </div>

        {/* Analytics Section */}
        <GlassCard delay={0.2}>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold text-black dark:text-white">Performance</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">Last 12 months</p>
            </div>
            <div className="flex gap-2">
              {['Month', 'Year'].map(t => (
                <button key={t} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">{t}</button>
              ))}
            </div>
          </div>

          {/* Simple Chart */}
          <div className="h-64 flex items-end gap-1.5">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: 0.1 + (i * 0.03), type: 'spring', stiffness: 100 }}
                className="flex-1 bg-black dark:bg-white opacity-80 hover:opacity-100 rounded-t-md transition-opacity cursor-pointer relative group"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-800 dark:bg-white px-2 py-1 rounded text-xs text-white dark:text-black pointer-events-none whitespace-nowrap">
                  {h}%
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>

      </div>
    </DashboardLayout>
  )
}

export default App
