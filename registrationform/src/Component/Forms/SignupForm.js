import React from 'react';


const SignupForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Create an Account</h2>
      <div className="input-group">
        <label htmlFor="username">First Name</label>
        <input type="text" id="username" name="username" required />
      </div>
      <div className="input-group">
        <label htmlFor="password">Last Name</label>
        <input type="password" id="password" name="password" required />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;