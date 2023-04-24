import React, { useState } from 'react';

/*here since i have added data from json file which means getting data dynamically so, i have to put all images folder
  inside public folder, so i can add img using src as string directly 
*/
//import starsImg from "./assets/destination/background-destination-desktop.jpg";
//import marsImg from "../assets/destination/image-mars.png"; 
// import { Link } from 'react-router-dom';


export default function Destination(props) {
  const destData = props.data;
  const [moonData, setMoonData] = useState(destData[0]);
  
  const handleMoonData =(moonName)=>{
    setMoonData(destData[moonName]);
  }

  //storing the <li> of all the moons in a single array
  const temp = [0,1,2,3].map((item,index) => <li key={index}><a href='#' onClick={()=>handleMoonData(item)}>{destData[item].name}</a></li>)
  
  
  return (
    <div className='destination'>
      <img src="./assets/destination/background-destination-desktop.jpg" className='background-img' alt='stars-backbround' width={"100%"} />
      <h4 className='heading-info'><span>01</span> PICK YOUR DESTINATION</h4>
      <div className='parent'>
        <div className='child1'>
          <img src={moonData.images.png} className='mars-img' width="320px" alt='mars'/>
        </div>
        <div className='child2'> 
          <ul>
            {temp}
          </ul>

          <div className='moon-info'>
            <h2>{moonData.name}</h2>
            <p className='info1'>{moonData.description}
            </p>

            <div className='parent-moon'>
              <div className='child-info2'>
                <p className='value1'>avg. distance</p>
                <p className='value2'>{moonData.distance}</p>
              </div>
              <div className='child-info3'>
                <p className='value1'>est.travel time</p>
                <p className='value2'>{moonData.travel}</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
