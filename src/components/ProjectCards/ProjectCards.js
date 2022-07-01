import React from 'react';


const ProjectCards = ({ item }) => {
    return (
        <>

                   <div className="project-card bg-white-900 shadow-2xl" key={item.id}>
                <div className="project-card-item relative ">
                    <div className="h-11 w-11 overflow-hidden rounded-full " >
                        {/*<img src={item.image}  />*/}
                    </div>
                    <div className="text-violet-900 bg-white rounded pl-1 absolute left-2 top-2.5  ">{item.manager}</div>
                    <div className="text-white bg-violet-700 rounded p-1 absolute right-2 top-2.5 ">Строится</div>
                    <div>{item.name}</div>
                </div >
            </div>



        </>
    );
};

export default ProjectCards;
