import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const States = () => {
    var [name,fname] = useState("Nikhil")
        const cname =()=>{
            fname("Muhsina")
        }
    var [hsize,fhsize] = useState("h1")
        const chsize =()=>{
            fhsize("h2")
        }
  return (
    <div>
      <Typography variant={hsize}>Welcome {name}</Typography><br></br>
      <Button variant='contained' onClick={chsize&&cname}>Change</Button>
    </div>
  )
}

export default States
