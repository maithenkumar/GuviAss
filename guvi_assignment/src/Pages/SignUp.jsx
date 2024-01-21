
import React, { useState } from 'react';
import "./signUp.css";
import { useNavigate,Link } from 'react-router-dom';


function SignUp() {
  const navigate = useNavigate();

  
  const [email, setEmailname] = useState("");
  const [password, setPassword] = useState("");
  
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (e) => {
    setEmailname(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const isFormValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setError("Username is required");
      return false;
    }

    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address");
      return false;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    }

    if (confirmPassword !== password) {
      setError("Passwords do not match");
      return false;
    }

    setError("");
    return true;
  };
  const handleSignUp = async () => {
    try {
      const response = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        
        navigate('/login');
        console.log("Login successful");
      } else {
        // Authentication failed
        const data = await response.json();
        setError(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An unexpected error occurred");
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      handleSignUp();
      
    }
  };

  return (
    <div className="signup" >
      <span className="heading greet">Welcome To </span>
      <span className="h1 heading "> Project Of Guvi Assienment</span>

    
      <form className="form" onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <label>Email:</label>
        <input
          className="form__inset"
          type="text"
          value={email}
          onChange={handleUsernameChange}
        />

        <label>Password:</label>
        <input
          className="form__inset"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <label>Confirm Password:</label>
        <input
          className="form__inset"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />

        <button           className="login-butt"
  type="submit">Submit</button>
      </form>

      <span className=" heading emailtxt">
        If You Have Already Account Please <Link to={"/login"}> login</Link>
      </span>
    </div>
  );
}

export default SignUp;
