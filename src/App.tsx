import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth'
import LandingPage from './components/landing/LandingPage'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import ForgotPassword from './components/auth/ForgotPassword'
import DashboardLayout from './components/dashboard/DashboardLayout'
import Overview from './components/dashboard/Overview'
import Team from './components/dashboard/Team'
import Settings from './components/dashboard/Settings'
import Placeholder from './components/dashboard/Placeholder'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Dashboard (protected) */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="projects" element={<Placeholder title="Projets" />} />
            <Route path="documents" element={<Placeholder title="Documents" />} />
            <Route path="analytics" element={<Placeholder title="Analytics" />} />
            <Route path="team" element={<Team />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
