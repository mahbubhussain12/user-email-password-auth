import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className="mx-auto w-9/12">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;