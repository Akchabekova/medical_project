import React from 'react';
import avatar from "../assets/images/avatar.webp";

const Header = () => {
    return (
        <div className="bg-gray-100 p-3 ">
                <img src={avatar} alt="avatar" className="h-9 w-9 rounded-full block ml-auto  "/>
            </div>
    );
};

export default Header;