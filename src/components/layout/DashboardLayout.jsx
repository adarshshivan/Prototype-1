import Sidebar from './Sidebar'

const DashboardLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex bg-white dark:bg-neutral-950">
            <Sidebar />

            <main className="flex-1 md:pl-64 flex flex-col bg-gradient-to-br from-white via-neutral-50 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default DashboardLayout
