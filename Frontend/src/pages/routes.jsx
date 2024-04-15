import { DashboardPage } from "./dashboard";
import { Auth } from "./auth";
 
const routes = [
    { path: '/auth', element: <Auth/> },
    { path: '/*', element: <DashboardPage/> }    
]
 
export default routes;