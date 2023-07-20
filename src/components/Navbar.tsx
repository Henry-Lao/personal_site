import React from 'react'
import { AppBar, Button, Toolbar, styled, Box } from "@mui/material"

export interface Props {
    scrollTo: (index: number) => any
}


function Navbar(props: Props) {
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
                    <NavBarButton variant="text" onClick={()=>props.scrollTo(0)}>HOME</NavBarButton>
                    <NavBarButton variant="text" onClick={()=>props.scrollTo(.59)}>ABOUT</NavBarButton>
                    <NavBarButton variant="text" onClick={()=>props.scrollTo(1.19)}>WORK</NavBarButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar