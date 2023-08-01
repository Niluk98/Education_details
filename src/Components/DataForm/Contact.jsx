import React, { useEffect, useState } from 'react'

const Contact = () => {
  const [finalData,setFinalData]=useState({});
  const [data,setData]=useState({
    name:'',
    dob:'',
    education:[]
  })

  const [education,setEducation]=useState([{
    degree:'',
    university:'',
    passpout:''

  }]);
 
  const [studyCount,setStudyCount]=useState(0);
  const handleEducationDetails=(e)=>{
    e.preventDefault();
    setStudyCount(studyCount+1);
    const newEducation={
      degree:'',
      university:'',
     

    };
    setEducation([...education,newEducation]);

  }
  const handleDelete=(e,index)=>{
    e.preventDefault();
    const deletedEdu=[...education];
    deletedEdu.splice(index,1);
    setEducation([...deletedEdu]);
  }
  
  
  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value});
       
  }
  const handleEducationChange=(e,index)=>{
    
    const eduDetails=[...education];
    eduDetails[index]={
      [e.target.name]:e.target.value,

    }
    setEducation(eduDetails);
    setData({...data,education:education});
       
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setFinalData(data);
    
  }

  
  return (
    <div className='container' style={{padding:"2rem"}}>  
  <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Date of Birth</label>
    <input type="date" className="form-control" name='dob' id="exampleInputPassword1" onChange={handleChange}/>
  </div>
  <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Education Details</label>
  </div>
  <div className="education" style={{border:'1px solid black',padding:'1rem',marginBottom:'1rem'}}>
  {education.map((item,index)=>{
    return (<div key={index} className='education-card' style={{padding:"1rem"}}>
      <h6>Education {index+1}</h6>
      <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Degree</label>
    <input type="text" className="form-control" name='degree' id="exampleInputPassword1" onChange={(e)=>handleEducationChange(e,index)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">University</label>
    <input type="text" className="form-control" name='univesity' id="exampleInputPassword1" onChange={(e)=>handleEducationChange(e,index)}/>
  </div>
  {index===0?null:<button className='btn btn-danger btn-xs' onClick={(e)=>handleDelete(e,index)}>Delete</button>}


    </div>)
  })}
  </div>
  
  <div className="mb-3">
  <button className='btn btn-primary btn-sm' onClick={handleEducationDetails}>Add More</button>
  </div>
  
  


  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
      
    </div>
  )
}

export default Contact
