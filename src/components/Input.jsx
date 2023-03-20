import { Typography,TextField, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Input = () => {

var [name,fname] = useState("Nikhil")
        const cname =(event)=>{
            const{name,value} = event.target;
            fname(value);
        }
useEffect(()=>{
fname("Nikhil")
},[])
  return (
    <div>
      <Typography variant='h2'>My name is {name}</Typography><br></br>
      <TextField
          onChange={(e)=>cname(e)}
          required
          id="searchTxt"
          label="Required"
          defaultValue=""
        /><br></br><br></br>
    </div>
  )
}

export default Input
