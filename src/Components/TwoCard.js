import { makeStyles } from '@material-ui/core';
import { FileCopy } from '@material-ui/icons';
import React from 'react'


const useStyles = makeStyles((theme) => ({
    mainCard: {
        display: "flex",
        justifyContent: "space-between",
        fontWeight: "600",
    },
    cards: {
        padding: "1.2rem",
        backgroundColor: "#191B20",
        borderRadius: "20px",
        width:"47%"
    },
    cardHeading: {
        fontSize: "1.2rem",
        fontWeight: '600',
        padding: "5px"
    },
    cardBody: {
        color: "gray",
        padding: "5px",
        marginBottom: "8px"
    },
    cardBox: {
        backgroundColor: "#242731",
        borderRadius: "10px",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between"
    }
}));

const TwoCard = () => {

    const classes = useStyles();
    return (
        <div container className={classes.mainCard}>
            <div item className={classes.cards} >
                <div className={classes.cardHeading}>
                    12.5% of fee
                </div>
                <div className={classes.cardBody}>
                    Your Referral Link of xyz
                </div>
                <div className={classes.cardBox}>
                    <div >
                        https://unityexchange.design
                    </div>
                    <div>
                        <FileCopy/>
                    </div>
                </div>
            </div>

            <div item className={classes.cards} >
                <div className={classes.cardHeading}>
                    12.5% of fee
                </div>
                <div className={classes.cardBody}>
                    Your Referral Link of xyz
                </div>
                <div className={classes.cardBox}>
                    <div >
                        https://unityexchange.design
                    </div>
                    <div >
                        <FileCopy/>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default TwoCard;