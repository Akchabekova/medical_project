import {React,  useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Projects from "../Projects"

const Login = () => {
// const navigate = useNavigate();
const [useLogin, setUseLogin] = useState("")
const [password, setPassword] = useState('')

const handleAuth = (e) => {
    setUseLogin(e.target.value)
    setPassword(e.target.value)
}

// const handleSubmit = () => {
//  async function handleSubmit(model) {
//   try {
//   await (handleSubmit(model));
//    navigate('/projects');
//    } catch(error) {
//
//             }
//         }


  const handleSubmit = (e) => {
      if( useLogin === "admin" && password === "1234" ){
         return <Navigate to="/projects" />
      } else{
          alert("Неверный пароль или логин")
          setPassword("")
          setUseLogin('')
      }

  }
  return (
        <div>
            <div className="bg-white dark:bg-gray-900">
                <div className="flex justify-center h-screen">
                  <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                        <div className="flex-1">
                            <div className="text-center">
                                <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">MOSCOW INTERNATIONAL MEDICAL CLUSTER</h2>
                        </div>
                               <div className="mt-8">
                                <form>
                                    <div>
                                        <label htmlFor="login"
                                               className="block mb-2 font-semibold text-sm text-gray-600 dark:text-gray-200" >Логин</label>
                                        <input onChange={handleAuth} type="text" name="login" value={useLogin} id="login" placeholder="Логин"
                                               className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border rounded-none border-gray-200 hover:border-fuchsia-500 "/>
                                    </div>
                                    <div className="mt-6">
                                        <div className="flex justify-between mb-2">
                                            <label htmlFor="password"
                                                   className="text-sm  font-semibold text-gray-600 dark:text-gray-200">Пароль</label>
                                        </div>
                                          <input onChange={handleAuth} type="password" name="password" id="password" value={password} placeholder="Пароль"
                                               className="block w-full px-4 py-2 mt-2 text-b-700 placeholder-Fuchsia-400 bg-white border rounded-none border-gray-200 hover:border-fuchsia-500"/>
                                    </div>
                                    <div className="flex items-start mt-6">
                                        <div className="flex items-center h-5 ">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="border border-fuchsia-500 focus:ring-3 h-4 w-4 bg-fuchsia-500 " required="" />
                                        </div>
                                        <div className="text-sm ml-3">
                                            <label htmlFor="remember"
                                                   className="font-medium  font-semibold text-gray-600 dark:text-fuchsia-500">Запомнить меня</label>
                                        </div>
                                    </div>
                                   <div className="mt-6">
                                        <button onClick={handleSubmit}
                                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-fuchsia-500  rounded-none  hover:bg-fuchsia-500 focus:outline-none focus:bg-fuchsia-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                            Sign in
                                        </button>
                                    </div>
                                </form>
                                <div className="mt-4">
                                <a href="#"
                                   className="text-sm font-semibold text-fuchsia-500 focus:text-fuchsia-500 hover:text-fuchsia-500 hover:underline"> Забыли пароль?
                                </a>
                            </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;