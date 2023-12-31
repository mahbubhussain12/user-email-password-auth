import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../irebase/firebase.config";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.checked;
    console.log(email, password, );

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your Password should have at least one upper case characters.."
      );
      return;
    }
    else if(!accepted){
      setRegisterError('Please accept our terms and condition')
      return;
    }
    // reset error and success
    setRegisterError("");
    setSuccess("");
    

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setSuccess("User Created Successfully..");
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="bg-gray-300 mt-2">
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl mb-8 text-center">Please Register</h2>
        <form onSubmit={handleRegister}>
          <input
            className="mb-4 w-full py-2 px-4"
            type="email"
            name="email"
            id=""
            required
            placeholder="Enter Your Email Address"
          />
          <br />
          <input
            className="mb-4 w-full py-2 px-4 "
            type={showPassword ? "text" : "password"}
            name="password"
            id=""
            required
            placeholder="Enter Your Password"
          />{" "}
          <span className=" absolute text-2xl mt-2 -ml-8" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <AiFillEyeInvisible></AiFillEyeInvisible>
            ) : (
              <AiFillEye></AiFillEye>
            )}
          </span>
          <br />
          <input className="mb-4" type="checkbox" name="terms" id="terms" />
          <label className="ml-2" htmlFor="terms">Accept our <a href="">terms and Conditions</a></label>
          <input
            className="mb-4 w-full btn btn-secondary"
            type="submit"
            value="Register"
          />
        </form>
        {
        registerError && <p className="text-red-500">{registerError}</p>
        }
        
        {
        success && <p className="text-green-600">{success}</p>
        }
        <p className="text-center mb-2 -mt-4 text-green-700 font-bold">already have an account? Please <Link to="/login" className="text-red-500 font-bold">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
