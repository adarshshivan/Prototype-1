import React from 'react'
import { AlertCircle } from 'lucide-react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error }
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo)
    }

    reset = () => {
        this.setState({ hasError: false, error: null })
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-neutral-950 text-center p-6">
                    <AlertCircle size={48} className="text-red-500 mb-4" />
                    <h1 className="text-2xl font-bold text-black dark:text-white mb-2">Something went wrong</h1>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6">{this.state.error?.message}</p>
                    <button
                        onClick={this.reset}
                        className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:shadow-lg transition-all"
                    >
                        Try Again
                    </button>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
