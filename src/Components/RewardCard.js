import { Button, makeStyles } from '@material-ui/core';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';
import React from 'react'

const rewardDollor = 0.26231428;

const useStyles = makeStyles((theme) => ({
    cardSec: {
        padding: "0.5px 20px 20px 30px",
        borderRadius: "20px",
        backgroundColor:"#191B20",
        marginBottom:"2rem"
    },
    heading: {
        fontSize: "1.2rem"
    },
    body: {
        display: "flex",
        justifyContent: "space-between"
    },
    amount: {
        fontSize: "1.5rem",
        fontWeight:"600"
    },
    btn: {
        backgroundColor: "#3772FF",
        color: "white",
        borderRadius: "10px",
        fontWeight: "bold",
        textTransform:"none",
        '&:hover': {
            backgroundColor: '#4b80ff'
        }
    },
    bodyEnd: {
        display: "block",
        marginTop:"1rem"
    },
    threeBtn:{
        backgroundColor:"#333",
        color:"white",
        marginRight:"1rem",
        borderRadius:"1rem",
        '&:hover':{
            backgroundColor:"#222",
        }
    }
}));

const RewardCard = () => {

    const classes = useStyles();

    return (
        <div className={classes.cardSec}>
            <p className={classes.heading}>Your rewards</p>
            <div className={classes.body}>
                <div className={classes.amount}>${rewardDollor}</div>
                <div ><Button className={classes.btn} variant='contained' startIcon={<LaunchOutlinedIcon />}>Custom link</Button></div>
            </div>
            <div className={classes.bodyEnd}>
                <Button className={classes.threeBtn}>$40 avax</Button>
                <Button className={classes.threeBtn}>$10 bnb</Button>
                <Button className={classes.threeBtn}>$210 btc</Button>
            </div>
        </div>
    )
}

export default RewardCard;