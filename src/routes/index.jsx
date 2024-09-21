import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

import Home from './home/Home'
import Details from './details/Details'
import Auth from './auth/Auth'
import SignUp from './auth/signup/SignUp'
import LogIn from './auth/login/LogIn'



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