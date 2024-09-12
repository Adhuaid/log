import React,{useState} from 'react'
import { FaLock, FaUser} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import "../style/Login.css"
function Login() {
  const toggleInfo = () => {
    setShowInfo(prevShowInfo => !prevShowInfo);
  };
  const info = "You can opt to have your Userid remembered the next time you access our website by checking the 'Remember Me' box. If you do not wish to have your USERid remembered the next time you access our website, leave the 'Remember Me' box unchecked.";
      const [username,setusername]=useState("")
      const [showInfo, setShowInfo] = useState(false);
      const [password,setpassword]=useState("")
      const [error,seterror]=useState("")
      const navigate=useNavigate();
      const validuser="22BDACC206";
      const validpassword="Adhuaid";
      const handlechange=(e)=>{
        e.preventDefault();
        if(username===validuser&&password===validpassword){
          seterror('');
          navigate("/home");
        }else{
          seterror("Invalid username or password");
        }
        
      };
  return (
<div className="login">
  <div className='Logobg'>
    <img src="./src/assets/Elevatelogo.png" alt="Logo" className='logo'/>
    <hr className='line1' />
  </div>    
 <div className='mainlogin'>
   <h1>Log in to Console</h1>
    <hr className='logline'  />
    <form onSubmit={handlechange} >
      <div className="user">
        <div className="uid">
          <label className='uid'>USERid</label>
        </div>
      <div className="username">
        <input  value={username} id='username' type="text"  onChange={(e)=>setusername(e.target.value)}  required/>
        <FaUser className='icon'/>
      </div>
     <div className="passwid">
       <label>Password</label>
      </div>
              <div className="password">  
                <input  value={password} id='password' type="password" onChange={(e)=>setpassword(e.target.value)} required/>
                <FaLock className='icon'/>
                </div>
              </div>
          <div className='mainbtn'>
          {error && <p style={{ color: 'red' }} className='error'>{error}</p>}
          <button type='submit'className=' btn'>Continue <FaArrowRight className='arrow' /></button>
          </div>
                  <div className="checkbox">
                  <input type="checkbox" className='check' />
                  
                  </div>
                  <div className="lcheck">
                  <label >Remember me?
                  <button type='button' onClick={toggleInfo} className='info-btn'>
              <IoInformationCircle />
            </button></label>
                  </div>
                  {showInfo && <p className='info-message'>{info}</p>}
                  <hr className='line2'/>
                  <div className="leftimg">
                    <img className='img2' src="./src/assets/leftimg.png" alt="img" />
                  </div>
    </form>    
    
    
          <div className="acc">
            <p>Don't have an account?</p>
          </div>
    
    </div>
      
      
  </div>
  );
}
 
export default Login
