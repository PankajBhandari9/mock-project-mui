import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import bitIcon from '../images/11.png';


const useStyles = makeStyles((theme) => ({
    cardTop: {
        padding: "1px 0px 20px 30px",
        borderRadius: "20px",
        backgroundColor: "#ABE8FF",
        marginBottom: "2rem",
        color:'#2B2557',
    },
    heading: {
        fontSize: "1rem",
        padding: "1.5rem 0.5rem",
        fontWeight:"600",
    },
    tutorialBtn:{
        marginTop:"-15px",
        backgroundColor:"#fff",
        color:"#2B2557",
        fontWeight:"600",
        borderRadius:"6px",
        textTransform:"none",
        padding:"2px 20px",
        '&:hover':{
            backgroundColor:"#2B2557",
            color:"#fff",
        }
    },
    iconBit:{
        float:"right",
        margin: "-21px 10px",
        width:"130px",
    }
}));


const TopCard = () => {

    const classes = useStyles();

    return (
        <div className={classes.cardTop}>
            <div className={classes.heading}>
                <div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div>
                    <img src={bitIcon} alt="bit-coin" className={classes.iconBit}/>
                </div>
            </div>
            <div>
                <Button className={classes.tutorialBtn}>Tutorial</Button>
            </div>
        </div>
    )
}

export default TopCard;