import { useState } from 'react'
import './App.css'
import DashboardLayout from './layouts/DashboardLayout'
import { FileText, Briefcase, Users, Folder, Plus, MoreVertical, TrendingUp } from 'lucide-react'

function App() {
  return (
    <DashboardLayout>
      <div className="content-container">
        <div className="page-header">
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">Welcome back! This is your Portfolio Dashboard.</p>
        </div>

        <div className="dashboard-grid">
          <div className="stat-card glass-panel">
            <div className="stat-icon" style={{ color: '#60a5fa' }}>
              <FileText size={24} />
            </div>
            <div className="stat-value">12</div>
            <div className="stat-label">TOTAL DOCUMENTS</div>
            <div style={{ position: 'absolute', right: '1.5rem', top: '1.5rem', color: '#4ade80' }}>
              <TrendingUp size={16} />
            </div>
          </div>

          <div className="stat-card glass-panel">
            <div className="stat-icon" style={{ color: '#c084fc' }}>
              <Briefcase size={24} />
            </div>
            <div className="stat-value">5</div>
            <div className="stat-label">ACTIVE PROJECTS</div>
          </div>

          <div className="stat-card glass-panel">
            <div className="stat-icon" style={{ color: '#f472b6' }}>
              <Users size={24} />
            </div>
            <div className="stat-value">3</div>
            <div className="stat-label">TEAM MEMBERS</div>
          </div>

          <div className="stat-card glass-panel">
            <div className="stat-icon" style={{ color: '#fb923c' }}>
              <Folder size={24} />
            </div>
            <div className="stat-value">8</div>
            <div className="stat-label">FOLDERS</div>
          </div>
        </div>

        <div className="recent-section">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Recent Activity</h2>
            <button className="btn btn-primary">
              <Plus size={18} />
              <span>New Project</span>
            </button>
          </div>

          <div className="glass-panel" style={{ borderRadius: '16px', padding: '1.5rem' }}>
            {/* List Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 50px', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>
              <div>NAME</div>
              <div>DATE</div>
              <div>STATUS</div>
              <div></div>
            </div>

            {/* Item 1 */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 50px', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ padding: '8px', background: 'rgba(96, 165, 250, 0.1)', borderRadius: '8px', color: '#60a5fa' }}>
                  <FileText size={18} />
                </div>
                <span style={{ fontWeight: 500 }}>Project Requirements.pdf</span>
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Oct 24, 2023</div>
              <div><span className="badge badge-primary">In Progress</span></div>
              <button className="icon-btn"><MoreVertical size={18} /></button>
            </div>

            {/* Item 2 */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 50px', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ padding: '8px', background: 'rgba(192, 132, 252, 0.1)', borderRadius: '8px', color: '#c084fc' }}>
                  <Briefcase size={18} />
                </div>
                <span style={{ fontWeight: 500 }}>Marketing Campaign</span>
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Oct 22, 2023</div>
              <div><span className="badge" style={{ background: 'rgba(74, 222, 128, 0.1)', color: '#4ade80', border: '1px solid rgba(74, 222, 128, 0.2)' }}>Completed</span></div>
              <button className="icon-btn"><MoreVertical size={18} /></button>
            </div>

            {/* Item 3 */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 50px', alignItems: 'center', padding: '1rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ padding: '8px', background: 'rgba(244, 114, 182, 0.1)', borderRadius: '8px', color: '#f472b6' }}>
                  <Users size={18} />
                </div>
                <span style={{ fontWeight: 500 }}>Team Meeting Notes</span>
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Oct 20, 2023</div>
              <div><span className="badge" style={{ background: 'rgba(251, 146, 60, 0.1)', color: '#fb923c', border: '1px solid rgba(251, 146, 60, 0.2)' }}>Review</span></div>
              <button className="icon-btn"><MoreVertical size={18} /></button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default App
