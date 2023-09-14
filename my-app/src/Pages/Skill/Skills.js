import './Skill.css'
import Skill from './Skill';
import html from '/image/html.png';
import css from '/image/css.png';
import js from '/image/js.png';
import bt from '/image/bt.png';
import tw from '/image/tw.png';
import react from '/image/react.png';

const Skills = () => {
    return ( 
<div style={{display:'flex', flexDirection:'column' , width:'80%', margin:'auto' , justifyContent:'center',alignItem:'start'}}>
<header className='skill'>My Skills</header>
<div style={{width:'50px',innerHeight:'5px', backGround:'red'}}></div>
<div className='container' style={{display:'grid',gridTemplateColumns:' auto auto  auto',gap:"200px" ,padding:'20px', width:'100%', margin:'auto' , justifyContent:'center',alignItem:'center'}}>

<Skill  name='HTML' describtion='' image={html}/>
<Skill name='CSS' describtion='' image={css}/>
<Skill name='JAVASCRIPT' describtion='' image={js}/>
<Skill name='REACT' describtion='' image={bt}/>
<Skill name='TAILWIND' describtion='' image={tw}/>
<Skill name='REACT' describtion='' image={react}/>

</div>
</div>


     );
}
 
export default Skills;

