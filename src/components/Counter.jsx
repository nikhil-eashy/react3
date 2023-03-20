import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [name,fname] = useState(0)
        const cname =()=>{
            fname(name++)
        }
        const mname =()=>{
            fname(name--)
        }
    var [hsize,fhsize] = useState("h1")
        const chsize =()=>{
            fhsize("h2")
        }
  return (
    <div>
      <Typography variant={hsize}> {name}</Typography><br></br>
      <Button variant='contained' onClick={chsize&&cname}>+</Button><br></br>
      <Button variant='contained' onClick={chsize&&mname}>-</Button>
    </div>
  )
}

export default Counter
