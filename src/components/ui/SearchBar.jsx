import { useState } from 'react'
import { Search, X } from 'lucide-react'
import { motion } from 'framer-motion'

const SearchBar = ({ value: controlledValue, onSearch, placeholder = 'Search...', onClear, autoFocus = false }) => {
    const [internalValue, setInternalValue] = useState('')
    const value = controlledValue ?? internalValue

    const handleChange = (e) => {
        const newValue = e.target.value
        if (controlledValue === undefined) {
            setInternalValue(newValue)
        }

        onSearch(newValue)
    }

    const handleClear = () => {
        if (controlledValue === undefined) {
            setInternalValue('')
        }

        onSearch('')
        onClear?.()
    }

    return (
        <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 pointer-events-none" size={18} />
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-transparent focus:border-neutral-300 dark:focus:border-neutral-600 outline-none transition-colors"
                aria-label="Search"
                autoFocus={autoFocus}
            />
            {value && (
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={handleClear}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
                    aria-label="Clear search"
                >
                    <X size={18} />
                </motion.button>
            )}
        </div>
    )
}

export default SearchBar
