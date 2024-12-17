import * as React from 'react';
import { useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import {cors} from 'cors';


export default function Signup() {

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  // const handleSignup = async (event) => {


  //    event.preventDefault();
  //    const userData = {
  //       firstName,
  //       lastName,
  //       email,
  //       password, 
  //    };
  //    try {
  //      const res = await fetch('http://localhost:3000/api/users', userData, {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(userData),  // Make sure to stringify the userData
  //       });
    
  //       if (!res.ok) {
  //         throw new Error('Failed to sign up');
  //       }
    
  //     //  });       
  //      setSuccessMessage(res.data.msg);
  //      setErrorMessage("");
  //    } catch (error) {
  //      if(error.res && error.res.data){
  //         setErrorMessage(error.res.data.msg);
  //         // setSuccessMessage("");
  //      }else{
  //         setErrorMessage("Something went wrong. Please try again later.");
  //         // setSuccessMessage
  //      }
  //      setSuccessMessage("");
  //    }

  // };


  const handleSignup = async (event) => {
    event.preventDefault();
  
    const userData = {
      firstName,
      lastName,
      email,
      password,
    };
  
    try {
      const res = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Make sure to stringify the userData
        body: JSON.stringify(userData),  
      });
  
      if (!res.ok) {
        throw new Error('Failed to sign up');
      }
  
      const data = await res.json();
      setSuccessMessage(data.msg);
      // Clear any error message
      setErrorMessage("");  
  
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again later.");
      // Clear any success message
      setSuccessMessage("");  
    }
  };
  

  return (
    <main>

      <CssBaseline />
      <Sheet
        sx={{
          width: 300,
          mx: 'auto', 
          my: 4, 
          py: 3,
          px: 2, 
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body-sm">Sign in to continue.</Typography>
        </div>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input
            // html input attribute
            name="firstName"
            type="text"
            placeholder="Pankaj"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input
            // html input attribute
            name="lastName"
            type="text"
            placeholder="Prajapati"
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            // html input attribute
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            // html input attribute
            name="password"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
       
        <Button sx={{ mt: 1 /* margin top */ }} onClick={handleSignup} >Sign Up</Button>
        <Typography
          endDecorator={<Link href="/login">Login</Link>}
          sx={{ fontSize: 'sm', alignSelf: 'center' }}  
        >
          Already have a account?
        </Typography>
      </Sheet>
    </main>
  );
}