import { Button, Fade, Menu, MenuItem } from '@material-ui/core';
import { ExpandMoreOutlined, MouseOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';

const useStyles=makeStyles((theme)=>({
    btnStyle:{
        color:"#fff",
        backgroundColor:"#191B20",
        borderRadius:"10px",
        textTransform:"none",
        '&:hover':{
            backgroundColor:"#161B20"
        }
    },
    menuItem:{
        backgroundColor:"#191B20",
        '&:hover':{
            backgroundColor:"#fff",
            color:"black",
        }
    }
}));

const DropDown2 = () => {
    const [anchor, setAnchor] = useState(null);
    const handleClick=(e)=>{
        setAnchor(e.currentTarget);
    }
    const handleClose=()=>{
        setAnchor(null);
    }
    const classes=useStyles();
  return (
    <div>
        <Button 
        startIcon={<MouseOutlined/>}
        onClick={handleClick} 
        className={classes.btnStyle} 
        endIcon={<ExpandMoreOutlined/>}
        variant="outlined"
        color="primary"
        >
        0FX6...1353
        </Button>
        <Menu 
        open={anchor} 
        onClose={handleClose} 
        keepMounted
        anchorEl={anchor} // for Anchoring purpose
        TransitionComponent={Fade}
        >
            <MenuItem className={classes.menuItem} onClick={handleClose}>Profile</MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose}>Account</MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose}>Log Out</MenuItem>
        </Menu>
    </div>
  )
}

export default DropDown2;