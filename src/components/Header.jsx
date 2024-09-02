import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <img
        src="https://themanufacturer-cdn-1.s3.eu-west-2.amazonaws.com/wp-content/uploads/2020/10/14142831/1_Mesa-de-trabajo-1-copia-5-1024x500.jpg"
        alt="banner ML"
        width={'100%'}
        height={'400px'}
      />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Shop">Shop</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
