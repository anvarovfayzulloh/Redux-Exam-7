import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

const Home = lazy(() => import("../routes/home/Home"))
const Auth = lazy(() => import("../routes/auth/Auth"))
const SignUp = lazy(() => import("../routes/auth/signup/SignUp"))
const LogIn = lazy(() => import("../routes/auth/login/LogIn"))
const Details = lazy(() => import("../routes/details/Details"))

const RouterController = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/details/:id",
      element: <Details/>
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
  ])
}

export default RouterController