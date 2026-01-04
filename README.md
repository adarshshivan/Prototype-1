# Modern Dashboard Portfolio

A visually stunning, responsive dashboard application built with React 19 and Vite. This project showcases a modern UI/UX design featuring "Deep Glassmorphism" aesthetics, dynamic animations, and interactive data visualization components.

![Project Preview](https://via.placeholder.com/800x400?text=Dashboard+Preview)

## 🚀 Key Features

*   **Modern Glassmorphism Design**: specific aesthetic choice with translucent layers, vivid gradients, and refined typography.
*   **Interactive Dashboard**: Real-time feel with animated statistics cards and analytics charts.
*   **Responsive Layout**: Fully responsive `DashboardLayout` that adapts seamlessly to desktop and mobile screens.
*   **Dynamic Animations**: Smooth entrance and interaction animations powered by `framer-motion`.
    *   Staggered list animations.
    *   Hover effects on cards and buttons.
    *   Animated counter support for statistics.
*   **Component Library**: Custom reusable UI components including `GlassCard` and `NeoButton`.

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

1.  **Clone the repository** (or download source):
    ```bash
    git clone <repository-url>
    cd <project-folder>
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

Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## 🏗️ Building for Production

To create a production-ready build:

```bash
npm run build
```

This will generate optimized static assets in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── layout/         # Layout components (DashboardLayout, Sidebar, etc.)
│   └── ui/             # Basic UI elements (GlassCard, NeoButton, etc.)
├── assets/             # Static assets (images, icons)
├── App.jsx             # Main application component & Dashboard logic
├── main.jsx            # Application entry point
└── index.css           # Global styles & Tailwind directives
```

## 📄 License

This project is licensed under the MIT License.
