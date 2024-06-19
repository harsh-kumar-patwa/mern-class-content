import './Navbar.css';
import {useRef} from 'react';
function Navbar(){
    
    return (
        <nav>
            <ul className='navbar'> 
                <li className='navbar-item'><a href='#'>Home</a></li>
                <li className='navbar-item'><a href='#'>About Me</a></li>
                <li className='navbar-item'><a href='#'>Skills</a></li>
                <li className='navbar-item'><a href='#'>Experience</a></li>
                <li className='navbar-item'><a href='#'>Education</a></li>
                <li className='navbar-item'><a href='#'>Portfolio</a></li>
                <li className='navbar-item'><a href='#'>Contact</a></li>
            </ul>
        </nav>
    )
}
export default Navbar;