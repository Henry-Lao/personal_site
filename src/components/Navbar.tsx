import React from 'react'
import { AppBar, Button, Toolbar, styled, Box } from "@mui/material"

function Navbar() {
    const NavBarButton = styled(Button)({
        color: 'white',
        opacity: '90%',
        '&:hover': {
            color: '#1976d2',
            background: 'transparent'
        }
    })

    return(
        <AppBar className="Navbar" sx={{backgroundColor: 'transparent', boxShadow: 'none'}}>
            <Toolbar>
                <Box sx={{flexGrow: 1}}/>
                <Box sx={{ px: 5 }}>
                    <NavBarButton variant="text">HOME</NavBarButton>
                    <NavBarButton variant="text">WORK</NavBarButton>
                    <NavBarButton variant="text">ABOUT</NavBarButton>
                    <NavBarButton variant="text">CONTACT</NavBarButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar