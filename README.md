# Modern Dashboard Portfolio

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

A visually stunning, responsive dashboard application built with **React 19** and **Vite**. This project showcases a modern UI/UX design featuring "Deep Glassmorphism" aesthetics, dynamic animations, and interactive data visualization components.
---

## 🆕 Recent Updates (March 2026)

### New Utilities & Hooks Added
- **Custom Hooks**: `useLocalStorage`, `useDebounce`, `useUserPreferences`
- **Utility Modules**: Form validation, date formatting, string manipulation, array processing
- **Context Systems**: Notification system with auto-dismiss
- **Components**: LoadingSkeleton, SearchBar, PageHeader, ErrorBoundary

- Daily small improvements recorded in `CHANGELOG.md` for traceability.

### Improved Features
- Accessibility enhancements (ARIA labels, keyboard navigation)
- Animation configuration for consistency
- Analytics tracking utility
- Environment variables template
- Comprehensive form validation patterns

## 🆕 Recent Activity (February 5, 2026)

- Added a quick note about small UI and copy refinements.

## 🚀 Key Features

| Feature | Description |
| :--- | :--- |
| **✨ Modern Glassmorphism** | Aesthetic choice with translucent layers, vivid gradients, and refined typography. |
| **📊 Interactive Dashboard** | Real-time feel with animated statistics cards and analytics charts. |
| **📱 Fully Responsive** | `DashboardLayout` adapts seamlessly to desktop, tablet, and mobile screens. |
| **⚡ Dynamic Animations** | Powered by `framer-motion`: staggered lists, hover effects, and animated counters. |
| **🧩 Component Library** | Custom reusable UI components including `GlassCard` and `NeoButton`. |

## 🛠️ Tech Stack

*   **Framework**: [React 19](https://react.dev/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Linting**: ESLint

## 📦 Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites

*   [Node.js](https://nodejs.org/) (Latest LTS version recommended)
*   npm (comes with Node.js)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd "Prototype 1"
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

### Running Locally

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

## 📜 Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `dev` | `npm run dev` | Starts the development server. |
| `build` | `npm run build` | Builds the app for production to the `dist` folder. |
| `lint` | `npm run lint` | Runs ESLint to check for code quality issues. |
| `preview` | `npm run preview` | Locally preview the production build. |

## 📂 Project Structure

The core app lives in the `src` directory:

- `src/main.jsx` – app entry point and React bootstrap.
- `src/App.jsx` – main dashboard screen and content.
- `src/components/layout/DashboardLayout.jsx` – shell layout, sidebar, and glass background.
- `src/components/layout/Sidebar.jsx` – navigation and primary layout controls.
- `src/components/ui/GlassCard.jsx` – reusable glassmorphism card for stats and panels.
- `src/components/ui/NeoButton.jsx` – primary/secondary CTA buttons with neumorphic styling.
- `src/components/ui/ThemeToggle.jsx` – UI control to switch between light/dark themes.
- `src/context/ThemeContext.jsx` – light/dark theme state, provider, and helpers.
- `src/index.css` & `src/App.css` – base styles, tokens, and custom utilities.

There is also a `legacy_backup` folder containing an older static HTML/CSS version kept for reference.

## 🎨 Customization

To customize the color palette or fonts, modify the `tailwind.config.js` file. The glassmorphism effects are primarily defined in `index.css` using utility classes and custom CSS variables.

---

## 🌱 Future Enhancements

Below are ideas for how this dashboard can evolve to better serve users:

### Core Features
- **Real data integration** – Connect the analytics and stats cards to a real API or database (projects, documents, teams) instead of the current dummy values.
- **Authentication & roles** – Add login, user profiles, and role-based access (admin, member, guest) with different visible sections and permissions.
- **Configurable widgets** – Allow users to rearrange, resize, add/remove dashboard widgets via drag-and-drop and persist their layout in local storage or a backend.
- **Advanced analytics** – Replace the dummy bar chart with richer visualizations (line charts, pie charts, heatmaps) using a charting library like Recharts or Chart.js.

### User Experience Improvements
- **Search & filtering** – Add global search functionality and advanced filters to quickly find projects, tasks, or analytics data.
- **Real-time notifications** – Implement push notifications for important events, updates, or alerts with a notification center/bell icon.
- **Custom dashboards** – Allow each user to create and manage multiple personalized dashboard views based on their role and preferences.
- **Dark/Light theme refinements** – Enhance the existing theme toggle with additional color schemes and auto-detection based on system preferences.
- **Keyboard shortcuts** – Add keyboard navigation and shortcuts for power users to increase productivity.

### Data & Reporting
- **Export functionality** – Enable users to export dashboard data, reports, and charts in formats like PDF, CSV, and Excel.
- **Scheduled reports** – Allow users to schedule automated report generation and email delivery.
- **Data insights & recommendations** – Provide AI-powered suggestions based on analytics trends and patterns.
- **Historical tracking** – Store and display data trends over time with comparison views (week-over-week, month-over-month).

### Collaboration & Sharing
- **Team collaboration** – Add features for team members to comment, share insights, and collaborate on dashboard items.
- **Shareable dashboard links** – Generate public or private links to share specific dashboard views with stakeholders.
- **Activity feed** – Display recent updates, changes, and team activities on the dashboard.

### Performance & Infrastructure
- **Caching & optimization** – Implement intelligent caching strategies and code splitting for faster load times.
- **PWA capabilities** – Convert the app to a Progressive Web App for offline access and installability.
- **Mobile app** – Develop native or cross-platform mobile apps (React Native/Flutter) for on-the-go access.
- **Performance monitoring** – Add analytics to track app performance, load times, and user engagement metrics.

### Developer Experience
- **API documentation** – Create comprehensive API docs for developers to extend the dashboard with custom integrations.
- **Plugin system** – Build a plugin architecture to allow third-party extensions and custom components.
- **Testing suite** – Expand with unit tests, integration tests, and E2E tests for reliability and maintainability.
- **Storybook integration** – Add Storybook for component documentation and isolated component development.
- **Filtering & search** – Add global search, filters, and date range pickers to quickly slice the data shown across cards and charts.
- **Notifications & activity feed** – Surface recent actions, alerts, and reminders in a dedicated panel or toast system.
- **Multi-theme support** – Extend the current light/dark theming to multiple color schemes (e.g., blue, purple, neutral) with per-user preferences.
- **Responsive improvements** – Further optimize layouts for tablets and small phones (e.g., collapsible sidebar, bottom nav for mobile).
- **Accessibility** – Improve keyboard navigation, focus states, ARIA roles, and color contrast to meet WCAG guidelines.
- **Testing & quality** – Add unit tests for core components, integration tests for flows, and set up a CI pipeline for linting and builds.

These are suggestions only—feel free to adapt them based on your portfolio goals or the story you want this dashboard to tell.
