"use client"

import { useState ,useEffect } from "react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {

  const [postData,setPostData] = useState([]);

  return (
    <main className="container mx-auto my-3">
       <h1>NextJS CRUD + MongoDB</h1>
       <hr className="my-3" />
      <button className="bg-green-500 p-3 text-white rounded" >
        <Link href="/create" >Create Post</Link>
      </button>
      <div className="grid grid-cols-4 mt-3 gap-5">
        <div className="shadow-xl my-10 p-10 rounded-xl">
          <h4>Post Title</h4>
          <img src="img.jpg" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dolor!</p>
          <div className="mt-5">
            <Link className="bg-gray-500 px-3 m-1 text-white border py-2 rounded-md text-lg" href="/edit">Edit</Link>
            <Link className="bg-red-500 px-3 m-1 text-white border py-2 rounded-md text-lg " href="/delete">Delete</Link>
          </div>
        </div>
        
      </div>
    </main>
    
  );
}
