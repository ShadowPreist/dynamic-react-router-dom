import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import {Home,About,Product,Products,Error,User,Users} from "./pages/index"
import { loader as ProductsLoader} from "./pages/Products";
import { loader as DataLoader } from "./pages/Product";
import { loader as UsersLoader } from "./pages/Users";
import { loader as EachUserLoader } from "./pages/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/products", element: <Products />, loader: ProductsLoader },
      { path: "/product/:id", element: <Product />, loader: DataLoader },
      { path: "/users", element: <Users />, loader: UsersLoader},
      { path: "/user/:id", element: <User />, loader: EachUserLoader},
    ],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App