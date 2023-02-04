
import {useState , useEffect} from 'react'
import React from 'react'



// const apikey= process.env.REACT_API_KEY; 


const Home = ()=> {


const [astronomy , setAstronomy] =useState([])


console.log(astronomy)

useEffect(()=>{
  fetchPhoto()


 async function fetchPhoto() {
  const res= await fetch(`https://api.nasa.gov/planetary/apod?api_key=n4Y9uUuZegWrf9IvodCb9zZFqO04LK3tThSmvEcU`)
  const data=  await res.json();
  console.log(data)
  setAstronomy(data)
  
 } 
},[])

if(!astronomy) return <div className=' bg-blue-300'><h1 className=' text-center text-6xl'>error</h1></div>

return (
  <div className='   '>
    <div className='p-12 mx-24 mb-12 mt-12 shadow-lg bg-gray-200 '>
    <div className=''>
      <div className=' relative flex flex-row items-center mb-12'>
       <h2 className=' font-bold text-xl ml-24'>{astronomy.copyright}</h2>
       <img className=' absolute -top-0 left-14 rounded-full w-8 h-8' src={astronomy.hdurl} alt={astronomy.title} />
      </div>
       <p className=' font-light text-xl'>{astronomy.explanation}</p>
    </div>

       {/* <img src={astronomy.url} alt={astronomy.title} /> */}
       
       <img className='rounded-xl mt-12 ' src={astronomy.hdurl} alt={astronomy.title} />
       <h3 className='ml-12'>{astronomy.date}</h3>


  </div>
  </div>
)


}
export default Home