import React from 'react'
import Typography from '@mui/material/Typography';

const Home = () => {
    var name=["Nikhil", "Muhsi", "Neeraj"]
  return (
    <div>
        <ul>
            {name.map((value,index)=>{
                return <li key={index}>{value}</li>
            })}
        </ul>
      {/*<Typography variant="h3">Welcome {name}</Typography>*/}
    </div>
  )
}

export default Home
