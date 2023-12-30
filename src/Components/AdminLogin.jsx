import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AdminLogin = () =>{
    let [email,setemail] = useState("")
    console.log(email);
    let [password,setpassword] = useState("")
    console.log(password);
    
    let navigate = useNavigate()

    let validate  = () => {
        if (email == "abcd" && password == "1234"){
            alert("LOGIN Successful")
            navigate('/adminhome')
        }
        else{
            alert("Invalid Credentials")
        }
        
    } 
     
     return (  
        <div className="adminlogin">
            <form action="">
                <label htmlFor="">
                    Email :
                    <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" />
                     {/* we are passing the value inside setemail(e.target.value) ,that email Value get stored in e, that further pass to setemail and then that value stored in email */}
                </label>
                <br />
                <label htmlFor="">
                    Password :
                    <input value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" />
                </label>
                <br />
                <button onClick={validate}>Sign in</button>
            </form>

        </div>
     );
}
 
export default AdminLogin ;