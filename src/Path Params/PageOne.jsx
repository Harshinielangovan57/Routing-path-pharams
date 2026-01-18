import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PageOne = () => { 

    const [name, setName] = useState("")
    const navigate = useNavigate()
     
   const handleName = () => {
        if(name.trim() === "") 
            return; 
        navigate(`/pagetwo/${name}`);

   }
//  const age = 10
//  if(age>10){

//      console.log("age is greater than 10")
//  }
//     console.log("age is leaser than 10")



    return (
    <div>
        <input type='text' value={name} placeholder='Enter the name' onChange={(e) => {setName(e.target.value)}}/>
        <button onClick={handleName}>Submit</button>

    </div>
  )
}

export default PageOne