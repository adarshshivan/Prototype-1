# Modern Dashboard Portfolio

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

A visually stunning, responsive dashboard application built with **React 19** and **Vite**. This project showcases a modern UI/UX design featuring "Deep Glassmorphism" aesthetics, dynamic animations, and interactive data visualization components.
---

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

Below are some ideas for how this dashboard can evolve next:

- **Real data integration** – Connect the analytics and stats cards to a real API or database (projects, documents, teams) instead of the current dummy values.
- **Authentication & roles** – Add login, user profiles, and role-based access (admin, member, guest) with different visible sections.
- **Configurable widgets** – Allow users to rearrange, resize, add/remove dashboard widgets via drag-and-drop and persist their layout in local storage or a backend.
- **Advanced analytics** – Replace the dummy bar chart with richer visualizations (line charts, pie charts, heatmaps) using a charting library like Recharts or Chart.js.
- **Filtering & search** – Add global search, filters, and date range pickers to quickly slice the data shown across cards and charts.
- **Notifications & activity feed** – Surface recent actions, alerts, and reminders in a dedicated panel or toast system.
- **Multi-theme support** – Extend the current light/dark theming to multiple color schemes (e.g., blue, purple, neutral) with per-user preferences.
- **Responsive improvements** – Further optimize layouts for tablets and small phones (e.g., collapsible sidebar, bottom nav for mobile).
- **Accessibility** – Improve keyboard navigation, focus states, ARIA roles, and color contrast to meet WCAG guidelines.
- **Testing & quality** – Add unit tests for core components, integration tests for flows, and set up a CI pipeline for linting and builds.

These are suggestions only—feel free to adapt them based on your portfolio goals or the story you want this dashboard to tell.
