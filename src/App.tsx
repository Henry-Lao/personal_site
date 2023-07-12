import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Works from "./pages/Works"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { ThemeProvider, createTheme, Typography } from '@mui/material';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Poppins',
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Navbar/>
      <body>
        <Parallax pages={6} style={{top: '0', left: '0'}} className="background-parallax">
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
            <About></About>
            <Works/>
          </ParallaxLayer>
        </Parallax>
      </body>
    </div>
    </ThemeProvider>
  );
}

export default App;
