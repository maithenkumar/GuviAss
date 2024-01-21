// import React from 'react';

// import {useFormik} from 'formik';

// import * as yup from 'yup';

// const EmployeeComponent=()=>{

//   const formik=useFormik({

//     initialValues:{

//       Id:'',

//       Name:'',

//       Location:'',

//       Salary:'',

//       EmailId:''

//     },

//     validationSchema: yup.object({

//       Name: yup.string()

//         .max(20, 'Name should not exceed 20 Characters')

//         .required('Please Enter Employee Name'),

//       Location: yup.string()

//         .required('Please Enter Employee Location'),

//       EmailId: yup.string()

//         .email('Invalid email address')

//         .required('Please Enter Email Id'),

//     }),

//     onSubmit:values=>{

//       alert(JSON.stringify(values));

//     }

//   });

//   return (

//     <div>

//       <h2>New Employee Form...</h2>

//   <form onSubmit={formik.handleSubmit}>

//         <p>

//           <label htmlFor="Id">Employee ID : </label>

//           <input type="text" name="Id" {...formik.getFieldProps("Id")} ></input>

//         </p>

//         <p>

//            <label htmlFor="Name">Employee Name : </label>

//            <input type="text" name="Name" {...formik.getFieldProps("Name")} ></input>

//                   {formik.touched.Name && formik.errors.Name ? <span style={{color:'red'}}>{formik.errors.Name}</span> : null}
//          </p>

//          <p>

//            <label htmlFor="Location">Employee Location : </label>

//            <input type="text" name="Location" {...formik.getFieldProps("Location")} ></input>

//                   {formik.touched.Location && formik.errors.Location ? <span style={{color:'red'}}>{formik.errors.Location}</span> : null}
//          </p>

//          <p>

//            <label htmlFor="Salary">Employee Salary : </label>

//            <input type="text" name="Salary" {...formik.getFieldProps("Salary")} ></input>

//          </p>

//          <p>

//            <label htmlFor="EmailId">Employee Email ID : </label>

//            <input type="text" name="EmailId" {...formik.getFieldProps("EmailId")} ></input>

//                   {formik.touched.EmailId && formik.errors.EmailId ? <span style={{color:'red'}}>{formik.errors.EmailId}</span> : null}
//          </p>

//          <button type="submit">Create</button>

//   </form>

//     </div>

//   )

// }
// export default EmployeeComponent

import React, { useState } from "react";

const YourComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const isFormValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!username.trim()) {
      setError("Username is required");
      return false;
    }

    if (!emailRegex.test(username.trim())) {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      // Make a request to the server with the data
      // ...

      // Clear the form or perform other actions
      setUsername("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          className="form__inset"
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}

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
    </div>
  );
};

export default YourComponent;
