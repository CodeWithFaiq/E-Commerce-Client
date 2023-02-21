import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import Image from '../Assets/Images/light.jfif'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {useState} from 'react'
import { Send } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
const navigate=useNavigate();
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [confirm,setConfirm]=useState('');
const [image,setImage]=useState('');
const [name,setName]=useState('');

    return ( 
        <>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center', backgroundImage:`url(${Image})`, backgroundSize:'cover', height:'500px' }} >

           <Box sx={{height:'400px',width:'400px',backgroundColor:'#FFFFF7'}}>

            <Box mt={2} sx={{display:'flex',justifyContent:'center'}} >
               <PersonAddIcon sx={{fontSize:'60px'}} />
            </Box>
               <Box sx={{display:'flex',justifyContent:'center'}} > 
            <TextField 
            sx={{width:'50%'}}
            placeholder="Enter Your Email"
            type='email'
            value={email}
            variant='standard'
            onChange={(e)=>setEmail(e.target.value)}
            />
              </Box>

              <Box mt={2} sx={{display:'flex',justifyContent:'center'}} >
               <TextField 
                sx={{width:'50%'}}
                value={name}
                placeholder='Enter Your Name'
                variant='standard'
                onChange={(e)=>setName(e.target.value)}

              />               
              </Box>


           <Box mt={2}  sx={{display:'flex',justifyContent:'center'}}  >
             <TextField
              sx={{width:'50%'}}
             type='password'
              value={password}
              variant='standard'
              placeholder='Enter Your password'
              onChange={(e)=>setPassword(e.target.value)}
             />

           </Box>

           <Box mt={2}  sx={{display:'flex',justifyContent:'center'}} >
            <TextField
             sx={{width:'50%'}}
            type='password'
            value={confirm}
            placeholder='Confirm'
            variant='standard'
            onChange={(e)=>setConfirm(e.target.value)}
            />
           </Box>
           <Box  mt={2} sx={{display:'flex',justifyContent:'center'}}> 
           <Typography sx={{fontSize:'12px',marginLeft:'62px'}}> Choose An Appropriate Profile Picture (Optional) </Typography>   
            </Box>
           <Box  sx={{display:'flex',justifyContent:'center'}}>
            <input style={{marginLeft:'40px'}} type="file" 
            onChange={(e)=>setImage(e.target.files[0])}
            />
           </Box>

            <Box mt={2} sx={{display:'flex',justifyContent:'center'}}>
              <Button disabled={!email || !confirm || !password || !name? true:false} sx={{backgroundColor:'grey'}} variant='contained' endIcon={<Send/>} 
              onClick={()=>{
                const formdata=new FormData();
                formdata.append('name',name);
                formdata.append('password',password);
                formdata.append('confirm',confirm);
                formdata.append('Avatar',image);
                formdata.append('email',email);
                axios.post('http://localhost:5000/user/Register',formdata).then(()=>{
                  setTimeout(()=>{
                    navigate('/Login')
                  },1750)
                    toast.success('User Successfully Registered!',{
                      position:toast.POSITION.TOP_LEFT
                    })
                }).catch((e)=>{
                    toast.error(e.response.data,{
                      position:toast.POSITION.TOP_CENTER
                    })
                })
              }}

              > Submit </Button> 
            </Box>

           </Box>

        </Box>
        <ToastContainer/>
        </>
     );
}
 
export default Register;