import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Donors from './pages/Donors'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import NGOs from './pages/NGOs'
import Contact from './pages/Contact'
import HowToHelp from './pages/HowToHelp'
import Register from './pages/Register/Register'
import RegisterDonor from './pages/Register/RegisterDonor'
import RegisterNGO from './pages/Register/RegisterNGO'
import RegisterCPA from './pages/Register/RegisterCPA'
import DonorDashboard from './pages/Dashboards/DonorDashboard'
import NGODashboard from './pages/Dashboards/NGODashboard'
import Shell from './shell'
  import RequireAuth from './RequireAuth'

export default createBrowserRouter([
  { element: <Shell />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/doadores', element: <Donors /> },
      { path: '/ongs', element: <NGOs /> },
      { path: '/como-ajudar', element: <HowToHelp /> },
      { path: '/contato', element: <Contact /> },
        { path: '/login', element: <Login /> },
        { path: '/dashboard', element: <Dashboard /> },
      { path: '/cadastro', element: <Register /> },
      { path: '/cadastro/doador', element: <RegisterDonor /> },
      { path: '/cadastro/ong', element: <RegisterNGO /> },
      { path: '/cadastro/cpa', element: <RegisterCPA /> },
      { path: '/painel/doador', element: <RequireAuth><DonorDashboard /></RequireAuth> },
      { path: '/painel/ong', element: <RequireAuth><NGODashboard /></RequireAuth> },
    ]}
])
