import React from 'react';
import {Link} from "react-router-dom"
  import logo from '../assets/logo.png'
  

function Navbar(){
    return(
        <div className='z-200 sticky top-0'>
         <div className='flex px-[10%] justify-center gap-10 absolute top-0 left-66 z-10 bg-transparent  text-white  mx-auto'>
            <div className='flex '>
                <ul className=' flex  text-center gap-10 mt-8.5'>
                    <Link to={"/"}>HOME</Link>
                    <Link to={"/about"}>ABOUT</Link>
                    <Link to={"/stories"}>STORIES</Link>
                </ul>
            </div>
            <div>
                <img src={logo} alt="" className='w-20' />
            </div>
            <div>
                <ul className='flex text-center gap-10 mt-8.5'>
                    <Link to={"/services"}>SERVICE</Link>
                    <Link to={"/gallery"}>GALLERY</Link>
                    <Link to={"/contact"}>CONTACT</Link>
                    <Link to={"/login"}>LOGIN</Link>
                </ul>
            </div>
         </div>
        
        </div>
    )
}

export default Navbar;