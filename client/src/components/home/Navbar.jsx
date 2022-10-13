import { Box ,styled, Typography } from '@mui/material'
import React from 'react'
import { navData } from '../../constants/data.js'


const Component=styled(Box)`
    display: flex;
    margin: 55px 130px 0 130px;
    justify-content: space-between;
`
const Container=styled(Box)`
    padding: 12px 8px;
    text-align: center;
`
const Text=styled(Typography)`
    font-size: 14px;
    font-weight: bold;
`
const Navbar = () => {
  return (
    <Component>
        {
            navData.map((data=>(
                <Container key={data.id}>
                    <img src={data.url} alt={data.text} style={{width:64}}/>
                    <Text>{data.text}</Text>
                </Container>
            )))
        }
    </Component>
  )
}

export default Navbar