import React from 'react';
import { Container, AppBar, Toolbar, Typography } from '@material-ui/core';
import Link from 'next/link';
import useStyles from '../utils/styles';

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Link href="/">
            <a className={classes.brand}>
              <Typography><h1>Business_Card_Generator</h1></Typography>
            </a>
          </Link>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
    </div>
  );
}
