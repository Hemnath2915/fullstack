import { useState} from 'react';
import {Link} from 'react-router-dom'
import './Login.css'
// import logo1 from '../Assets/Logo1.png'
  // import {useNavigate} from "react-router-dom"

const SigninPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);

  // const navigate=useNavigate();
    const handleName=(event)=>{
        event.preventDefault();
        setEmail(event.target.value);
    }
    const handlePwd=(event)=>{
        event.preventDefault();
        setPassword(event.target.value);
    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
        setFormErrors(validate({email,password}));
        if(isSubmit===true){
            try{
              console.log("Login Successful");
              window.location.href = "/Home";
                // navigate('/Signup');
            }catch(error){
                console.error('Error: ',error);
            }
        }
    }

    

    const validate=(values)=>{
        const errors={};
        const preg=new RegExp("[A-Z]+")

        if(!values.email){
        errors.username="Email is Required";
        setIsSubmit(false);
        }else{
            setIsSubmit(true);
        }
        if(!values.password){
        errors.password="Password is Required";
        setIsSubmit(false);
        }
        else if(!preg.test(values.password)){
        errors.password="Invalid password";
        setIsSubmit(false);
        }else{
            setIsSubmit(true);
        }
        return errors;
    }





  return (
    <div className="over">
      <img className='land-logo' src={""}/>

        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        <form className='frm' onSubmit={handleSubmit}>
        {/* <form className='frm'> */}
            <h3 className="htag"><b>USER LOGIN</b></h3>
           
            

            <label className='lab'>Username</label>
            <input className="in" 
            type="text" 
            value={email}
            name="username"
            // onChange={(event) => setUsername(event.target.value)} 
            onChange={handleName}
            placeholder="Enter your Username" 
            id="username" required/>
            <p>{formErrors.username}</p>

            <label className="lab">Password</label>
            <input className="in" 
            type="password" 
            value={password}
          name="password" 
          // onChange={(e) => setPassword(e.target.value)} 
          onChange={handlePwd}
            placeholder="Enter your Password" 
            id="password" required/>
            <p>{formErrors.password}</p>

            {/* <center><button onSubmit={(e) => handleSubmit(e) } className='but'>Login</button></center> */}
            {/* <Link to="/Home"><center><button className='but'>Login</button></center></Link> */}
            <Link to="/Home"><center><button className='but'>Login</button></center>
            <br></br></Link>
            
            
            <h4>Dont have an Account?<Link  to="/Signup">
                <div className='reg'>REGISTER</div></Link>
                </h4>   
            {/* className="login-txt" */}

            <Link className="login-txt" to="/">
                <p className="user-p1">&lt;&nbsp;Go Back!</p>
                </Link>
        </form>
    </div>
  );
  };


export default SigninPage;