import { Button, Fab, makeStyles, TextField, Typography } from '@material-ui/core';
import { ArrowBack, ExitToApp, LaunchOutlined } from '@material-ui/icons';
import React from 'react'
import DropDown1 from './DropDown1';
import DropDown2 from './DropDown2';

const useStyles = makeStyles((theme) => ({
    rightCard: {
        marginTop: "0.5rem",
    },
    flexTwoDiv: {
        display: "flex",
        justifyContent: "space-around"
    },
    boxCustom: {
        marginTop: "2rem"
    },
    customLinkFab: {
        backgroundColor: "black",
        color: "white",
        "&:hover": {
            backgroundColor: "white",
            color: "black",
        }
    },
    linksEntry: {
        marginTop: "1rem",

    }
    ,
    linkA: {
        textDecoration: "none",
        color: "#fff",
        marginLeft: "1rem",
    },
    inputForm: {
        background: "#242731",
        borderRadius: "10px",
        marginTop: "10px",
        marginLeft: "10px",
        width: "90%",
    },
    btn: {
        backgroundColor: "#3772FF",
        color: "white",
        borderRadius: "10px",
        fontWeight: "bold",
        textTransform: "none",
        '&:hover': {
            backgroundColor: '#4b80ff'
        }
    },
    cancelButton:{
        color:"white",
        fontWeight:"bold",
        border:"1px solid gray",
        borderRadius:"10px",
    },
    twoBtn:{
        marginTop:"2rem",
        display: "flex",
        justifyContent: "space-around"
    }
}));

const RightSide = () => {

    const classes = useStyles();
    return (
        <div className={classes.rightCard}>
            <div className={classes.flexTwoDiv}>
                <div>
                    <DropDown1 />
                </div>
                <div>
                    <DropDown2 />
                </div>
            </div>
            <div className={classes.boxCustom}>
                <Typography variant='h6'>
                    <Fab size="small" className={classes.customLinkFab} ><ArrowBack /></Fab>    Custom Link
                </Typography>
                <div className={classes.linksEntry}>
                    <Typography variant="body1">
                        <a href="#https://testnet.xyz.xyz/trade?ref=" className={classes.linkA}>https://testnet.xyz.xyz/trade?ref=</a>
                    </Typography>
                    <div>
                        <TextField className={classes.inputForm} color="primary" label="Enter" variant="outlined" color="primary"
                        />
                    </div>
                </div>

                <div className={classes.twoBtn}>
                    <div >
                        <Button className={classes.btn} variant='contained' startIcon={<LaunchOutlined />}>Custom link</Button>
                    </div>

                    <div>
                        <Button className={classes.cancelButton} startIcon={<ExitToApp />} variant="outlined" >Cancel</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSide;