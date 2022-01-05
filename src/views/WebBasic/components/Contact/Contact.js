/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Typed from 'react-typed';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const validationSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid full name')
    .max(50, 'Please enter a valid full name')
    .required('Please specify your full name'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required'),
});

const Contact = () => {
  const theme = useTheme();

  const initialValues = {
    fullName: '',
    email: '',
  };

  const onSubmit = (values) => {
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Box>
      <Grid container spacing={4}>
      <Grid item container justifyContent={'center'} xs={12} md={6}>
          <Box height={1} width={1} maxWidth={500}>
            <Box
              component={'img'}
              src={
                'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration2.svg'
              }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Grid>
        <Grid
          item
          container
          alignItems={'center'}
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Box>
            <Box marginBottom={2}>
              <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                Learn with ThereUgo
                <Typography
                  color={'primary'}
                  component={'span'}
                  variant={'inherit'}
                >
                </Typography>
              </Typography>
            </Box>
            <Grid container spacing={1}>
              {[
                'Automatically create study notes and flashcards',
                'Explain complex concepts in simple manner',
                'TL:DR summarization',
                'Highlight important points',
              ].map((item, i) => (
                <Grid item xs={12} sm={12} key={i}>
                  <Box
                    component={ListItem}
                    disableGutters
                    width={'auto'}
                    padding={0}
                  >
                    <Box
                      component={ListItemAvatar}
                      minWidth={'auto !important'}
                      marginRight={2}
                    >
                      <Box
                        component={Avatar}
                        bgcolor={theme.palette.secondary.main}
                        width={20}
                        height={20}
                      >
                        <svg
                          width={12}
                          height={12}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Box>
                    </Box>
                    <ListItemText primary={item} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
