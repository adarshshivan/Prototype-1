import { Search, Bell } from 'lucide-react'

const Header = () => {
    return (
        <header className="h-20 px-8 flex items-center justify-between glass-panel sticky top-0 z-40 border-b border-white/5">
            {/* Search Bar - hidden on mobile purely for this demo layout */}
            <div className="hidden md:flex items-center flex-1 max-w-md relative group">
                <Search className="absolute left-3 text-[var(--text-muted)] group-focus-within:text-[var(--secondary)] transition-colors" size={20} />
                <input
                    type="text"
                    placeholder="Search projects..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[var(--primary-glow)] focus:ring-1 focus:ring-[var(--primary-glow)] transition-all"
                />
            </div>

            <div className="flex items-center gap-4 ml-auto">
                <button className="relative p-2.5 rounded-full hover:bg-white/10 transition-colors text-[var(--text-muted)] hover:text-white">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-[var(--accent-pink)] rounded-full animate-pulse" />
                </button>
            </div>
        </header>
    )
}

export default Header
