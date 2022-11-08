import Main from "../../layout/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`https://genius-car-server-jade-pi.vercel.app/services/${params.id}`),
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path: "/orders",
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            }
        ]
    }
])

export default router;