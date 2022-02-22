import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawerList from './SideDrawerList';
import { Box, createTheme, Grid, ThemeProvider } from '@material-ui/core';
import { ArrowBackOutlined } from '@material-ui/icons';
import RewardCard from './RewardCard';
import TopCard from './TopCard';
import TwoCard from './TwoCard';
import RightSide from './RightSide';
import TableTabs from './TableTabs';

// font-family: 'Nanum Gothic', sans-serif;
const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: "#000",
    color: "white",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#000"
  },
  appBarShift: {
    // marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    borderRight: "1.5px solid #555"
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: "0 15px",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  iconColor: {
    color: "#808191",
  },
  whiteColor: {
    color: '#fff',
  },
  selectBorder: {
    borderBottom: "2px solid #2759ef"
  },
  rightSide: {
    zIndex: theme.zIndex.drawer + 2,
    backgroundColor: "#000",
    padding: "10px",
    borderLeft: "1.5px solid #555",
    color: "#fff"
  }
}));


const SideDrawer = () => {

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const theme = createTheme({
    palette: {
      background: {
        paper: '#000',
      },
      text: {
        primary: "#808191",
        secondary:"#505050"
      }
    },

  });

  return (
    <Box display="flex">
      <ThemeProvider theme={theme}>
        <Grid container>
          <Grid item xs={9}>

            <div className={classes.root}>
              <CssBaseline />
              <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                  [classes.appBarShift]: open,
                })}
              >
                <Toolbar>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                      [classes.hide]: open,
                    })}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" noWrap className={classes.selectBorder}>
                    Section
                  </Typography>
                </Toolbar>
              </AppBar>
              <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open,
                })}
                classes={{
                  paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                  }),
                }}
              >
                <div className={classes.toolbar}>
                  <Box display="flex">
                    <Box >
                      <Typography variant="h5" >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Eo_circle_blue_letter-n.svg" alt="N" width={30} />
                      </Typography>
                    </Box>
                    <Box item>
                      <Typography variant="h5" className={classes.whiteColor} >
                        <b>Name</b>
                      </Typography>
                    </Box>
                  </Box>
                  <IconButton onClick={handleDrawerClose}>
                    <ArrowBackOutlined className={classes.whiteColor} />
                  </IconButton>
                </div>
                <Divider />
                <SideDrawerList iconColor={classes.iconColor} />
                <Divider />

              </Drawer>
              <div className={classes.content}>
                <div className={classes.toolbar} />

                <Grid item>
                  <Typography>
                    <TopCard />
                    <RewardCard />
                    <TwoCard />
                    <TableTabs/>
                  </Typography>
                </Grid>
              </div>
            </div>
          </Grid>
          <Grid item xs={3} className={classes.rightSide}>
            <Typography >
              <RightSide/>
            </Typography>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  )
}

export default SideDrawer;