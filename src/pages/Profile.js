import React from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function Profile(){
    return(
        <div className="container d-flex justify-content-center align-items-center">
             
             <div className="card">

              <div className="upper">

                <img src="https://i.imgur.com/Qtrsrk5.jpg" className="img-fluid" alt=""/>
                
              </div>

              <div className="user text-center">

                <div className="profile">

                  <img src="https://i.imgur.com/JgYD2nQ.jpg" className="rounded-circle" width="80" alt=""/>
                  
                </div>

              </div>


              <div className="mt-5 text-center">

                <h1 className="mb-0">Ms. Archana puran</h1>
                <span className="text-muted d-block mb-2">Delhi , India</span><br/>

                <button className="btn btn-primary btn-sm follow">Follow</button>


                <div className="d-flex justify-content-between align-items-center mt-4 px-4">

                  <div className="stats">
                    <h1 className="mb-0">Vehicle :</h1>
                    <span>Electric Vehicle</span>

                  </div>


                  <div className="stats">
                    <h1 className="mb-0">Aadhar ID:</h1>
                    <span>5542 4567 9083</span>

                  </div>


                  <div className="stats">
                    <h1 className="mb-0">Verification Status:</h1>
                    <span><CheckCircleOutlineIcon fontSize="large"/></span>

                  </div>
                  
                </div>
                
              </div>
               
             </div>

           </div>
    )
};