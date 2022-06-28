import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import axios from "axios";
import AddProjectModal from "../AddProjectModal";
import ProjectCards from "../../components/ProjectCards";
import FlexMenu from "../../components/FlexMenu";



const Projects = ({flexBar, setFlexBar}) => {
const [ projects, setProjects ] = useState([])
const [ isLoading, setIsLoading ] = useState(true)
const [ openModal, setOpenModal ] = useState(false)


    useEffect(()  => {
        axios("https://62b34e1e4f851f87f458b306.mockapi.io/projects")
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
               }} className="text-white p-2 font-semibold bg-fuchsia-500 block ml-auto mt-8 h-1/5">
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
               <ProjectCards />
               <FlexMenu />
           </div>
       </Layout>

 );
 };

export default Projects;

