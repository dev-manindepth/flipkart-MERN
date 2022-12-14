import React from "react";
import { Box, Button, Dialog, TextField, Typography ,styled } from "@mui/material";
import { useState } from "react";
import { authenticateLogin, authenticateSignup } from "../../service/api";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";


const Component=styled(Box)`
  height: 70vh;
  width: 90vh;
`
const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  width: 35%;
  padding: 45px 35px;

  & > p , & > h5{
    color: #ffffff;
    font-weight: bold;
  }
`;

const Wrapper=styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div , & >button , & > p{
     margin-top: 20px;
  }
`
const LoginButton=styled(Button)`
  text-transform: none;
  background-color: #FB641B;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`

const RequestOtp = styled(Button)`
  text-transform: none;
  background-color: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text=styled(Typography)`
  font-size:12px ;
  color: #878787;
`
const CreateAccount=styled(Typography)`
 font-size: 14px;
 text-align: center;
 color: #2874f0;
 font-weight: bold;
 cursor: pointer;
`

const Error=styled(Typography)`
  color: #ff6161;
  font-size: 10px;
  line-height: 0;
  margin-top: 10px;
  font-weight: bold;
`
const accountInititalValue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const signupInitialValue={
  firstname:'',
  lastname:'',
  username:'',
  email:'',
  password:'',
  phone:'',
}
const loginInitial={
  username:'',
  password:''
}
const LoginDialog = ({ open, setOpen }) => {
  const [account,toggleAccount]=useState(accountInititalValue.login)
  const [signup ,setSignup]=useState(signupInitialValue);
  const [login,setLogin]=useState(loginInitial)
  const [error,setError]=useState(false)
  const {setAccount} = useContext(DataContext);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInititalValue.login)
    setError(false)
  };
  const toggleSignUp=()=>{
    toggleAccount(accountInititalValue.signup)
  }

  const onInputChange=(e)=>{
    setSignup({...signup,[e.target.name]:e.target.value})
    // console.log( signup);

  }

  const signupUser=async()=>{
   const response= await authenticateSignup(signup);
   if(!response) return;

   handleClose()
   setAccount(signup.firstname)
  }
  const onValueChange=(e)=>{
    setLogin({...login,[e.target.name]:e.target.value})
  }
  const loginUser=async()=>{
    const response=await authenticateLogin(login);
    if(response.status===200){
      setError(false)
      handleClose()
      setAccount(response.data.data.firstname)
    }else{
      setError(true)
    }
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{marginTop:20}}>
              {account.subHeading}
            </Typography>
          </Image>

          {account.view === "login" ? (
            <Wrapper>
              <TextField variant="standard" onChange={(e)=>onValueChange(e)} name='username' label="Enter Email/Phone number" />
              {
                error && <Error>Please Enter valid username or password</Error>
              }
              <TextField variant="standard" onChange={(e)=>onValueChange(e) }
              name="password" label="Enter Password" />
              <Text>
                By continuing, you agree to Flipkart's Terms fo Use and Privacy
                Policy{" "}
              </Text>
              <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOtp>Request OTP</RequestOtp>
              <CreateAccount onClick={()=>toggleSignUp()}>New to Flipkart? Create an account </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField variant="standard" name="firstname" onChange={(e)=>onInputChange(e)} label="Enter Firstname" />
              <TextField variant="standard" name="lastname" onChange={(e)=>onInputChange(e)} label="Enter Lastname" />
              <TextField variant="standard" name="username" onChange={(e)=>onInputChange(e)} label="Enter Username" />
              <TextField variant="standard" name="email" onChange={(e)=>onInputChange(e)} label="Enter Email" />
              <TextField variant="standard" name="password" onChange={(e)=>onInputChange(e)} label="Enter Password" />
              <TextField variant="standard" name="phone" onChange={(e)=>onInputChange(e)} label="Enter Phone" />
                <LoginButton onClick={()=> signupUser()}>Signup</LoginButton>
              
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
