import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles, Typography } from '@material-ui/core';
import { LaunchSharp } from '@material-ui/icons';


// table bgcolor:242731
const useStyles = makeStyles((theme) => ({
  
  wholeTab: {
    marginTop: "2rem",
  },

  tabUnderLine: {
    borderBottom: "2px solid #2759ef",
    display: "inline-block",
  },
  flexTitles: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#191B20",
    color: "#808191",
    fontWeight: "600",
    fontSize: "10px",
    borderRadius: "8px",
    padding: "14px",
    marginTop: "1.5rem",
  },
  data: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#191B20",
    marginTop: "0.4rem",
    borderRadius: "7px",
    padding: "8px",
    fontSize:"14px",

  },
  assetData: {
    display: "flex",

  },
  floatBit:{
    // float:"left",
    marginTop:"7px",
    marginRight:"8px"
  },
  bscScan:{
    color:"#adadad",
    fontSize:"12px",
  },
  stateE:{
    color:"#808191"
  },
  putSize:{
    fontSize:"12px",
  },
  avax:{
    fontSize:"7.81px",
    backgroundColor:"#353945",
    padding:"4px 8px",
    borderRadius:"12px",
    "&:hover":{
      backgroundColor:"#203945",
      cursor:"pointer"
    },
    marginLeft:"3px"
  },
  avaxIcon:{
    position:"relative",
    top:"2px",
    right:"3px"
  }

}));

const TableTabs = () => {

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/akshita151199/APIs/main/data")
      .then((resp) => {
        setDataList(resp.data.data);
        // console.log(resp.data.data);

      }).catch((err) => {
        console.log(err);
      })

  }, [])

  const classes = useStyles();
  return (
    <div className={classes.wholeTab}>
      <Typography variant="h5" className={classes.tabUnderLine}>
        Tabs
      </Typography>


      <div className={classes.flexTitles}>
        <div>ASSET</div>
        <div>AMOUNT</div>
        <div>USER ACCOUNT</div>
        <div>REFERRAL EARNING</div>
      </div>

      {
        dataList.map((data, idx) => {
          return (
            <div className={classes.data} key={idx}>
              <div className={classes.assetData}>

                <div className={classes.floatBit}>
                  <img src={data.img} alt={data.asset} />
                </div>
                <div >
                  <div>
                    {data.asset}
                  </div>
                  <div>
                    <span className={classes.putSize}>{data.type}</span>
                    <span className={classes.avax}><img src={data.chain.img} alt={data.chain.name} className={classes.avaxIcon}/>{data.chain.name}</span>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  {data.amount} BNB
                </div>
                <div className={classes.stateE}>
                  {data.state}
                </div>
              </div>

              <div>{data.user.slice(0,10)}...{data.user.slice(-10,-1)}</div>

              <div>
                <div>
                  {data.referral_earnings}BNB
                </div>
                <div className={classes.bscScan}>
                  View on BSC Scan <LaunchSharp className={classes.bscScan}/>
                </div>
              </div>

            </div>

          )
        })
      }

    </div>
  )
}

export default TableTabs;