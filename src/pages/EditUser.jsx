import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleUser, updateUser } from '../redux/action';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    
  const [state, setState] = useState({
    name: "",
    email: "",
    address: "",
    contact: ""
  })
  const { name, email, address, contact } = state
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let {id} = useParams();
  const { user, loading } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, [id]);
  
  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);
  
  if (loading) {
    return <div>Loading...</div>;
  }

  const handleChangeInput = (e) => {
    setState({ 
      ...state,  
      [e.target.name]: e.target.value 
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !address || !contact) {
      setError("Please fill all input feilds")
      console.log(error)
    } else {
      dispatch(updateUser(state , id))
      navigate("/home")
      setError("");
    }
  }
  return (
    <div> <br /> <br /> <br /> <br /> <br />
      <div align="center" style={{ margin: "auto", width: "350px", padding: "20px", boxShadow: "0 0 10px rgba(0,0,0,0.3)", borderRadius: "7px" }}>
        <h2>Edit User</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form  onSubmit={handleSubmit}>
        <Box
          sx={{
            '& > :not(style)': { m: 1, width: '30ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            value={state.name}
            name="name"
            onChange={handleChangeInput}
          /> <br />

          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            value={state.email}
            name="email"
            onChange={handleChangeInput}
          /><br />

          <TextField
            id="standard-basic"
            label="Address"
            variant="standard"
            value={state.address}
            name="address"
            onChange={handleChangeInput}
          /><br />

          <TextField
            id="standard-basic"
            label="Contact"
            variant="standard"
            value={state.contact}
            name="contact"
            onChange={handleChangeInput}
          /><br />
          <Button variant="contained" type='submit' >Update</Button>
      </Box><br />
      </form>
    </div>
    </div >
  )
}

export default EditUser
