import { motion } from 'framer-motion'
import DashboardLayout from './components/layout/DashboardLayout'
import GlassCard from './components/ui/GlassCard'
import NeoButton from './components/ui/NeoButton'
import { FileText, Briefcase, Users, Folder, Plus, TrendingUp } from 'lucide-react'

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  }

  const stats = [
    { title: 'TOTAL DOCUMENTS', value: '12', icon: FileText, color: '#a78bfa', trend: '+2.5%' },
    { title: 'ACTIVE PROJECTS', value: '5', icon: Briefcase, color: '#2dd4bf', trend: '+12%' },
    { title: 'TEAM MEMBERS', value: '3', icon: Users, color: '#f472b6', trend: '0%' },
    { title: 'FOLDERS', value: '8', icon: Folder, color: '#fb923c', trend: '+5%' },
  ]

  

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-white mb-2 tracking-tight"
            >
              Dashboard
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[var(--text-muted)]"
            >
              Welcome back! Here's what's happening today.
            </motion.p>
          </div>
          <div className="flex gap-3">
            <NeoButton variant="secondary">View Reports</NeoButton>
            <NeoButton variant="primary">
              <Plus size={18} />
              New Project
            </NeoButton>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <GlassCard
              key={stat.title}
              delay={index * 0.1}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-xl bg-white/5 text-white" style={{ color: stat.color }}>
                  <stat.icon size={24} />
                </div>
                {stat.trend !== '0%' && (
                  <div className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                    <TrendingUp size={12} />
                    {stat.trend}
                  </div>
                )}
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs font-semibold tracking-wider text-[var(--text-muted)]">{stat.title}</div>
            </GlassCard>
          ))}
        </div>

        {/* Analytics & Activity Split */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Analytics Chart Section */}
          <GlassCard className="lg:col-span-3 min-h-[400px] flex flex-col" delay={0.4}>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-xl font-bold text-white">Analytics Overview</h3>
                <p className="text-sm text-[var(--text-muted)]">Project completion trends</p>
              </div>
              <div className="flex gap-2">
                {['Day', 'Week', 'Month'].map(t => (
                  <button key={t} className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 text-[var(--text-muted)] hover:text-white transition-colors">{t}</button>
                ))}
              </div>
            </div>

            {/* Dummy Chart Visualization */}
            <div className="flex-1 w-full overflow-x-auto px-4 pb-4">
              <div className="flex items-end gap-2 min-w-[520px]">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.05), type: 'spring' }}
                    className="flex-none w-6 sm:w-8 md:w-10 bg-gradient-to-t from-[var(--primary)]/20 to-[var(--primary)] rounded-t-lg relative group"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded text-xs text-white pointer-events-none">
                      {h}%
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassCard>

          

        </div>
      </div>
    </DashboardLayout>
  )
}

export default App
