import axios from "axios";
import { useRef ,useState} from "react";
import "./register.css";
import { useNavigate ,Link} from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const[gender,setGender] = useState("Male")
    const phone = useRef();
  
  const history = useNavigate();

  const changeGender = (e) =>{

  setGender(e.target.value)

  }
  const handleClick = async (e) => {
    e.preventDefault();
  
      const user = {
        name: username.current.value,
        email: email.current.value,
        password: password.current.value,
 
      };
      try {
        await axios.post("http://localhost:5000/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo"> BookStore.</h3>
          <span className="loginDesc">
          Welcome to MarketPlace for all your shopping needs.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              suggested = "current-password"
              type="password"
            
            />
           


            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <Link to ='/login'>
            <button className="loginRegisterButton">Log into Account</button>
                       </Link>
          </form>
        </div>
      </div>
    </div>
  );
}