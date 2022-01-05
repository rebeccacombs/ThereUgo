import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

const Services = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h4" textAlign="center"><b>Backed by the best in the world.</b></Typography>
    </Box>
  );
};

export default Services;
