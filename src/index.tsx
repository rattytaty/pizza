import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./data/router";
import LoadingCircle from "./Components/Layout/LoadingCircle";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
<RouterProvider router={router} fallbackElement={<LoadingCircle/>}/>
);


