import React from 'react';
import {NavLink} from "react-router-dom";

const Navigator = () => {
    return (
        <aside className="navbar">
            <NavLink to="/tasks" className="flex pt-3 pb-4 hover:bg-purple-900 ">
                <i className='bx bx-border-all text-xl mr-1 ml-4  ' />
                <p className="text-xl font-semibold">Задачи и работы</p>
            </NavLink>
            <NavLink to="/projects" className="flex pt-3 pb-4 hover:bg-purple-900  ">
                <i className='bx bx-border-all mr-1 text-xl  ml-4 ' />
                <p className="text-xl font-semibold">Проекты</p>
            </NavLink>
            <NavLink to="calendar" className="flex pt-3 pb-4 hover:bg-purple-900  ">
                <i className='bx bx-border-all mr-1 text-xl  ml-4 ' />
                <p className="text-xl font-semibold">Календарь</p>
            </NavLink>
            <NavLink to="capabilities" className="flex pt-3 pb-4 hover:bg-purple-900  ">
                <i className='bx bx-border-all mr-1 text-xl ml-4 ' />
                <p className="text-xl font-semibold">Возможности</p>
            </NavLink>
</aside>
    );
};

export default Navigator;