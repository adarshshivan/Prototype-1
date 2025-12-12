import { useState } from 'react'
import './App.css'
import DashboardLayout from './layouts/DashboardLayout'

function App() {
  return (
    <DashboardLayout>
      <div className="content-container">
        <div className="page-header">
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">Welcome back! Here's your creative space.</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon bg-blue-100 text-blue-600">
              {/* Icon would go here if imported */}
              📄
            </div>
            <div className="stat-value">1</div>
            <div className="stat-label">TOTAL MENU 1</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon bg-purple-100 text-purple-600">
              💼
            </div>
            <div className="stat-value">0</div>
            <div className="stat-label">MENU 2 ENTRIES</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon bg-pink-100 text-pink-600">
              🎓
            </div>
            <div className="stat-value">3</div>
            <div className="stat-label">MENU 3 ENTRIES</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon bg-orange-100 text-orange-600">
              📂
            </div>
            <div className="stat-value">8</div>
            <div className="stat-label">MENU 4 ENTRIES</div>
          </div>
        </div>

        <div className="recent-section">
          <h2 className="section-heading">Recent Items</h2>
          <p className="section-subheading">Manage your items</p>

          <div className="recent-grid">
            <div className="recent-card">
              <div className="file-icon bg-blue-600 text-white">
                📄
              </div>
              <h3 className="file-name">Item Name</h3>
              <p className="file-meta">Edited 1 week ago</p>
              <span className="badge">TAG</span>
            </div>

            <div className="create-card">
              <div className="plus-icon">+</div>
              <h3>Create New Item</h3>
              <p>Start from scratch</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default App
