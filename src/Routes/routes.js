import { Home, LoginSignup } from '../Components/pages';

const Navigationroute = [
    {
        path : "/" ,
        element: <Home/>
    },
    {
        path : "/signin" ,
        element: <LoginSignup/>
    }
]

export default Navigationroute;