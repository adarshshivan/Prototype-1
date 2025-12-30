import { useState } from 'react'
import './App.css'
import DashboardLayout from './layouts/DashboardLayout'
import AnimatedCard from './components/AnimatedCard'
import GlassChart from './components/GlassChart'
import { FileText, Briefcase, Users, Folder, Plus, MoreVertical, TrendingUp, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

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

  return (
    <DashboardLayout>
      <div className="content-container">
        <div className="page-header" style={{ marginBottom: '2.5rem' }}>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="page-title"
          >
            Dashboard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="page-subtitle"
          >
            Welcome back! This is your Portfolio Dashboard.
          </motion.p>
        </div>

        <div className="dashboard-grid">
          <AnimatedCard delay={0.1} className="stat-card">
            <div className="stat-icon" style={{ color: '#60a5fa', background: 'rgba(96, 165, 250, 0.1)' }}>
              <FileText size={24} />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="stat-value"
            >
              12
            </motion.div>
            <div className="stat-label">TOTAL DOCUMENTS</div>
            <div style={{ position: 'absolute', right: '1.5rem', top: '1.5rem', color: '#4ade80' }}>
              <TrendingUp size={16} />
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.2} className="stat-card">
            <div className="stat-icon" style={{ color: '#c084fc', background: 'rgba(192, 132, 252, 0.1)' }}>
              <Briefcase size={24} />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: 'spring' }}
              className="stat-value"
            >
              5
            </motion.div>
            <div className="stat-label">ACTIVE PROJECTS</div>
          </AnimatedCard>

          <AnimatedCard delay={0.3} className="stat-card">
            <div className="stat-icon" style={{ color: '#f472b6', background: 'rgba(244, 114, 182, 0.1)' }}>
              <Users size={24} />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="stat-value"
            >
              3
            </motion.div>
            <div className="stat-label">TEAM MEMBERS</div>
          </AnimatedCard>

          <AnimatedCard delay={0.4} className="stat-card">
            <div className="stat-icon" style={{ color: '#fb923c', background: 'rgba(251, 146, 60, 0.1)' }}>
              <Folder size={24} />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: 'spring' }}
              className="stat-value"
            >
              8
            </motion.div>
            <div className="stat-label">FOLDERS</div>
          </AnimatedCard>
        </div>

        <AnimatedCard delay={0.45} className="glass-panel" style={{ marginBottom: '2rem', padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Analytics Overview</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Project completion trends</p>
            </div>
            <div className="badge" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>+12.5%</div>
          </div>
          <GlassChart />
        </AnimatedCard>

        <div className="recent-section">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              style={{ fontSize: '1.25rem', fontWeight: 600 }}
            >
              Recent Activity
            </motion.h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
            >
              <Plus size={18} />
              <span>New Project</span>
            </motion.button>
          </div>

          <AnimatedCard delay={0.6} style={{ padding: '1.5rem' }}>
            {/* List Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 50px', paddingBottom: '1rem', borderBottom: '1px solid var(--glass-border)', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px' }}>
              <div>NAME</div>
              <div>DATE</div>
              <div>STATUS</div>
              <div></div>
            </div>

            <motion.div variants={containerVariants} initial="hidden" animate="show">
              {/* Item 1 */}
              <motion.div
                variants={itemVariants}
                className="list-row"
                style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 50px', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid var(--glass-border)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ padding: '10px', background: 'rgba(96, 165, 250, 0.1)', borderRadius: '10px', color: '#60a5fa' }}>
                    <FileText size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '1rem' }}>Project Requirements.pdf</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Documentation</div>
                  </div>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Oct 24, 2023</div>
                <div><span className="badge" style={{ background: 'rgba(96, 165, 250, 0.15)', color: '#60a5fa', border: '1px solid rgba(96, 165, 250, 0.2)' }}>In Progress</span></div>
                <button className="icon-btn"><MoreVertical size={18} /></button>
              </motion.div>

              {/* Item 2 */}
              <motion.div
                variants={itemVariants}
                className="list-row"
                style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 50px', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid var(--glass-border)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ padding: '10px', background: 'rgba(192, 132, 252, 0.1)', borderRadius: '10px', color: '#c084fc' }}>
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '1rem' }}>Marketing Campaign</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Marketing</div>
                  </div>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Oct 22, 2023</div>
                <div><span className="badge" style={{ background: 'rgba(74, 222, 128, 0.15)', color: '#4ade80', border: '1px solid rgba(74, 222, 128, 0.2)' }}>Completed</span></div>
                <button className="icon-btn"><MoreVertical size={18} /></button>
              </motion.div>

              {/* Item 3 */}
              <motion.div
                variants={itemVariants}
                className="list-row"
                style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 50px', alignItems: 'center', padding: '1rem 0' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ padding: '10px', background: 'rgba(244, 114, 182, 0.1)', borderRadius: '10px', color: '#f472b6' }}>
                    <Users size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '1rem' }}>Team Meeting Notes</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Internal</div>
                  </div>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Oct 20, 2023</div>
                <div><span className="badge" style={{ background: 'rgba(251, 146, 60, 0.15)', color: '#fb923c', border: '1px solid rgba(251, 146, 60, 0.2)' }}>Review</span></div>
                <button className="icon-btn"><MoreVertical size={18} /></button>
              </motion.div>
            </motion.div>
          </AnimatedCard>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default App
