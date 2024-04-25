import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Outer from './pages/Outer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outer />
  }
])


export default function App() {
  return(
    <RouterProvider router={router}/>
  )
}