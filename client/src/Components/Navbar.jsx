import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CartIcon from 'pages/Widgets/CartIcon';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='transparent' sx={{boxShadow:''}}>
                <Toolbar>
                    <Typography color='GrayText' variant="h6" component="div" sx={{ flexGrow: 1, fontWeight:'600'}}>
                        UNI Resto Cafe
                    </Typography>
                    <Typography color='GrayText' variant="p" component="div" sx={{px:'1rem', fontWeight:'500'}}>
                        My Orders
                    </Typography>
                    <CartIcon />
                </Toolbar>
            </AppBar>
        </Box>
    );
}




