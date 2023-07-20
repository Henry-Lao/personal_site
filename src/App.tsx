import React from 'react';
import { useRef } from 'react'
import './App.css';
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Works from "./pages/Works"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { ThemeProvider, createTheme, AppBar, Button, Box, Toolbar, Typography, Divider, Grid, styled} from '@mui/material';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Poppins',
    }
  }
})

function App() {
  const parallaxRef = useRef<any>()

  const scrollTo = (index: number) =>{
    parallaxRef.current.scrollTo(index)
  }

  return (
    <ThemeProvider theme={theme}>
    <div className="App" style={{backgroundColor: "#1c1c1c"}}>
      <Navbar scrollTo={scrollTo}/>
      <body>
        <Parallax ref={parallaxRef} pages={3} style={{top: '0', left: '0', backgroundColor: '#1c1c1c', alignItems:"center", width: "100%"}} className="background-parallax">
          <ParallaxLayer offset={0} speed={.05} style={{backgroundSize: 'cover'}} className="parallax-sky"></ParallaxLayer>
          <ParallaxLayer offset={0} speed={-0.4}>
            <div className='title'>
              <Typography variant='h1' sx={{fontWeight: 700, fontSize: '7rem'}}>HENRY LAO</Typography>
              <Typography variant='h3' sx={{fontWeight: 100, fontSize: '3rem'}}>Full Stack Developer</Typography>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={.20} style={{backgroundSize: 'cover'}} className="parallax-mountains"></ParallaxLayer>
          <ParallaxLayer offset={0} speed={.25} style={{backgroundSize: 'cover'}} className="parallax-city"></ParallaxLayer>
          <ParallaxLayer offset={0} speed={.75} style={{backgroundSize: 'cover'}} className="parallax-person"></ParallaxLayer>
          <ParallaxLayer offset={.99} speed={.75} factor={2} style={{backgroundSize: 'cover', backgroundColor: '#1c1c1c'}}>
            <div>
            <About/>
            </div>
            <Grid container direction="column" alignItems="center" id="hello">
              <div style={{height: "100px", width: "1px", backgroundColor:"#FFF", left:"50%"}}/>
              <Typography py={"35px"} color="#FFF" sx={{alignContent:"center"}}>WORKS</Typography>
            </Grid>
            <Works/>
          </ParallaxLayer>
        </Parallax>
      </body>
    </div>
    </ThemeProvider>
  );
}

export default App;
