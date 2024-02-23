import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()
  return (

    <>
        <div className="w-screen h-16 flex items-center justify-between border border-black">
            <div className="text-2xl ml-4 cursor-pointer">
                <Link to="/">DeepLogic AI</Link>
                
            </div>
            <div className="mr-4 flex w-80 justify-around text-xl">
            <Link to="/create-post" className="hover:underline hover:text-green-500">Create Post</Link>
                <Link to="/about" className="hover:underline hover:text-green-500">Edit Post</Link>
                <Link to="/" className="hover:underline hover:text-blue-500" onClick={() => {
                    localStorage.removeItem("cookieFallback");
                    navigate("/login");
                }}>Logout</Link>
            </div>
        </div>
    </>
)
}

export default Navbar