"use client"

import React, { useState } from 'react'
import Link from 'next/link'

const Page = () => {

    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState()

    const generate= () => {
      const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) =>  { 
    setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    seturl("")
    setshorturl("")
  
    console.log(result)
    alert(result.message)


})
  .catch((error) => console.error(error));
    }

    return (
        <div className='mx-auto max-w-2xl bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl text-center'>Generate your short URLs</h1>
            <div className='flex flex-col gap-2'>
                <input type="text" value={url} className='bg-white px-4 py-2 focus:outline-purple-600' placeholder='Enter your URL' onChange={e => { seturl(e.target.value) }} />
                <input type="text" value={shorturl} className='px-4 py-2 focus:outline-purple-600 bg-white' placeholder='Enter your prefered short URL' onChange={e => { setshorturl(e.target.value) }} />
                <button onClick={generate} className='bg-purple-600 rounded-lg p-3 py-1 font-bold text-white my-3'>Generate</button>
            </div>

            {generated && 
            <> <span className='font-bold text-lg text-center'>Your Link:</span>
              <code className='text-center text-blue-600'> <Link target="_blank" href = {generated}>{generated}</Link>
                </code> </>}
        </div>
    )
}

export default Page
