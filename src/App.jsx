import { useEffect, useState } from "react"


const ApiTest ="https://jsonplaceholder.typicode.com/posts/1"
function App() {

  const [Read ,setRead] = useState(null)
  useEffect(()=>{
  const fetchdata= async () =>{
    const result = await fetch(ApiTest);
    const data =  await result.json();
    setRead(data)

  }
  fetchdata();
  
  })
  return (
    <>
    <h1>{Read?.body}</h1>
    </>
  )
}

export default App