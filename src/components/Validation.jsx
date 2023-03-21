import { Typography,TextField, Button,setOpen } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Validation = () => {

    var  [submitted,setsubmitted] = useState(false);
    var [Inputname,setInputname] = useState({
    fname:""
})

    var [Validation,Setvalidation] = useState({
    fname:""
})

const inputHandler = (e) => {
    const{name,value}=e.target
    setInputname({ ...Inputname, [name]:value})
}

const Checkv = () => {
    let errors = Validation;


    if (!Inputname.fname.trim()){
        errors.fname = "First Name required"
    }else{
        errors.fname=""
    }
    Setvalidation(errors)
}

useEffect(()=>{
    Checkv();
});

const handlesub = (e) => {
    e.preventDefault();
    setsubmitted(true);
}



  return (
    <div>
        <form
        onSubmit={handlesub}>
        <br></br>

      <TextField
          value={Inputname.fname}
          onChange={inputHandler}
          name='fname'
          label="first name"
        />
        <br></br>
        {(Validation.fname && submitted) && <p>{Validation.fname}</p>}
        <br></br><br></br>
       <br></br>
       <Button type='submit' variant='contained'>SAVE</Button>
       </form>
    </div>

  )
}

export default Validation
