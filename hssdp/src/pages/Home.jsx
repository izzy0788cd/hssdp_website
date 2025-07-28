import React from 'react';

import '../styles/style.css';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <h1 className='text-blue-500 font-bold'>
            Health Services Sector Development Project
          </h1>
          <p className='text-gray-700 font-semibold'>
            This is the main page of the application.
          </p>
        </div>
      </div>
    </>
  );
}
