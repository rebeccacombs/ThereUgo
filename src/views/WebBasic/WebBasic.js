import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  About,
  Contact,
  Faq,
  Hero,
  Partners,
  Services,
} from './components';

const WebBasic = () => {
  const theme = useTheme();

  return (
    <Main>
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
          marginTop: -13,
          paddingTop: 13,
        }}
      >
        <Container>
          <Hero />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: '100%',
            marginBottom: theme.spacing(-1),
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
      <Container paddingTop={'0 !important'}>
        <Services />
      </Container>
      <Container maxWidth={1} paddingTop={'0 !important'}>
        <Partners />
      </Container>
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Box>
          <Container>
          </Container>
          <Container paddingTop={'0 !important'}>
            <Faq />
            <About />
          </Container>
        </Box>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: '100%',
            marginBottom: theme.spacing(-1),
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
      <Box bgcolor={'alternate.main'}>
      </Box>
      <Container> 
        <Contact /> 
      </Container>
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      ></Box>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: '100%',
            marginBottom: theme.spacing(-1),
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>

    </Main>
  );
};

export default WebBasic;
