import React from "react"
import { Grid } from "@mui/material"
import WorkCard from "../components/WorkCard"

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

function Works() {
    return(
        <Grid container spacing={4} mx={1}>
            {works.map((i)=> {
                return (
                    <Grid item container sx={{position: "block"}}>
                        <WorkCard card={i}/>
                    </Grid>
                )
            })}
        </Grid>
    )
}

let works: IWork[] = [
    {
        "type" : "video",
        "logoURL" : "https://henry-lao.s3.us-west-1.amazonaws.com/images/vegas.png",
        "backgroundURL": "https://henry-lao.s3.us-west-1.amazonaws.com/videos/VEGASStream.mp4",
        "buttonURL" : "https://www.youtube.com/watch?v=Vv1_gK48keo&list=PLDenmwGaF5W6PmxOCuxMfCFepL4taujxF",
        "position": "",
        "header": "VEGAS Stream",
        "desc": "I designed, developed, and coordinated marketing of VEGAS Stream in partnership with MAGIX. VEGAS Stream, an integral graphics streaming solution in the VEGAS Pro & VEGAS Post production suite, was showcased at the Microsoft BET 2019 conference for its innovative utilization of the Microsoft Graph API to enable remote work and learning.",
        "theme": "light"    
    },
    {
        "type" : "video",
        "logoURL" : "https://henry-lao.s3.us-west-1.amazonaws.com/images/prestosports.png",
        "backgroundURL": "https://henry-lao.s3.us-west-1.amazonaws.com/videos/StretchCast.mp4",
        "buttonURL" : "",
        "position": "",
        "header": "STRETCHCAST",
        "desc": "Led the design and development of StretchCast, a sports graphics broadcasting software made in partnership with PrestoSports. Utilized by over 1400 athletic departments across US and Canada, StretchCast introduced an industry-first RAM-based instant replay system and automatic live stats to graphics rendering solutions.",
        "theme": "light"
    },
    {
        "type" : "image",
        "logoURL" : "https://henry-lao.s3.us-west-1.amazonaws.com/images/newblue.png",
        "backgroundURL": "https://henry-lao.s3.us-west-1.amazonaws.com/images/vividcast.png",
        "buttonURL" : "",
        "position": "Technical Product Manager",
        "header": "VIVIDCAST",
        "desc": "I supervised and developed VividCast, a lightweight real-time graphics rendering solution which uses web-based cross product graphics control system by incorporating APIs from Youtube, Google, Twitch, Facebook, MS Graph and more.",
        "theme": "dark" 
    },
    {
        "type" : "image",
        "logoURL" : "",
        "backgroundURL": "https://henry-lao.s3.us-west-1.amazonaws.com/images/blogproject.jpg",
        "buttonURL" : "",
        "position": "",
        "header": "SOCIAL APP CLONE",
        "desc": "I developed a fully functional replica of facebook.com, using ReactJS, Flask, postgreSQL and Material UI.",
        "theme": "light"
    }
]

export default Works