import { Link, Outlet } from 'react-router-dom'

export default function Shop({ data }) {
  return (
    <>
      <h3>Listado de productos</h3>
      <Outlet />
      <ul>
        {data.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
