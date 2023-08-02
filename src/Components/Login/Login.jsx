import React, { useState } from 'react'

const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [corrEmail,setCorrEmail]=useState(true);
  const[corrPass,setCorrPass]=useState(true);
  const [showPassword,setShowPassword]=useState(false);
  const handleChange=(e)=>{
      if(e.target.name==='email'){
        let mail=e.target?.value;
        
        if(mail.indexOf('@')!==-1&&mail.indexOf('@')===mail.lastIndexOf('@') && mail.indexOf('.')!==-1){
          setCorrEmail(true);
          setEmail(mail);
        }else{
          setCorrEmail(false);
        }

      }else if(e.target.name==='password'){
        let pass=e.target.value;

        if(/[a-z]/.test(pass) && /[0-9]/.test(pass)&& /[A-Z]/.test(pass) && /[@#$%&*]/g.test(pass) && pass.length>=8){
          setCorrPass(true);
          setPassword(pass);


        }else{
          setCorrPass(false);
        }
        console.log(pass)
        
      }
  }

  return (
    <div className="conatainer" style={{background:'black',minHeight:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div className='container' style={{padding:'2rem',background:'#FFF',minHeight:'25rem',width:'40rem',borderRadius:'1rem'}}>
        <form >
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name='email' onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {corrEmail?<div id="emailHelp" className="form-text" style={{color:'green'}}></div>:<div id="emailHelp" style={{color:'red'}} className="form-text">Enter valid email!</div>}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type={showPassword?'text':'password'}
     name='password' onChange={handleChange}
      className="form-control"
      
       id="exampleInputPassword1"/>
       {showPassword==false?<i class="fa-solid fa-eye" id="eye" onClick={()=>setShowPassword(true)}></i>:<i class="fa-solid fa-eye-slash" onClick={()=>setShowPassword(false)} id="eye"></i>}
    {corrPass?<div id="emailHelp" className="form-text" style={{color:'green'}}></div>:<div id="emailHelp" style={{color:'red'}} className="form-text">Enter valid Password</div>}

  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me!</label>
  </div>
  <div className="button" style={{width:'100%',display:"flex",justifyContent:'center'}}>
  <button type="submit" className="btn btn-primary" style={{width:'8rem'}}>Submit</button>
  </div>
  
</form>
      
    </div>

    </div>
  )
}

export default Login
