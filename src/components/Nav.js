import React from 'react';
import { Link } from 'react-router-dom';
//import starLogo from "./assets/shared/logo.svg"

export default function Nav() {
  return (
    <div className='navbar'>
        <div className='icon-line'>
          <img src="./assets/shared/logo.svg" alt='star-logo' />
          <hr />
        </div>
        <ul>
          <li><Link to="/"><a ><strong>00</strong> home</a></Link></li>
          <li><Link to="/destination"><a ><strong>01</strong> destination</a></Link></li>
          <li><Link to="/crew"><a ><strong>02</strong> crew</a></Link></li>
          <li><Link to="/technology"><a ><strong>03</strong> technology</a></Link></li>
        </ul>

    </div>
  )
}
