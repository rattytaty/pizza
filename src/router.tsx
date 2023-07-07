import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "./Components/Pages/ErrorPage";
import PizzasPage from "./Components/Pages/PizzasPage";
import {SodaPage} from "./Components/Pages/SodaPage";
import {Layout} from "./Components/Pages/Layout";
import {HomePage} from "./Components/Pages/HomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                index:true,
                element:<HomePage/>
            },
            {
                path:"pizzas",
                element:<PizzasPage/>
            },
            {
                path: "soda",
                element: <SodaPage/>
            }
        ]
    }
])