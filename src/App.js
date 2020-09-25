import React, { useEffect, useState, Fragment } from 'react';
import logo from "../src/Images/logo1.png";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Card from "./Card";
import Navbar from './Navbar';
import {getMatches} from './Api';
import Blink from 'react-blink-text';
import car from "../src/Images/cri4.jfif";

const App =() =>{

   const [matches, setMatches]  = useState([]);


  useEffect(() => {
   getMatches().then((data) =>{setMatches(data.matches);
   console.log(data.matches);
  })
   .catch((error)=>alert("could not load data server problem"));
  }, []);


   

  return(<>
  <Navbar/>

  <div className ="card" style={{height:"5rem"},{backgroundColor:"#532BC3"}}>
      <strong>
      <h1 className ="card-body align-items-center d-flex justify-content-center"> <Blink color='Maroon' text='Watch Live Cricket Score'>
        </Blink></h1></strong>
  </div>
 
  
  
    <div className = "container-fluid mb-5 my-5">
         <div className = 'row'>
             <div className = "col-10 mx-auto">
                <div className = 'row gy-4'>
                  {
                       matches.map((match) =>(
                            <>
                          {
                            match.type=="Twenty20"
                            ?(<Card key={match.unique_id} match={match} />)
                            :("")
                            }
                        </>
                  
                  ))}
                </div>
             </div>
         </div>
     </div>
  </>);
};

export default App;
