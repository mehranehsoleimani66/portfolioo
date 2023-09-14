const Skill = ({name,describtion,image}) => {
    return ( 
<div style={{display:'flex', flexDirection:'column' , width:'80%', margin:'auto' , justifyContent:'center',alignItem:'start'}}>
<header className='skill'>My Skills</header>
<div style={{width:'50px',innerHeight:'5px', backGround:'red'}}></div>
<div className='container' style={{display:'flex', flexDirection:'row',gap:"50px" , width:'80%', margin:'auto' , justifyContent:'center',alignItem:'center'}}>

<div className='skillBox' style={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItem:'center'}}>
    <div className='skilltitle'>
    <div className='skillImage'>
        <div><img className='img' src={image}/></div>
       <div><h2>{name}</h2></div>
       <div><p>{describtion}</p></div>
    </div>
    </div>
</div>
</div>
</div>
     );
}
 
export default Skill;