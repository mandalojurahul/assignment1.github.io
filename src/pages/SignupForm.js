import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../styles/SignupForm.css';
import ReCAPTCHA from "react-google-recaptcha";

function SignupForm() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(null);
  const navigate=useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    if (event.target.value.length > 0) {
      setUsernameError(null);
    }
  };


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.length === 0) {
      setUsernameError('Username is required');
    } else {
      // Submit form data here
      console.log(`Name: ${name}, Username: ${username}, Email: ${email}, Password: ${password}`);
      setName('');
      setUsername('');
      setEmail('');
      setPassword('');
      navigate('/welcome');
    }
  };


  const [verified,setVerified]=useState(false);
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }



  

  return (
    <div className="signup-form">
      <div className="left-half">
        <img src="https://logowik.com/content/uploads/images/t_dribbble.jpg" alt="Signup Image" />
      </div>
      <div className="right-half">
        <h1>Sign Up to Dribbble</h1>
        <p>Discover the world's top Designers & Creatives.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="inline-inputs">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="inline-inputs">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
              />
              {usernameError && <p className="error">{usernameError}</p>}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email}  onChange={handleEmailChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <p>6+ characters</p>
            <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange} id='ra'
          />
          </div>
          <div className="form-group">
            <button type="submit" disabled={!verified} onClick={()=>navigate('welcome')}>Create Account</button>
          </div>
          <p>
            Creating an account means you're okay with our Terms of Service, Privacy
            Policy, and our default Notification Settings.
          </p>
        </form>
        <p>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply
        </p>
        <p>Art by Peter Tarka</p>
      </div>
    </div>
  );
}

export default SignupForm;
