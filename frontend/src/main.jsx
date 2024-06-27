import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreateUser from './components/CreateUser.jsx';
import EditUser from './components/EditUser.jsx';
import DeleteUser from './components/DeleteUser.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create",
    element: <CreateUser />,
  },
  {
    path: "edit/:id",
    element: <EditUser />,
  },
  {
    path: "delete/:id",
    element: <DeleteUser />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
