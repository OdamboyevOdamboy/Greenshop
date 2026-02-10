import { createBrowserRouter } from "react-router-dom"
import App from "../../App"
import Home from "../Home"
import Shop from "../Shop"
import Plant from "../Plant"
import Blogs from "../Blogs"
const rout=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"/shop",
        element:<Shop/>
      },
      {
        path:"/plant",
        element:<Plant/>
      },
      {
        path:"/blogs",
        element:<Blogs/>
      }
    ]
  }
])
export default rout