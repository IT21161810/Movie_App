import { Button, Dialog, FormLabel, IconButton, TextField, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { Box } from "@mui/system";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
const label = {mt:1,mb:1}

const AuthForm = ({onSubmit,isAdmin}) => {

   const [isSignUp,setisSignUp] = useState(false);
   const [inputs,setInputs] = useState({

      name:"",
      email:"",
      password:""
   });

   ////////////////////
   const handleSubmit = (e)  => {

      e.preventDefault();
      onSubmit({inputs,signup: isAdmin ? false :isSignUp});
   }

   
   const handleChange = (e) => {

      setInputs((prevState) =>({

         ...prevState,
         [e.target.name]: e.target.value,

      }));
   };

    return(
     <Dialog open={true} PaperProps={{style:{borderRadius:20}}} >
      <Box sx={{ml:"auto",padding: 1}}>
      <IconButton  LinkComponent={Link} to="/">
      <CloseIcon/>
      </IconButton>
      </Box>
        <Typography variant="h4" textAlign={'center'}>
           {isSignUp?"Sign Up":"Login"}
        </Typography>
        <form onSubmit={handleSubmit} >
      
       <Box padding={5} display='flex' flexDirection={'column'} justifyContent={'center'} width={380} margin='auto' alignContent={'center'}>
       
       { !isAdmin && isSignUp && (
         <>
         {" "}
       <FormLabel sx={label} >Name </FormLabel> 
       <TextField value={inputs.name} onChange={handleChange} margin="normal" variant="standard" type={"text"} name="name" /> 
         </>
       )}
    
       <FormLabel sx={label} > E mail </FormLabel> 
       <TextField value={inputs.email} onChange={handleChange} margin="normal" variant="standard" type={"email"} name="email" />
       <FormLabel  sx={label} > Password </FormLabel>
       <TextField value={inputs.password} onChange={handleChange} margin="normal" variant="standard" type={"password"} name="password" /> 
       <Button sx={{mt:2,borderRadius:10}} type="submit" fullWidth variant="contained">{isSignUp?"Sign Up":"Login"}</Button>

       { !isAdmin  && (<Button onClick={()=> setisSignUp(!isSignUp)} sx={{mt:2,borderRadius:10}} 
        fullWidth >Switch To {isSignUp?"Login":"Sign Up"}</Button> )}

       </Box>
        </form>
     </Dialog>

    )


}

export default AuthForm;