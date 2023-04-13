import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddUser = () => {
  return (
    <div> <br/> <br/> <br/> <br/> <br/>
      <div align="center" style={{margin: "auto" , width: "350px", padding: "20px",  boxShadow: "0 0 10px rgba(0,0,0,0.3)", borderRadius: "7px"}}>
        <h2>Add User</h2>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Name" variant="standard" /> <br/>
      <TextField id="standard-basic" label="Email" variant="standard" /><br/>
      <TextField id="standard-basic" label="Address" variant="standard" /><br/>
      <TextField id="standard-basic" label="Contact" variant="standard" /><br/>
    </Box><br/>
    <Button variant="contained">Submit</Button>
      </div>
    </div>
  )
}

export default AddUser
