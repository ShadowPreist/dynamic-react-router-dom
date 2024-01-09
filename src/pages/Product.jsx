import { useNavigate, useParams } from "react-router-dom"

const Product = () => {
  const {title} = useParams();
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  }
  return (
    <>
      <h1>Dynamic Route Page</h1>
      <p>This page is built using a dynamic route. Fruit name is {title}</p>
      <button onClick={navigateHandler}>Go back to products page</button>
    </>
  )
}

export default Product