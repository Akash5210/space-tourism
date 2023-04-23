import React from 'react';
// import homeImg from "./assets/home/background-home-desktop.jpg"

export default function Home() {
  return (
    <div className='homepage'>
        <img src="./assets/home/background-home-desktop.jpg" className='background-img' alt='earth-backbround' width={"100%"} height={"100%"}/>
        <div className='home-parent'>
            <div className='child-space'>
                <h4>SO, YOU WANT TO TRAVEL TO</h4>
                <h1>SPACE</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely 
                    go to outer space and not hover kind of on the edge of it. Well sit 
                    back, and relax because we’ll give you a truly out of this world experience!
                </p>
            </div>
            <div className='child-explore'>
                <span className='explore'>EXPLORE</span>
            </div>
        </div>
    </div>
  )
}
