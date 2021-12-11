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
    return <div className={'container'}>
        <Header/>
        <Outlet/>
    </div>
}
