# Modern Dashboard Portfolio

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

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
    cd Prototype-1
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

## 🏗️ Project Structure

```bash
src/
├── components/         # Reusable UI components
│   ├── layout/         # Layout components (DashboardLayout, Sidebar)
│   └── ui/             # Basic UI elements (GlassCard, NeoButton)
├── assets/             # Static assets (images, icons)
├── App.jsx             # Main application component & Dashboard logic
├── main.jsx            # Application entry point
└── index.css           # Global styles & Tailwind directives
```

## 🎨 Customization

To customize the color palette or fonts, modify the `tailwind.config.js` file. The glassmorphism effects are primarily defined in `index.css` using utility classes and custom CSS variables.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
---
