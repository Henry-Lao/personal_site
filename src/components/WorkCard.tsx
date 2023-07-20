import { Box, Button, Card, CardHeader, CardMedia, Typography, styled } from '@mui/material'
import "../App.css"
import React from 'react'

export interface Props{
    card: IWork
}
export interface IWork {
    type: string,
    logoURL: string,
    backgroundURL: string,
    buttonURL: string,
    position: string,
    header: string,
    desc: string, 
    theme: string
}

function WorkCard(props: Props) {

    const light = {
        color: "#FFF",
    }

    const dark = {
        color: "#1c1c1c",
        CardButton :{
            '&:hover': {
                color: "#1976d2",
                border: "3px solid #1976d2"
            }
        }
    }

    const theme = props.card.theme == "light"? light : dark

    const CardButton = styled(Button)({
        ...(props.card.theme == "light" && { color: "#FFF", border: "3px solid #FFF"}),
        ...(props.card.theme == "dark" && { color: "#1c1c1c", border: "3px solid #1c1c1c"}),
        marginTop: "54px",
        borderRadius: "0px",
        '&:hover': {
            color: '#1976d2',
            border: "3px solid #1976d2"
        }
    })

    return(
        <Card sx={{ height: "700px", backgroundColor: "transparent"}}>
            <Box sx={{position: "absolute", zIndex: 2, width: 600, ml: "75px", mt: "60px", display:"block"}}>
                {props.card.logoURL == ""? <div style={{marginBottom:"150px"}}></div> : <img 
                    src={props.card.logoURL}
                    alt="VEGAS Stream logo"
                    margin-bottom="150px"
                    style={{height: "30px", marginBottom:"150px"}}
                />}
                <Typography style={theme} variant='body1' sx={{fontWeight: 500, opacity: "70%"}}>{props.card.position}</Typography>
                <Typography style={theme} variant='h4' sx={{fontWeight: 700, py: "24px", lineHeight:"0.85"}}>{props.card.header}</Typography>
                <Typography style={theme} variant="body1">{props.card.desc}</Typography>
                {props.card.buttonURL == "" ? <div/> : <CardButton
                     variant="outlined" 
                     href={props.card.buttonURL}
                     rel="noreferrer"
                >LEARN MORE</CardButton>}
            </Box>
            { props.card.type == "video" ? 
            <CardMedia
                component='video'
                image={props.card.backgroundURL}
                autoPlay
                loop
                muted
                sx={{position: "absolute", zIndex: 1, height: "700px", objectFit: "cover", width: "96vw", opacity:"70%"}}
            /> : 
            < CardMedia 
                component='img'
                image={props.card.backgroundURL}
                sx={{position: "absolute", zIndex: 1, height: "700px", objectFit: "fit", width: "96vw"}}
            /> }
        </Card>
    )
}

export default WorkCard