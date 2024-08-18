import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home'
import todosLoader from './loaders/todosLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element : <Home />,
    loader : todosLoader
  }
])
const App = () => {
  return (
    <RouterProvider router = {router} />
  )
}

export default App