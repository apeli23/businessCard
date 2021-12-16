import React, { useState } from 'react';
import Layout from '../components/Layout';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import useStyles from '../utils/styles';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Card,
} from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';

export default function Forms() {
  const classes = useStyles();

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  function submitHandler() {
    console.log('submit handler');
  }

  return (
    <Layout>
      <div className={classes.form}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '90%' },
        }}
        noValidate
        autoComplete="off"
      >
        <List id="center">
          <Typography component="h3" variant="h3">
            Fill Form
          </Typography>
          <ListItem>
            <TextField
              fullWidth
              required
              id="name"
              label="Full Name"
              defaultValue=""
            />
          </ListItem>
          <ListItem>
            <TextField
              fullWidth
              required
              id="brandname"
              label="Company/Business Name"
              defaultValue=""
            />
          </ListItem>
          <ListItem>
            <TextField
              id="phonenumber"
              label="Phone Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </ListItem>
          <ListItem>
            <TextField
              fullWidth
              required
              id="email"
              label="Email"
              defaultValue=""
            />
          </ListItem>
          <ListItem>
            <TextField
              fullWidth
              required
              id="location"
              label="Location"
              defaultValue=""
            />
          </ListItem>
          <ListItem>
            <Button variant="contained" component="label">
              Upload File
              <input
                type="file"
                onChange={(e) => {
                  console.log(e.target.files[0].name);
                }}
                hidden
              />
            </Button>
          </ListItem>
          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Submit
            </Button>
          </ListItem>
        </List>
      </Box>
      </div>
    </Layout>
  );
}
