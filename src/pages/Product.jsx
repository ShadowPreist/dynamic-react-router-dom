import { json,useLoaderData, useNavigate } from "react-router-dom"
import User from "../components/User";

const Product = () => {
  const post = useLoaderData();
  const {title,body,userId} = post;
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  }
  return (
    <>
      <h1>{title}</h1>
      <User userId={userId}/>
      <p>{body}</p>
      <button onClick={navigateHandler}>Go back to products page</button>
    </>
  )
}

export const loader = async ({req,params}) => {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  if(!result.ok) {
    throw json({message: "Cannot find your post"}, {status: 404});
  } else {
    const post = await result.json();
    return post;
  }
}

export default Product