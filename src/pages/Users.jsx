import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const USERS = useLoaderData();
  return (
    <>
      {USERS.map((userInfo) => (
        <Link to={`/user/${userInfo.id}`}>
          <div className="item">
            <p>user name: {userInfo.username}</p>
            <p>email address: {userInfo.email}</p>
            <p>street name: {userInfo.address.street}</p>
            <p>city: {userInfo.address.city}</p>
            <p>website url: {userInfo.website}</p>
            <p>company name: {userInfo.company.name}</p>
          </div>
        </Link>
      ))}
    </>
  );
}

export const loader = async () => {

  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!result.ok) {
    throw new Error(result.statusText)
  } else {
    const data = result.json();
    return data;
  }
}
export default Users