import { PowerSettingsNew } from '@mui/icons-material';
import { Box, Menu, MenuItem, Typography ,styled } from '@mui/material'
import React from 'react'
import { useState } from 'react';

const Component = styled(Menu)`
    margin-top: 5;
`
const Logout=styled(Typography)`
    font-size: 14px;
    margin-left:20px ;
`
const Profile = ({account,setAccount}) => {

    const [open,setOpen]=useState(false);

    const handleClick=(event)=>{
        setOpen(event.currentTarget)
    }
    const handleClose=()=>{
        setOpen(false)
    }
    const logout=()=>{
        setAccount()
    }
  return (
      <>
    <Box onClick={(event)=>handleClick(event)} >
      <Typography  style={{ marginTop: 2 ,cursor:'pointer'}}>{account}</Typography>
      <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
     
        >
        <MenuItem onClick={()=>{handleClose(); logout();}}>
            <PowerSettingsNew color='primary' fontSize='small' />
            <Logout>Logout</Logout>
            
            </MenuItem>
      </Component>
    </Box>
          </>
  );
}

export default Profile