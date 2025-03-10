
import { useClerk } from '@clerk/clerk-react'
import { UserButton } from '@clerk/clerk-react'
import { useUser } from '@clerk/clerk-react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AppContext } from '../context/AppContext'



const Navbar = () => {

  const { openSignIn} = useClerk()
  const { user } = useUser()

  const navigate = useNavigate()

  const {setShowRecruiterLogin} = useContext(AppContext)
  return (
    <header className="navbar-header top-0 left-0 bg-blue-900 flex ">
   
       <div className="logo-container w-screen h-25 px-6 flex items-center justify-between ">
          <img onClick={() => navigate("/")}
            className="logo w-80 h-70 bg-transparent md:static cursor-pointer"
            src="/src/assets/Logo.png"
            alt="HireHub Logo"
          />
          {
            user? <div className='flex gap-3 items-center text-xl text-white  '>
              <Link to={"/applications"}>Applied Jobs</Link>
              <p>|</p>
              <p className='max-sm:hidden'>Hi, {user.firstName+" "+user.lastName}</p>
              <UserButton/>
            </div>
            : <div className="pr-60 flex gap-8 max-sm:text-xs sm:flex-row flex-col  ">
            <button onClick={() => setShowRecruiterLogin(true)} className="text-white text-2xl font-semibold  ">Recruiter</button>
            <button  onClick={() => openSignIn()} className="text-white text-2xl font-semibold border-2 border-white px-6 py-1 rounded-2xl hover:bg-amber-500 hover:text-[#00263C] transition duration-300 ease-in-out sm:px-9">Login</button>
            </div>
          }
            </div>

    </header>
    
  )
}

export default Navbar