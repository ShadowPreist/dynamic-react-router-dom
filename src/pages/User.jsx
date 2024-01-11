import { useLoaderData } from "react-router-dom";

const User = () => {
  const userData = useLoaderData();
  const {name,username,address,phone} = userData;
  return (
    <>
      <div className="item">
        <h1>Name: {name}</h1>
        <h2>User name: {username}</h2>
        <p>Zip code: {address.zipcode}</p>
        <p>Phone No: {phone}</p>
      </div>
    </>
  )
}

export const loader = async ({req,header}) => {
  const result = await fetch(`https://jsonplaceholder.typicode.com/users/${header.id}`);
  if(!result.ok) {
    throw new Error(result.statusText);
  } else {
    const data = result.json();
    return data;
  }
}

export default User