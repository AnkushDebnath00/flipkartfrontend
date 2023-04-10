import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button, TextField } from '@mui/material';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';



function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className='bg-[#131921] h-[56px] flex justify-center'>
                <Toolbar>
                    <Box className='flex flex-row'>
                        <img src="https://cdn.shopify.com/s/files/1/1250/3061/files/white-amazon-logo-png-6_1024x1024.png?v=1539106025" alt="amazon logo" className='w-[97px] h-[40px] filter fill-white' />
                        <span>.in</span>
                    </Box>
                    <Box className='flex flex-row ml-4 mr-0 justify-center items-center' >
                        <FmdGoodOutlinedIcon />
                        <Button color="inherit" className='normal-case text-xs flex flex-col items-start ml-0'>
                            <p>Hello</p>
                            <p className='font-bold text-sm'>Select your address</p>
                        </Button>
                    </Box>
                    <TextField className='bg-white my-6' />

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header