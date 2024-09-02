import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ErrorComponent from './pages/ErrorComponent'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Card from './components/Card'

export default function App() {
  const [data, setData] = useState([])
  const url = 'https://api.mercadolibre.com/sites/MLA/search?q=zapatillas'

  useEffect(() => {
    axios(url).then((res) => setData(res.data.results))
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/Shop" element={<Shop data={data} />}>
              <Route path="/Shop/:id" element={<Card data={data} />} />
            </Route>
            <Route path="/Contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
