import  './Skill.css';
import Skill from './Skill';
const Skills = () => {
    return ( 
<div style={{display:'flex', flexDirection:'column' , width:'80%', margin:'auto' , justifyContent:'center',alignItem:'start'}}>
<header className='skill'>My Skills</header>
<div style={{width:'50px',innerHeight:'5px', backGround:'red'}}></div>
<div className='container' style={{display:'grid',gridTemplateColumns:' auto auto  auto',gap:"200px" ,padding:'20px', width:'100%', margin:'auto' , justifyContent:'center',alignItem:'center'}}>

<Skill  name='HTML' describtion='Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.' image='/image/html.png'/>
<Skill name='CSS' describtion='Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.' image='/image/css.png'/>
<Skill name='JAVASCRIPT' describtion='Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.' image='/image/js.png'/>
<Skill name='REACT' describtion='Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.' image='/image/react.png'/>
<Skill name='TAILWIND' describtion='Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.' image='/image/tw.png'/>
<Skill name='BOOTSTRAP' describtion='Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.' image='/image/bt.png'/>

</div>
</div>


     );
}
 
export default Skills;

