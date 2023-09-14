import './Skill.css'

const Skill = () => {
    return ( 
<section style={{display:'flex', flexDirection:'column' , width:'80%', margin:'auto' , justifyContent:'center',alignItem:'start'}}>
<header className='skill'>My Skills</header>
<div style={{width:'50px',innerHeight:'5px', backGround:'red'}}></div>
<div className='container' style={{display:'flex', flexDirection:'row',gap:"50px" , width:'80%', margin:'auto' , justifyContent:'center',alignItem:'center'}}>

<div className='skillBox' style={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItem:'center'}}>
    <div className='skilltitle'>
    <div className='skillImage'>
        <div><img className='img' src='./images/js.png'/></div>
       <div><h2>JAVA SCRIPT</h2></div>
       <div><p>Lore lus vitae congue mauris rhoncus aeneat, consectetur adipiscing elit, sed do eiusmon vel elit scelerisque.   </p></div>
    </div>
    </div>
</div>
<div className='skillBox' style={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItem:'center'}}>
    <div >
    <div className='skilltitle' >
        <div><img className='img' src='./images/html.png'/></div>
       <div><h2>HTML 5</h2></div>
       <div><p style={{alignItem:'left'}}>Lore lus vitae congue mauris rhoncus aeneat, consectetur adipiscing elit, sed do eiusmon vel elit scelerisque.   </p></div>
    </div>
    </div>
</div>
<div className='skillBox' style={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItem:'center'}} >
    <div className='skilltitle'>
    <div className='skillImage'>
        <div><img className='img' src='./images/tw.png'/></div>
       <div><h2>TAILWIND</h2></div>
       <div><p>Lore lus vitae congue mauris rhoncus aeneat, consectetur adipiscing elit, sed do eiusmon vel elit scelerisque.   </p></div>
    </div>
    </div>
</div>

<div className='skillBox' style={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItem:'center'}}>
    <div className='skilltitle'>
    <div className='skillImage'>
        <div><img className='img' src='./images/bt.png'/></div>
       <div><h2>BOOTSTRAPT</h2></div>
       <div><p>Lore lus vitae congue mauris rhoncus aeneat, consectetur adipiscing elit, sed do eiusmon vel elit scelerisque.   </p></div>
    </div>
    </div>
</div>
<div className='skillBox' style={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItem:'center'}}>
    <div className='skilltitle'>
    <div className='skillImage'>
        <div><img className='img' src='./images/react.png'/></div>
       <div><h2>REACT</h2></div>
       <div><p>Lore lus vitae congue mauris rhoncus aeneat, consectetur adipiscing elit, sed do eiusmon vel elit scelerisque.   </p></div>
    </div>
    </div>
</div>

</div>

</section>

     );
}
 
export default Skill;

