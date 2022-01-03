import Header from "./components/Header";
import {Outlet, useRoutes} from "react-router-dom";
import PartyConfiguration from "./components/PartyConfiguration";



export default function App() {
    let routes = [
        {
            path: "/",
            element: <Layout/>,
            children: [
                {index: true, element: <PartyConfiguration/>},
            ]
        }
    ];
    let element = useRoutes(routes);

    return (
        <div>
            {element}
        </div>
    );
}


function Layout(){
    return <div className={'col-lg-8 mx-auto'}>
        <Header/>
        <Outlet/>
    </div>
}
