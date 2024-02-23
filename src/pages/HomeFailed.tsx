import { Link } from 'react-router-dom'

const HomeFailed = () => {
  return (
    <div className='flex h-screen justify-center items-center text-4xl'>
        <Link to="/login">Please Log in to view this page</Link>
    </div>
  )
}

export default HomeFailed