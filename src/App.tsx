import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import type { User, NavItem } from './types'

const mockUser: User = {
  id: '1',
  name: 'Dr. Sarah Chen',
  email: 'sarah.chen@ithera.health',
  role: 'clinician',
}

const sidebarItems: NavItem[] = [
  { label: 'Dashboard',  href: '/dashboard' },
  { label: 'Pacientes',  href: '/patients' },
  { label: 'Reportes',   href: '/reports' },
  { label: 'Ajustes',    href: '/settings' },
]

const navLinks: NavItem[] = [
  { label: 'Ayuda', href: '/help' },
  { label: 'Docs',  href: '/docs' },
]

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [activeHref, setActiveHref] = useState('/dashboard')

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar
        user={mockUser}
        navLinks={navLinks}
        onLogout={() => console.log('logout')}
      />
      <Sidebar
        navItems={sidebarItems}
        activeHref={activeHref}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed((prev) => !prev)}
        onNavigate={setActiveHref}
      />
      <main
        className={`pt-16 transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}
      >
        <div className="p-6">
          <h1 className="font-heading text-2xl font-semibold text-primary mb-2">Dashboard</h1>
          <p className="font-body text-sm text-gray-500">Sección activa: {activeHref}</p>
        </div>
      </main>
    </div>
  )
}

export default App
