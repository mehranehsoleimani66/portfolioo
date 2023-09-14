

import { FaFacebookF, FaInstagram,FaYoutube } from 'react-icons/fa6';import './Contact.css';

const Contact = () => {
    return ( 
        <div className='cantact-me'>
            <p>Let Me Give You A Beautifull Website</p>
            <a className='button-two' href="#">Hire Me</a>
            <p></p>
            <div className='social'>
               <a className='i'><FaInstagram/></a> 
                <a className='i'><FaYoutube/></a>
                <a className='i'><FaFacebookF/></a>
            </div>
            <p className='end'>CopyRight By Mehraneh</p>
        </div>
     );
}
 
export default Contact;
