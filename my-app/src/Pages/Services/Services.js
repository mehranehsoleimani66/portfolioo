import './Services.css';
import { FaRegUser,FaBars,FaRegBell } from 'react-icons/fa6';
const Services = () => {
    return (  
        <div className="services">
            <div className='title'>
                <h2>SERVICES</h2>
            </div>
            <div className='box'>




                <div className='card'>
           <FaBars className='i'/>
                    <h5>WEB DEVELOPER</h5>
                    <div className='pra'>
                        <p>every website should be built two primary goals:firstly: it needs to work across all devices.Secondly, it needs to be fast as possible  </p>
                    
                    <p style ={{textAlign:'center'}} ></p>
                     <a className='button' href='#' >READ MORE</a>
                     </div>
                </div>
          



          
                <div className='card'>
               <FaRegUser className='i'/>
                    <h5>WEB DEVELOPER</h5>
                    <div className='pra'>
                        <p>every website should be built two primary goals:firstly: it needs to work across all devices.Secondly, it needs to be fast as possible  </p>
                    
                    <p style ={{textAlign:'center'}} ></p>
                     <a className='button' href='#' >READ MORE</a>
                     </div>
                </div>
      

           
                <div className='card'>
               <FaRegBell className='i'/>
                    <h5>WEB DEVELOPER</h5>
                    <div className='pra'>
                        <p>every website should be built two primary goals:firstly: it needs to work across all devices.Secondly, it needs to be fast as possible  </p>
                    
                    <p style ={{textAlign:'center'}} ></p>
                     <a className='button' href='#' >READ MORE</a>
                     </div>
                </div>
            </div>
            </div>
      
   
    );
}
 
export default Services;
