import { useState } from "react";
import {useNavigate} from "react-router-dom"

const UserLogin = () => {
    let [email,setemail] = useState("")
    let [password,setpassword] = useState("")
    
    let navigate = useNavigate()

    let validate = () => {
       if(email == "abcd" && password == "7890"){
        alert("Successfull login")
        navigate('/userhome')
       }
       else{
        alert("Invalid credentials")
       }
    }
     
    
    return ( 
        <div className="userlogin">
            <form action="">
                <label htmlFor="">
                    Email :
                    <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" />
                    {/* we are passing the value inside setemail(e.target.value) ,that emailValue get stored in e, that further pass to setemail and then that value stored in email */}
                </label>
                <br />
                <label htmlFor="">
                    Password :
                    <input value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" />
                </label>
                <br />
                <button>Sign in</button>
            </form>
        </div>
     );
}
 
export default UserLogin;