import { Link, useLoaderData } from "react-router-dom";
import User from "../components/User";


const Products = () => {
  const PRODUCTS = useLoaderData();
  return (
    <div className="card">
      {PRODUCTS.map((item) => (
        <Link to={`/product/${item.id}`} key={item.id}>
          <div className="item">
            <p>{item.title}</p>
            <User userId={item.userId}/>
          </div>
        </Link>
      ))}
    </div>
  );
}

export const loader = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!result.ok) {
    throw new Error(result.statusText)
  } else {
    const data = await result.json();
    return data;
  }
}

export default Products