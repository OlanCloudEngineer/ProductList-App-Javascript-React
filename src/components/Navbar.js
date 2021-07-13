import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../images/GravityWellLogo.gif';

import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";



const Navbar = ({icon,title}) =>{
 
        return (
            <nav className="navbar  bg-primary">
              <div className='medium'>
              
             {icon}{title}
           
              </div>

            <ul>
                
               
                <li>
                <Link to='/widgets'>Widgets</Link>
                </li>
                <li>
                <Link to='/wudgets'>Wudgets</Link>
                </li>
                <li>
                <Link to='/doodads'>Doodads</Link>
                </li>
                <li>
                <Link to='/'>Home</Link>
                </li>
               
            </ul>
          </nav>
        )
    
}
 Navbar.defaultProps={
  title:'Gravity Well Gadgets',
  icon: <img src={logo} height='25px' width='10px'/>
};

export default Navbar