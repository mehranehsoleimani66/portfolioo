import './Skill.css'
import html from '.images/html.png';
import css from '.images/css.png';
import js from '.images/js.png';
import bt from '.images/bt.png';
import tw from '.images/tw.png';
import react from '.images/react.png';
import Skill from './skill';
const Skills = () => {
    return ( 
<div>
<Skill Skillname='HTML' describtion='' image={html}/>
<Skill name='CSS' describtion='' image={css}/>
<Skill name='JAVASCRIPT' describtion='' image={js}/>
<Skill name='REACT' describtion='' image={bt}/>
<Skill name='TAILWIND' describtion='' image={tw}/>
<Skill name='BOOTSTRAP' describtion='' image={react}/>
</div>


     );
}
 
export default Skills;

