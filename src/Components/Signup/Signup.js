import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
import img from './download.png'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';


const Signup = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  useEffect(()=>{
    if(user){
      navigate("/home")
    }
  },[user])

  const handleSubmit=(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if(loading){
      return
    }
    createUserWithEmailAndPassword(email,password);

  }
    return (
        <div className='signup'>
             <form className='form' onSubmit={handleSubmit} >
        <div className="form-container">
          <h2 className="form-title text-center mb-4">Sign Up</h2>
          <div className="input-grp">
            <label htmlFor="email">Email</label> <br />
            <input
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-grp">
            <label htmlFor="password">Password</label> <br />
            <input
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error?.message}</p>
          <input className="submit" type="submit" value="Sign Up" />
          <p className="login-text">
            Already have an account? <Link to="/login">Login</Link>{" "}
          </p>
          <div className="divider">
            <hr />
            <p className='text-center'>or</p>
            <hr />
          </div>
          <button className='signup-btn'>
            {" "}
            <img className='google' src={img} alt="" /> Continue with Google
          </button>
        </div>
      </form>

        </div>
    );
};

export default Signup;