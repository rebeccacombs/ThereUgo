import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const mock = [
];

const About = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box marginBottom={8}>

      <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
        <Grid item xs={6}>
          <Box>
            <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 700 }}>
            What is ThereUgo?
      </Typography>
            <Typography component={'p'} color={'text.secondary'}>
            ThereUgo, is an online summarizing web app, that can identify key points,
analysise findings and explain terminology just like an actual teacher.
             </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
          <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 700 }}>
          Who is it for?
      </Typography>
            <Typography component={'p'} color={'text.secondary'}>
            ThereUgo is for students, researcher, journalists and for anyone searching for
a tool that can save time.
             </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
