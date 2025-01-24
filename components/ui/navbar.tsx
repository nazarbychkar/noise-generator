'use client'

import Link from 'next/link';
import * as React from 'react';

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
          
        </ul>
      </div>
    </div>
  );
}