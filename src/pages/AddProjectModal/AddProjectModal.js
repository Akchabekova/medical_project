import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const AddProjectModal = ({setOpenModal, projects, setProjects}) => {
 const formik = useFormik({
        initialValues: {
            name: '',
            image: '',
            date_start: '',
            date_end: '',
            director: '',
            manager: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, 'Must be 15 characters or less')
                .required('Обязательные данные'),
            image: Yup.string()
                .max(20, 'Must be a image')
                .required('Обязательные данные'),
            date_start: Yup.string()
                .max(20, 'Must be 25 characters or less')
                .required('Обязательные данные'),
            date_end: Yup.string()
                .max(20, 'Must be 25 characters or less')
                .required('Обязательные данные'),
            director: Yup.string()
                .max(20, 'Must be 25 characters or less')
                .required('Обязательные данные'),
            manager: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Обязательные данные'),
        }),
        onSubmit: async ( values ) => {
            const addProject = await axios.post("https://62b34e1e4f851f87f458b306.mockapi.io/projects", values)
            setProjects( [...projects, addProject.data])
            setOpenModal(false)
        }
    })
 return (
         <div className="App">
                    <div className="fixed top-0 right-0 left-0 bottom-0 m-0-auto justify-center flex  bg-white pt-10 max-w-full ">
                        <div
                            className="absolute right-9 top-5 cursor-pointer text-red-600 text-2xl "
                            onClick={() => {
                                setOpenModal(false);
                            }}
                        >
                            <i className='bx bx-x' />
                        </div>
                        <form onSubmit={ formik.handleSubmit }>
                             <div className="bg-white shadow rounded-lg p-6 w-screen ">
                                    <div className="grid lg:grid-cols-2 gap-6">
                                        <div
                                            className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-2">
                                            <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                                <p>
                                                    <label htmlFor="name" className="bg-white text-gray-600 px-1">Название</label>
                                                </p>
                                            </div>
                                            <p>
                                                <input onChange={formik.handleSubmit}
                                                       id="name"
                                                       name="name"
                                                       type="text"
                                                       className="py-1 px-1 text-gray-900 outline-none block h-full w-full"
                                                       value={formik.values.name}
                                                />
                                            </p>
                                        </div>
                                        <div
                                            className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-2">
                                            <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                                <p>
                                                    <label htmlFor="image" className="bg-white text-gray-600 px-1">Изображение</label>
                                                </p>
                                            </div>
                                            <p>
                                                <input onChange={formik.handleSubmit}
                                                       name="image"
                                                       type="image"
                                                       id="image"
                                                       className="py-1 px-1 outline-none block h-full w-full"
                                                       value={formik.values.image}/>
                                            </p>
                                        </div>
                                        <div
                                            className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-2">
                                            <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                                <p>
                                                    <label htmlFor="date_start" className="bg-white text-gray-600 px-1">Начало проекта</label>
                                                </p>
                                            </div>
                                            <p>
                                                <input onChange={formik.handleSubmit}
                                                       name="date_start"
                                                       type="date"
                                                       id="date_start"
                                                       className="py-1 px-1 outline-none block h-full w-full"
                                                       value={formik.date_start}/>
                                            </p>
                                        </div>
                                        <div
                                            className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-2">
                                            <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                                <p>
                                                    <label htmlFor="date_end" className="bg-white text-gray-600 px-1">Конец проекта</label>
                                                </p>
                                            </div>
                                            <p>
                                                <input onChange={formik.handleSubmit}
                                                       name="date_end"
                                                       type="date"
                                                       id="date_end"
                                                       className="py-1 px-1 outline-none block h-full w-full"
                                                       value={formik.date_end}/>
                                            </p>
                                        </div>
                                        <div
                                            className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-2">
                                            <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                                <p>
                                                    <label htmlFor="director" className="bg-white text-gray-600 px-1">Супервайзер</label>
                                                </p>
                                            </div>
                                            <p>
                                                <input onChange={formik.handleSubmit}
                                                       name="director"
                                                       type="text"
                                                       id="director"
                                                       className="py-1 px-1 outline-none block h-full w-full text-black"
                                                       value={formik.values.director}/>
                                            </p>
                                        </div>
                                        <div
                                            className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-2">
                                            <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                                <p>
                                                    <label htmlFor="manager" className="bg-white text-gray-600 px-1">Администратор</label>
                                                </p>
                                            </div>
                                            <p>
                                                <input onChange={formik.handleSubmit}
                                                       name="manager"
                                                       type="text"
                                                       id="manager"
                                                       className="py-1 px-1 outline-none block h-full w-full"
                                                       value={formik.values.manager}/>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="border-t mt-6 pt-3">
                                        <button
                                            className="rounded text-gray-100 px-3 py-1 bg-green-600 hover:shadow-inner hover:bg-violet-700 block ml-auto">
                                            {"Save"}
                                        </button>
                                    </div>
                                </div>
                        </form>
                   </div>
                </div>
 )
};

export default AddProjectModal;

