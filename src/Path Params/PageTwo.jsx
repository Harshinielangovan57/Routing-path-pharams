import React from 'react'
import { useParams } from 'react-router-dom'

const PageTwo = () => {
    const {name} = useParams()

  return (
    <div>
        <h2>Welcome {name}</h2>
    </div>
  )
}

export default PageTwo