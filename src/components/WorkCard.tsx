import { Box, Button, Card, CardHeader, CardMedia, Typography } from '@mui/material'
import "../App.css"
import React from 'react'

function WorkCard() {

    const VEGASStreamVideo = require("../assets/videos/VEGASStream.mp4")

    const textStyle = {
        color: "#FFF"
    }

    return(
        <Card sx={{ height: "700px" }}>
            <Box sx={{position: "absolute", zIndex: 2, width: 400, ml: "75px", mt: "60px", display:"block"}}>
                <img 
                    src={"../vegas-logo.png"}
                    alt="VEGAS Stream logo"
                    className="work-card-logo"
                />
                <Typography style={textStyle} variant='body1' sx={{fontWeight: 500, opacity: "70%"}}>Technical Product Manager</Typography>
                <Typography style={textStyle} variant='h4' sx={{fontWeight: 700, py: "24px", lineHeight:"0.85"}}>STREAMING GRAPHIC SOFTWARE FOR PRODUCTIVITY</Typography>
                <Typography style={textStyle} variant="body2">I managed, designed, developed VEGAS Stream as as part of the VEGAS Post Production suite in partnership with MAGIX and Microsoft</Typography>
                <Button style={textStyle} variant="outlined" sx={{ mt: "54px", border: " 3px solid #FFFFFF", borderRadius: "0px"}}>LEARN MORE</Button>
            </Box>
            <CardMedia
                component='video'
                image={VEGASStreamVideo}
                autoPlay
                loop
                muted
                sx={{position: "absolute", zIndex: 1, height: "700px", objectFit: "cover"}}
            />
        </Card>
    )
}

export default WorkCard