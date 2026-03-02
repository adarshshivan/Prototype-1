# Development Guide

This guide helps developers understand the project structure and best practices.

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ui/             # Low-level UI components (Button, Card, etc.)
│   ├── layout/         # Layout components (Header, Sidebar, etc.)
│   └── ErrorBoundary   # Error boundary for error handling
├── context/            # React Context providers
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── assets/             # Static assets (images, SVGs)
├── App.jsx             # Root component
└── main.jsx            # Entry point
```

## Writing Components

### Functional Components
Always use functional components with hooks:

```jsx
const MyComponent = ({ prop1, prop2 }) => {
    const [state, setState] = useState(null)

    return (
        <div>
            {/* Component JSX */}
        </div>
    )
}

export default MyComponent
```

### Prop Types
Document component props in comments:

```jsx
/**
 * MyComponent
 * @param {string} title - Component title
 * @param {boolean} disabled - Disable component
 * @param {Function} onClick - Click handler
 */
const MyComponent = ({ title, disabled, onClick }) => {
    // ...
}
```

## Styling

### Tailwind CSS
- Use Tailwind for all styling
- Keep responsive classes clean
- Use dark mode variants: `dark:bg-neutral-900`

```jsx
<div className="bg-white dark:bg-neutral-900 p-4 md:p-6 lg:p-8">
    {/* Content */}
</div>
```

## State Management

### Local State
Use `useState` for component-level state:

```jsx
const [isOpen, setIsOpen] = useState(false)
```

### Context
Use Context for app-wide state (theme, notifications):

```jsx
const { theme, toggleTheme } = useTheme()
```

### LocalStorage
Use `useLocalStorage` hook for persistence:

```jsx
const [preferences, setPreferences] = useLocalStorage('prefs', {})
```

## Animations

### Framer Motion
Use the shared `animationConfig` for consistency:

```jsx
import { animationConfig } from '@/utils/animationConfig'

<motion.div variants={animationConfig.fadeInUp} {...animationConfig.transition.default}>
    {/* Content */}
</motion.div>
```

## Accessibility

### Required Practices
- Add `aria-label` for icon-only buttons
- Use semantic HTML (`<button>`, `<nav>`, `<header>`)
- Ensure keyboard navigation works
- Add focus styles for all interactive elements

### Testing Accessibility
- Test with keyboard navigation only
- Use screen reader (Windows: Narrator, Mac: VoiceOver)
- Check color contrast ratios (WCAG AA minimum)

## Git Workflow

### Commit Messages
Follow conventional commits:

```
feat: add new feature
fix: bug fix
docs: documentation update
style: code style changes
refactor: code refactoring
perf: performance improvements
a11y: accessibility improvements
```

### Branch Naming
- `feature/feature-name`
- `fix/bug-description`
- `docs/documentation-update`

## Debugging

### React DevTools
- Install React DevTools browser extension
- Use Profiler tab to identify performance issues
- Use Components tab to inspect component state

### Console Logging
Development mode logs helpful information. Check browser console during development.

## Testing

### Manual Testing Checklist
- [ ] Desktop layout works
- [ ] Tablet layout works
- [ ] Mobile layout works
- [ ] Dark mode works
- [ ] All animations are smooth
- [ ] No console errors

## Performance Tips

1. Use `useCallback` for functions passed as props
2. Use `React.memo` for frequently re-rendering components
3. Use `useDebounce` for search inputs
4. Lazy load heavy components with `React.lazy`
5. Monitor bundle size with `npm run build`

## Resources

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
