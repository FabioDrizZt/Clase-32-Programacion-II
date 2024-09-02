import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <h1>Bienvenido 🌟</h1>
      <Outlet />
      <Footer />
    </>
  )
}
