import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';


const Navigation = (props) => {

    return (
      <nav class="bg-grey-lightest p-2 mt-0 w-full shadow-lg">
        <div class="container mx-auto flex flex-wrap items-center">
          <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
            <a class="toggleColour text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
              <svg class="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 -500 1950 1950">
                <path d="m 1280,672 q 0,14 -9,23 l -352,352 q -9,9 -23,9 -14,0 -23,-9 L 522,696 q -10,-12 -10,-24 0,-14 9,-23 9,-9 23,-9 H 768 V 288 q 0,-13 9.5,-22.5 Q 787,256 800,256 h 192 q 13,0 22.5,9.5 9.5,9.5 9.5,22.5 v 352 h 224 q 13,0 22.5,9.5 9.5,9.5 9.5,22.5 z M 1920,384 Q 1920,225 1807.5,112.5 1695,0 1536,0 H 448 Q 263,0 131.5,131.5 0,263 0,448 q 0,130 70,240 70,110 188,165 -2,30 -2,43 0,212 150,362 150,150 362,150 156,0 285.5,-87 129.5,-87 188.5,-231 71,62 166,62 106,0 181,-75 75,-75 75,-181 0,-76 -41,-138 130,-31 213.5,-135.5 Q 1920,518 1920,384 z" />
              </svg>
              <Link to="/public" className='bold'> CAMBShare</Link></a>
          </div>
          <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
            <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
              <li class="mr-3">
                <a class="inline-block py-2 px-4 text-black no-underline"><Link to="/public" className='bold'>Home</Link></a>
              </li>
              <li class="mr-3">
                <a class="inline-block text-black no-underline hover:text-blue hover:text-underline py-2 px-4"><Link to="/aboutus" className='bold'>About Us</Link></a>
              </li>
              <li class="mr-3">
                <a class="inline-block text-black no-underline hover:text-blue hover:text-underline py-2 px-4"><Link to="/team" className='bold'>The Team</Link></a>
              </li>
              <li class="mr-3">
                <a class="inline-block text-black no-underline hover:text-blue hover:text-underline py-2 px-4"><Link to="/signup" className='bold'>Sign up</Link></a>
              </li>
              <li class="mr-3">
                <button id="navAction" class="mx-auto lg:mx-0 hover:underline bg-grey-light text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 "><Link to="/login" className='bold'>User</Link></button>
              </li>
              {props.authButton}
            </ul>
          </div>
        </div>
      </nav>
    )
  }


export default Navigation;