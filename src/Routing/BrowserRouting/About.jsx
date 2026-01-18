import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import End from './End';

const About = () => {
  const navigate= useNavigate()
  return (
    <div>
       <h4>Welcome to harshini Profile</h4>
      <button onClick={() => navigate('/End')}>Next</button>
         
    </div>
     
        
  )
}

export default About