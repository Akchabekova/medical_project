import React from 'react';
import Navigator from "../Navigator";
import Header from "../Header";

const Layout = ({children}) => {
    return (
        <div className="row min- h-screen ">
            <div className="columns-xs bg-purple-800 text-white min-h-screen ">
                <div className="header-logo">
                    <i className='bx bx-plus-medical text-xl'></i>
                    <p className="ml-1 text-xl">MIMC</p>
                </div>
                <Navigator />
            </div>
            <div className="w-full">
                <Header />
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;