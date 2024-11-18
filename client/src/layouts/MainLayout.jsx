import Sidebar from "../components/Sidebar.jsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className={'w-screen h-screen overflow-hidden lg:px-36 flex flex-col items-center py-4 gap-4'}>
            <Sidebar/>
            <div className="bg-base-200 grow overflow-hidden rounded-xl p-6 w-full flex flex-col items-center justify-center">
                <Outlet/>
            </div>
        </div>
    )
}
export default MainLayout