import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Roots/Roots';
import Home from './Components/Pages/Home/Home';
import Statistics from './Components/Pages/Statistics/Statistics';
import AppliedJobs from './Components/Pages/AppliedJobs/AppliedJobs';
import Blog from './Components/Pages/Blog/Blog';
import ErrorPage from './Components/Pages/ErrorPage/ErrorPage';
import JobDetails from './Components/FeaturesJob/JobDetails';
import axios from 'axios';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: ({ params }) => fetch(`../public/jobs.json`),
      },
      {
        path: "/jobDetails/:id",
        loader: ({ params }) => fetch(`../public/jobs.json`),
        element: <JobDetails></JobDetails>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
