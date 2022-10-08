import { useLocalStorage  } from "react-use"
import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom"

import { Home } from './Home'
import { Login } from './Login'
import { Cadastro } from './Cadastro'
import { Dashboard } from './Dashboard'
import { Perfil } from './Perfil'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/:username",
    element: <Perfil />,
  },
])

export const Router = () => (
  <RouterProvider router={router} />
)