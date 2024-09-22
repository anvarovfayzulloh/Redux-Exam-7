import { useRoutes } from 'react-router-dom'

import Home from './home/Home'
import Details from './details/Details'
import Auth from './auth/Auth'
import SignUp from './auth/signup/SignUp'
import LogIn from './auth/login/LogIn'
import Profile from './profile/Profile'
import Sidebar from '../components/sidebar/Sidebar'
import NotFound from "./notfound/NotFound"
import Nav from '../components/nav/Nav'
import Create from './create/Create'

const Layout = ({ children }) => (
  <>
    <Nav />
    <main>{children}</main>
  </>
);

const RouterController = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout><Home/></Layout>
    },
    {
      path: "/create",
      element: <Create/>
    },
    {
      path: "/details/:id",
      element: <Layout><Details/></Layout>
    },
    {
      path: "/profile",
      element: <Profile/>
    },
    {
      path: "/auth",
      element: <Auth/>,
      children:[
        {
          path: "/auth/signUp",
          element: <SignUp/>
        },
        {
          path: "/auth/logIn",
          element: <LogIn/>
        }
      ]
    },
    {
      path: "*",
      element: <NotFound/>
    },
  ])
}

export default RouterController