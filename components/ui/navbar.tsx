import Link from 'next/link'
import * as React from 'react'

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 fixed top-0 m-2 mx-20 flex w-[87%] justify-center rounded-3xl">
  <div className="flex-1">
    <Link href="/" className="btn btn-ghost text-xl">NoiseNest</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li className='mx-2 justify-center'>
        <details>
          <summary>About</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><Link href="/noise-generator">Noise Generator</Link></li>
            <li><Link href="/noise-odyssey">Noise Odyssey</Link></li>
          </ul>
        </details>
      </li>
      <li><a className='btn btn-secondary text-slate-50'>Get a Pro</a></li>

    </ul>
  </div>
</div>
    // <div className="navbar fixed top-0 m-2 flex w-[99%] justify-center rounded-3xl bg-base-100">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
    //       >
    //         <li>
    //           <a>Item 1</a>
    //         </li>
    //         <li>
    //           <a>Parent</a>
    //           <ul className="p-2">
    //             <li>
    //               <a>Submenu 1</a>
    //             </li>
    //             <li>
    //               <a>Submenu 2</a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li>
    //           <a>Item 3</a>
    //         </li>
    //       </ul>
    //     </div>
    //     <a className="btn btn-ghost text-xl">NoiseNest</a>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1">
    //       <li>
    //         <details>
    //           <summary>About</summary>
    //           <ul className="p-2">
    //             <li>
    //               <a>Submenu 1</a>
    //             </li>
    //             <li>
    //               <a>Submenu 2</a>
    //             </li>
    //           </ul>
    //         </details>
    //       </li>
    //       <li>
    //         <a>About</a>
    //       </li>
    //       <li>
    //         <a>Item 3</a>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="navbar-end">
    //     <a className="btn">Get a Pro</a>
    //   </div>
    // </div>
  )
}
