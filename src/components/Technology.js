import React,{useState} from 'react';

export default function Technology(props) {
  const techData = props.data;
  const [technology, setTechnology] = useState(techData[0]);
  
  const handleTechnology =(tech)=>{
    setTechnology(tech);
  }

  //storing the <li> of all the tech in a single array
  const temp = techData.map((item,index) => <li key={index} onClick={()=>handleTechnology(item)}>{index+1}</li>)
  
  return (
    <div className='technology'>
      <img src="./assets/technology/background-technology-desktop.jpg" className='background-img' alt='backbround-img' width={"100%"} />
      <h4 className='heading-info'><span>03</span> SPACE LAUNCH 101</h4>
      <div className='parent'>
        <div className='child3'>
          <ul className='techChange-icon'>
            {temp}
          </ul>
        </div>
        <div className='child1'>
          <h4 className='tech-intro'>THE TERMINOLOG...</h4>
          <h2 className='tech-name'>{technology.name}</h2>
          <p className='tech-description'>{technology.description}</p>
        </div>
        <div className='child2'> 
          <img src={technology.images.portrait} className='tech-img'   alt='tech-img'/>
        </div>
      </div>
    </div>
  )
}
