import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import Logo from "../assets/Logo.png";
import "../Styles/Login.css"
const Login = () => {
    const ref1 = useRef(null);
    const ref2= useRef(null);
    const navigate = useNavigate();
    const login=()=>{
        ref1.current.value=="Durga" && ref2.current.value=="ds@123" ? navigate("./Form") : navigate ("./Error");
    }
  return (
    <div>
     <div className="LoginPage">
    <div className="logo">
        <img src={Logo} alt="Logo" />
    </div>
    <label>USERNAME:</label>
    <input type="text" placeholder="username" ref={ref1}></input>
    <br></br><br></br>
    <label>PASSWORD:</label>
    <input type="password" placeholder="password" ref={ref2}></input>
    <br></br><br></br>
    <button onClick={login}>Login</button>
</div>

    </div>
  )
}

export default Login


