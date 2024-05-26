import { useEffect, useState } from "react"


const ApiTest ="https://jsonplaceholder.typicode.com/posts/1"
const ApiTest1 = "https://jsonplaceholder.typicode.com/posts/2"
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




  const [post ,setPost] = useState(null)
  useEffect(()=>{
  const fetchdata1= async () =>{
    const result1 = await fetch(ApiTest1);
    const data1 =  await result1.json();
    setPost(data1)

  }
  fetchdata1();
  
  })
  return (
    <>
    <div className="vvvvvvvvvvvv">
    <div className="nnn">
    <img src="id.jpg" alt=""width={100} height={100} />
    <h1 className="idn">{Read?.id}</h1>

   
     </div>
     </div>

     <div >
      <h1 className="bbbbbbbbb"></h1>
      <div className="lllll">
     <img src="h.png" alt=""  height={100}/>
     <h1 className="idn">{post?.id}</h1>
     </div>
     </div>
     

    </>
  )
}

export default App