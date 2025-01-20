import React, { useState } from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [isOpen,setIsOpen]=useState(false)

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    // <header className='py-3 shadow  '>
    //   <Container>
    //     <nav className='flex'>
    //       <div className='mr-4'>
    //         <Link to='/'>
    //           <Logo width='70px'   />

    //           </Link>
    //       </div>
    //       <ul className='flex ml-auto'>
    //         {navItems.map((item) => 
    //         item.active ? (
    //           <li key={item.name}>
    //             <button
    //             onClick={() => navigate(item.slug)}
    //             className='inline-bock px-3 py-2 duration-200 hover:bg-blue-100 rounded-full'
    //             >{item.name}</button>
    //           </li>
    //         ) : null
    //         )}
    //         {authStatus && (
    //           <li>
    //             <LogoutBtn />
    //           </li>
    //         )}
    //       </ul>
    //     </nav>
    //     </Container>
    // </header>
    <header className="py-3 shadow">
  <Container>
    <nav className="flex items-center">
      {/* Logo Section */}
      <div className="mr-4">
        <Link to="/">
          <Logo width="70px" />
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className="ml-auto block md:hidden p-2 text-gray-500 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Navigation Items */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } mt-4 md:mt-0 md:ml-auto md:flex`}
      >
        {navItems.map((item) =>
          item.active ? (
            <li key={item.name} className="mb-2 md:mb-0 md:ml-4">
              <button
                onClick={() => navigate(item.slug)}
                className="inline-block px-3 py-2 text-gray-700 duration-200 hover:bg-blue-100 rounded-full"
              >
                {item.name}
              </button>
            </li>
          ) : null
        )}
        {authStatus && (
          <li className="mb-2 md:mb-0 md:ml-4">
            <LogoutBtn />
          </li>
        )}
      </ul>
    </nav>
  </Container>
</header>

  )
}

export default Header