
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
  <div>
       <img src={astronomy.url} alt={astronomy.title} />

  </div>
)


}
export default Home