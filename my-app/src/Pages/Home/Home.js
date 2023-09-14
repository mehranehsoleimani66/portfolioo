
import { Link } from 'react-router-dom';
import './Home.css';
import Header from '../../component/Header';
const Home = () => {
    return ( 
        
               <div className='content'>
                <h4>Hello , my name is</h4>
                <h1>Mehraneh <span>Soleymani</span> </h1>
                <h3>I'm frontend developer.</h3>
                <div className='newsLatter'>
                <div ><img className='myPic' src='./images/me.jpg'/></div> 
                    <form>
                        <input type='email' name='email' id='mail' placeholder='Enter Your Email'/>
                         <input type ='submit' name='Submit' value='Lets Start' />
                    </form>
                </div>

       </div> 
        
     );
}
 
export default Home;