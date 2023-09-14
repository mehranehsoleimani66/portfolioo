import './Skill.css';
const Skill = ({name,describtion,image}) => {
    return ( 

<div className='skillBox' style={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItem:'center'}}>
    <div className='skilltitle'>
    <div className='skillImage'>
        <div><img className='img' src={image}/></div>
       <div><h2>{name}</h2></div>
       <div><p>{describtion}</p></div>
    </div>
    </div>
</div>

     );
}
 
export default Skill;