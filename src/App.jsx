import {useState , useEffect} from 'react'
// import MovieList from './components/MovieList';
import Axios from 'axios'
import React from 'react'

function App() {



  const [astronomy , setAstronomy] =useState([])


  console.log(astronomy)

  useEffect(()=>{
    fetchPhoto()

   async function fetchPhoto() {
    const res= await fetch('https://api.nasa.gov/planetary/apod?api_key=n4Y9uUuZegWrf9IvodCb9zZFqO04LK3tThSmvEcU')
    const data=  await res.json();
    console.log(data)
    setAstronomy(data)
    
   } 
  },[])

  if(!astronomy) return <div>error</div>

  // const FetchData = async ()=>{
   
  //   return data
  // }




  return (
    <div className=""><h1>dlkdfm</h1>
      
       <img src={astronomy.url} alt={astronomy.title} />

       {/* <MovieList astronomy={astronomy}/> */}
  </div>
  )
}

export default App




// <h1>Hello Students</h1> 
// <Hello names={names} Lakes={Lakes}/>


// <h2>you clicked {count} times</h2>   


// <button onClick={() => setCount(count * 5)}>Add 1</button>
// <button onClick={()=> setCount(1 * Initial)}>reset</button>


