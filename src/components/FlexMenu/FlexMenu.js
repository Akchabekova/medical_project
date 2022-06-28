import React from 'react';
import {useState} from "react";
import {NavLink} from "react-router-dom";

const FlexMenu = () => {
const [ flexBar, setFlexBar ] = useState(true)

 const changeInline = ( index ) => {
        setFlexBar(true)
    }

 const changeBlock = ( index ) => {
        setFlexBar(false)
    }

  return (
        <div className="flex ml-auto  ">
            <div  className="text-gray-400 cursor-pointer text-xl mr-2  active:text-purple-800">
                <button onClick={ () => changeBlock(1)}>
                    <i className='bx bxs-grid' />
                </button>
            </div>
            <div className="text-gray-400 cursor-pointer text-xl active:text-purple-800">
                <button onClick={ () => changeInline(2)}>
                    <i className='bx bx-align-left' />
                </button>
            </div>
         </div>
    );
};

export default FlexMenu;