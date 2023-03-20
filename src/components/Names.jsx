import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Names = () => {
    var [name,fname] = useState("Home")
        const hname =()=>{
            if(name=="Home")
            {
                chsize()
                fname("You are already Home")
            }
            else{
                fname("Home")
            }
            
        }
        const gname =()=>{
                fname("Gallary")
        }
        const cname =()=>{
                fname("Contact")
        }
    
    var [hsize,fhsize] = useState("h3")
        const chsize =()=>{
            if(hsize=="h3")
            {
            fhsize("h1")
            }
            else{
                fhsize("h3")
            }
        }

  return (
    <div>
      <Typography variant={hsize}>Welcome {name}</Typography><br></br>
      <Button variant='contained' onClick={hname} color="primary">Home</Button>
      <Button variant='contained' onClick={gname} color="secondary">Gallary</Button>
      <Button variant='contained' onClick={cname} color="success">Contact</Button>
    </div>
  )
}

export default Names
