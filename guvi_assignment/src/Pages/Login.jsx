import { useState, React } from "react";
import "./signUp.css";
// import { Link } from "react-router-dom";

import { useNavigate,Link } from 'react-router-dom';
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const [redirectToHome, setRedirectToHome] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Authentication successful, perform additional actions if needed
        // setRedirectToHome(true);
        navigate('/homepage');
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

  const isFormValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setError("Email is required");
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

    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      handleLogin();
      // setEmail('');
      // setPassword('');
    }
  };
  // if (redirectToHome) {
  //   return <Redirect to="/homepage" />;
  // }
  return (
    <div className="signup">
      <span className="heading greet">Login </span>

      <form className="form" onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <label>Email:</label>
        <input
          className="form__inset"
          type="text"
          value={email}
          onChange={handleEmailChange}
        />

        <label>Password:</label>
        <input
          className="form__inset"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit" className="login-butt">
          Login
        </button>
      </form>

      <span className=" heading emailtxt">
        If You Don't Have An Account Please <Link to={"/signup"}> SignUp</Link>
      </span>
    </div>
  );
}

export default Login;
