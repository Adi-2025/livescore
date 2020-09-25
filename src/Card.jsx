import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, Typography, DialogActions } from '@material-ui/core';
import { getMatches, getMatchDetail } from './Api';
import vs from "../src/Images/vs.png";


const Card = ({match}) =>{

 const [detail,setDetail]=useState({});
 const [open,setOpen] =useState(false);
 

 const  handleClick=(id)=>{
   getMatchDetail(id).then((data)=>{console.log("Match Data : ",data);
   setDetail(data);
   handleOpen();
  })
   .catch((error)=>console.log(error));

 }


  const getMatchCart = () =>{
     return(<>
         
          <div className = "col-md-4 col-10 mx-auto">
               <div className="card">
                      <div className="card-body" justify="center" style={{height:"15rem"}}>
                      <center>
                        <h3 className="card-title" style={{backgroundColor:"Olive"}}>{match["team-1"]}</h3>
                        <img src={vs} alt="#" style={{height:'3rem'}}/>
                        <h3 className="card-title" style={{backgroundColor:"SeaGreen"}}>{match["team-2"]}</h3></center>
                        <a href="#" className="btn btn-primary"  style={{backgroundColor:"DimGray"}}>Start Time  {new Date(match.dateTimeGMT).toLocaleString()}</a>
                        <Button onClick={()=>{
                          handleClick(match.unique_id);
                        }}><a href="#" className="btn btn-primary">Show Details</a></Button>
                       
                      </div>
                      
                </div>
            </div>
            
     </>);
  };



const handleClose=()=>{
 setOpen(false);
}



const handleOpen=()=>{
 setOpen(true);
}



const getDialog=()=>(

   <Dialog open={open} onClose={handleClose}>
     <DialogTitle id="alert-dialog-title">{"Match Detail..."}</DialogTitle>
     <DialogContent>
       <DialogContentText id="alert-dialog-description">
        <Typography>{detail.stat}</Typography>
        <Typography>Match<span style={{fontStyle:"italic",fontWeight:"bold"}}>
        {detail.matchStarted?"Started":" Not Started Yet"}</span></Typography>
        <Typography>Match<span style={{fontStyle:"italic",fontWeight:"bold"}}>{detail.score}</span></Typography>
       </DialogContentText>
     </DialogContent>


     <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Close
        </Button>
     </DialogActions>

   </Dialog>

)


 return (<>
    {getMatchCart()}
    {getDialog()}

 </>
    
 );
};


export default Card;
