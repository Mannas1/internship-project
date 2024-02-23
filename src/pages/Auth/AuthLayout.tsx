import {  Outlet } from "react-router-dom"

const AuthLayout = () => {
    return (
        
        <>
        
        <div className="bg-black text-white flex h-screen ">
                
                <div className=" w-1/2 h-full flex flex-col justify-center  items-center max-md:w-full">
                    <h2 className="text-2xl mb-9">DeepLogic AI</h2>
                    <div className="w-96 border bg-gray-600 p-7 rounded-lg h-auto ">

                        <Outlet />

                    </div>
                   
                </div>
                <div className="bg-yellow-200 w-1/2 h-full max-md:hidden">

                </div>

            </div>
        </>
        
    )
}

export default AuthLayout