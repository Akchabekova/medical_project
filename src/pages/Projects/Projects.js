import React, {useEffect, useState} from 'react';
import axios from "axios";
import Layout from "../../components/Layout";
import AddProjectModal from "../AddProjectModal";
import ProjectCards from "../../components/ProjectCards";
import FlexMenu from "../../components/FlexMenu";



const Projects = ({flexBar, setFlexBar}) => {
const [ projects, setProjects ] = useState([])
const [ isLoading, setIsLoading ] = useState(true)
const [ openModal, setOpenModal ] = useState(false)

   useEffect(()  => {
        axios.get("https://62b34e1e4f851f87f458b306.mockapi.io/projects")
        .then((res) => {
            setProjects(res.data)
            setIsLoading(false)
        })
    },[])

  if(isLoading){
        return "Loading ..."
    }

return (
       <Layout>
       <div className="flex">
       <div className="title p-4 ml-4">Проекты</div>
       </div>
           <div className="project-list ml-8">
               <p className=" text-gray-700 text-base font-medium uppercase border-b-2 border-y-violet-900 p-1  ">Список Проектов</p>
               <p className="text-gray-400 ml-8 text-base font-medium uppercase p-1">Дорожные Карты</p>
           </div>
           <div className="flex">
               <p className="uppercase ml-8 text-xl mt-8 text-gray-600">Список проектов</p>
               <button onClick={() =>{
                   setOpenModal(true)
               }} className="text-white p-2.5 font-semibold bg-fuchsia-600 block ml-auto mt-7 h-1/5">
                   Добавить проект
               </button>
           </div>

           {
               openModal

                && <AddProjectModal
                   setOpenModal={setOpenModal}
                   projects={projects}
                   setProjects={setProjects}
                   flexBar = {flexBar}
                   setFlexBar = {setFlexBar}

               />
           }
           <div className="flex">

               {
                   projects.map((item) => (
                       <div className="project-card bg-white-900 shadow-2xl" key={item.id}>
                           <div className="project-card-item relative ">
                               <div className="h-11 w-11 overflow-hidden rounded-full " >
                                   <img src={item.image}  />
                               </div>
                               <div className="text-violet-900 bg-white rounded pl-1 absolute left-2 top-2.5  ">Медицина</div>
                               <div className="text-white bg-violet-700 rounded p-1 absolute right-2 top-2.5 ">Строится</div>
                               <div>{item.name}</div>
                           </div >
                       </div>
                    ))
               }
               <FlexMenu />

           </div>
       </Layout>

 );
 };

export default Projects;

