import { Typography,TextField, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Twotext = () => {

var [Inputname,setInputname] = useState({
    fname:"",
    lname:""
})

const inputHandler = (e) => {
    const{name,value}=e.target
    setInputname({ ...Inputname, [name]:value})
}


  return (
    <div>
      <Typography variant='h4'>First name is {Inputname.fname}</Typography><br></br>
      <TextField
          onChange={inputHandler}
          name='fname'
          value={Inputname.fname}
          label="first name"
        /><br></br><br></br>
        <Typography variant='h4'>Second name is {Inputname.lname}</Typography><br></br>
      <TextField
      name='lname'
          onChange={inputHandler}
          value={Inputname.lname}
          label="second name"
        /><br></br><br></br>
    </div>
  )
}

export default Twotext
