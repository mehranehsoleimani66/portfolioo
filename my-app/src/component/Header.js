import { Link } from "react-router-dom";
import './Header.css';
const Header = () => {
    return ( 
        <div className='hero'>
        
    <nav className='nav'>
                <h2 className='logo'>Port<span>folio</span></h2>
           <ul>
           <li><Link to='/' >Home</Link></li>
           <li><Link to='/contact'>Contact Me</Link></li>
           <li><Link to='/services'>Services</Link></li>
           <li><Link to='/skill'>Skills</Link></li>
           <li><Link to='/aboutme' >About Me</Link></li>
           

            
           </ul>
           <a href="#" className="btn">Subscribe</a>
   </nav>
   </div>
     );
}
 
export default Header;