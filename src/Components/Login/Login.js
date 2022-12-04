import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase_init';
import img from '../Signup/download.png'

const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword (auth);

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
    signInWithEmailAndPassword(email,password);

  }
    return (
        <div className='signup' onSubmit={handleSubmit}>
             <form className='form' >
        <div className="form-container">
          <h2 className="form-title text-center mb-4">Login</h2>
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
          <input className="submit" type="submit" value="Login" />
          <p className="login-text">
            Don't have an account? <Link to="/signup">Sign up</Link>{" "}
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

export default Login;