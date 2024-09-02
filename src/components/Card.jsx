import { useParams } from 'react-router-dom'

export default function Card({ data }) {
  const params = useParams()
  const product = data?.find((prod) => prod.id === params.id)
  return (
    <div>
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <img src={product?.thumbnail} alt={product?.title} />
    </div>
  )
}
