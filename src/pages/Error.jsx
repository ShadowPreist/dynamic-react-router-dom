import { useNavigate } from "react-router-dom"

const Error = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Page Not Found!</h1>
      <button onClick={navigateHandler}>Go back to Home page</button>
    </div>
  )
}

export default Error
