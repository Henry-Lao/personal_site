import { Box, Card, CardActions, CardContent, CardMedia, Divider, Grid, IconButton, Typography } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import EmailIcon from '@mui/icons-material/Email';


function About() {
    const textStyle = {
        color: "#FFF"
    }
    return(
        <Grid 
            container
            justifyContent="center"
            sx={{height: "100vh" , py: "15vh"}}
        >
            <Box sx={{width: "60vw"}}>
                <Box sx={{pt:"140px", maxWidth:"700px", justifyContent:"flex-start", position: "absolute", zIndex:"2"}}>
                        <Typography style={textStyle} variant="h3">
                            Full-stack developer with a passion for design and product management
                        </Typography>
                        <Divider light sx={{my: "35px", backgroundColor:"#FFF", width:"200px"}}/>
                        <Typography style={textStyle} variant="h6" sx={{fontWeight: "400"}}>
                            Hi, I'm Henry Lao. A full-stack developer with extensive experience in product design and product management. Based in <Typography variant="h6" fontWeight="bold">Los Angeles, California.📍</Typography>
                        </Typography>
                    <Box sx={{pt: "35px"}}>
                        <IconButton
                            href="https://henry-lao.s3.us-west-1.amazonaws.com/docs/Henry+Lao+Resume+7_2023.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AssignmentIndIcon fontSize="large" style={textStyle}/>
                        </IconButton>
                        <IconButton
                            href="https://www.linkedin.com/in/henryhlao/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LinkedInIcon fontSize="large" style={textStyle} />
                        </IconButton>
                        <IconButton
                            href="https://github.com/Henry-Lao"
                            target="_blank" rel="noreferrer"
                        >
                            <GitHubIcon fontSize="large" style={textStyle} />
                        </IconButton>
                        <IconButton
                            href="mailto:henrylao1213@gmail.com"
                        >
                            <EmailIcon fontSize="large" style={textStyle} />
                        </IconButton>
                    </Box>
                    <Divider light sx={{my: "35px", backgroundColor:"#FFF", width:"200px"}}/>
                    <Grid container spacing={2} display="flex">
                        <Grid item alignSelf="center" container>
                            <Typography color="white" variant="h6">Tech Stack</Typography>
                        </Grid>
                        <Grid item>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
                                alt="html5"
                                style={{height:"34px", width: "34px"}}                        
                            />
                        </Grid>
                        <Grid item alignSelf="center">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                                alt="html5"
                                style={{height:"34px", width: "34px"}}                            
                            />
                        </Grid>
                        <Grid item>
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
                                alt="html5"
                                style={{height:"34px", width: "34px"}}
                            />
                        </Grid>
                        <Grid item>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
                                alt="html5"
                                style={{height:"34px", width: "34px"}}
                            />
                        </Grid>
                        <Grid item>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                                alt="html5"
                                style={{height:"34px", width: "34px"}}                        
                            />
                        </Grid>
                        <Grid item>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                                alt="html5"
                                style={{height:"34px"}}                        
                            />
                        </Grid>
                        <Grid item>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
                                alt="html5"
                                style={{height:"34px"}}                        
                            />
                        </Grid>
                        <Grid item>
                            <img
                                src="https://www.vectorlogo.zone/logos/java/java-icon.svg"
                                alt="html5"
                                style={{height:"34px"}}                        
                            />
                        </Grid>
                        <Grid item>
                            <img
                                src="https://henry-lao.s3.us-west-1.amazonaws.com/images/flask-icon.png"
                                alt="html5"
                                style={{height:"34px", width: "34px"}}                        
                            />
                        </Grid>
                        <Grid item>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Logo_material_design.svg"
                                alt="html5"
                                style={{height:"34px", width: "34px"}}                        
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{left: "50vw", position:"absolute"}}>
                <img
                    src="https://henry-lao.s3.us-west-1.amazonaws.com/images/profile.jpeg"
                    alt="Profile Image"
                    style={{height:"800px", objectFit:"contain", zIndex:"1"}}
                />
                </Box>
            </Box>
        </Grid>
    )
}

export default About