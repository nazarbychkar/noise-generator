'use client'

import Link from 'next/link';
import * as React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Navbar() {
  const { user, error, isLoading } = useUser();

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
          {!isLoading && !error && user ? (
            <li className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.picture ?? ''} alt={user.name ?? 'User Avatar'} />
                </div>
              </label>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href="/profile">Profile</Link></li>
                <li><a href="/api/auth/logout">Logout</a></li>
              </ul>
            </li>
          ) : (
            <li><a href="/api/auth/login" className='btn btn-secondary text-slate-50'>Login</a></li>
          )}
        </ul>
      </div>
    </div>
  );
}