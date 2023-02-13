import React, { useState } from 'react'
import { useLocation} from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField'; 
import Button from '@mui/material/Button';

const Form = () => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userDetails", JSON.stringify({ name, phone, email }));
    window.location.replace( location.search = "/second-page")
  }

  return (
    <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <form onSubmit={handleSubmit}>
    <Box sx={{ width: '100%', maxWidth: 300, background:"lightBlue", padding:20, borderRadius:10 }}>
      <Typography variant="h3" color="black" gutterBottom textAlign="center">
       Form
      </Typography>
      <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue=""
          fullWidth
          sx={{margin:1}}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Phone Number"
          defaultValue=""
          fullWidth
          sx={{margin:1}}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue=""
          fullWidth
          sx={{margin:1}}
          onChange={(e) => setEmail(e.target.value)}
        />
       <Button variant="contained" sx={{margin:1}} type="submit" fullWidth>Submit</Button>
      </Box>
      </form>
  </div>
   
  )
}

export default Form
