import React,{useState, lazy} from 'react';


export default function Crew(props) {
  const crewData = props.data;
  const [crew, setCrew] = useState(crewData[3]);
  
  const handleCrewData =(item)=>{
    setCrew(item);
  }

  //storing the <li> of all the moons in a single array
  const temp = crewData.map((item,index) => <li key={index} onClick={()=>handleCrewData(item)}></li>)
  
  return (
    <div className='crew'>
      <img src="./assets/crew/background-crew-desktop.jpg" className='background-img'
       loading={lazy} alt='stars-backbround' width={"100%"} />
      <h4 className='heading-info'><span>02</span> MEET YOUR CREW</h4>
      <div className='parent'>
        <div className='child1'>
          <h3 className='crew-role'>{crew.role}</h3>
          <h2 className='crew-name'>{crew.name}</h2>
          <p className='crew-bio'>{crew.bio}</p>

          <ul className='crewChange-icon'>
            {temp}
          </ul>
        </div>
        <div className='child2'> 
          <img src={crew.images.png} className='crew-img' loading={lazy} width="100%" alt='crew'/>
        </div>
      </div>
    </div>
  )
}
