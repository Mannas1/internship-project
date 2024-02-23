import { listAllDocuments } from "@/appwrite/appwrite"
import Navbar from "@/components/common/Navbar"

const Home = () => {
  
  return (
    <>
    <Navbar />
    <div className="text-4xl">Home</div>
    <button onClick={async () => {
      const response = await listAllDocuments();
      console.log(response)
    }}>Press this</button>
    
    </>
    
  )
}

export default Home