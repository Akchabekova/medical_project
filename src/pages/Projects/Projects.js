import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import axios from "axios";
import AddProjectModal from "../AddProjectModal";

const Projects = () => {
const [projects, setProjects ] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [openModal, setOpenModal] = useState(false)

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
       <div className="title p-4">Проекты</div>
        <button onClick={() =>{
            setOpenModal(true)
       }} className="text-white p-2 font-semibold bg-violet-500 block ml-auto mt-4 h-1/5">
            Добавить проект
        </button>
       </div>
           <p className="text-purple-800 ml-6 text-lg font-medium uppercase ">Список Проектов</p>
           {
               openModal && <AddProjectModal
                   setOpenModal={setOpenModal}
                   projects = {projects}
                   setProjects = {setProjects}
               />
           }
        </Layout>
 );
 };

export default Projects;

