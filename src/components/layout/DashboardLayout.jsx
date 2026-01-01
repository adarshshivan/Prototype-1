import Sidebar from './Sidebar'
import Header from './Header'

const DashboardLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex bg-[var(--bg-dark)] text-[var(--text-main)]">
            {/* Background Mesh Gradients */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[var(--primary)] opacity-20 blur-[120px] rounded-full mix-blend-screen animate-blob" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[var(--secondary)] opacity-10 blur-[120px] rounded-full mix-blend-screen animate-blob animation-delay-2000" />
            </div>

            <Sidebar />

            <main className="flex-1 md:pl-64 flex flex-col relative z-20">
                <Header />
                <div className="flex-1 p-6 md:p-8 overflow-y-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default DashboardLayout
