import React from 'react';
  import logo from '../assets/logo.png'

function Navbar(){
    return(
        <>
         <div className='flex px-[10%] justify-center gap-10 absolute top-0 left-66 z-10 bg-transparent  text-white  mx-auto'>
            <div className='flex '>
                <ul className=' flex  text-center gap-10 mt-8.5'>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>STORIES</li>
                </ul>
            </div>
            <div>
                <img src={logo} alt="" className='w-40' />
            </div>
            <div>
                <ul className='flex text-center gap-10 mt-8.5'>
                    <li>SERVICE</li>
                    <li>GALLERY</li>
                    <li>CONTACT</li>
                </ul>
            </div>
         </div>
        
        </>
    )
}

export default Navbar;