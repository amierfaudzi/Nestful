import React from 'react';
import useStyles from './navmenu.style';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';


export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <Link href="/" color="inherit" className={classes.link}>Dashboard</Link>
          </Typography>
          <Button color="inherit" href="/signin">Sign In</Button>
          <Button color="inherit" href="/signup">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}