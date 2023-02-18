import React, { useState } from "react";
import logo from '../logo.svg';
import '../App.css';
import Register from './register';

function Login(props) {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');

	const handleSubmit = (e) => {

		e.preventDefault();
		console.log(email);
	}


  return (
    <>
      <body className="my-login-page">
	<section className="h-100">
		<div className="container h-100">
			<div className="row justify-content-md-center h-100">
				<div className="card-wrapper">
					<div className="brand">
						<img src="https://www.flaticon.com/free-icon/login_5087607" alt="logo"/>
					</div>
					<div className="card fat">
						<div className="card-body">
							<h4 className="card-title">Log In</h4>
							<form method="POST" className="my-login-validation" novalidate="">
								<div className="form-group">
									<label htmlFor="email">E-Mail Address</label>
									<input id="email" type="email" className="form-control" name="email" value="" required autofocus/>
									<div className="invalid-feedback">
										Email is invalid
									</div>
								</div>

								<div className="form-group">
									<label htmlFor="password">Password
										<a href="forgot.html" className="float-right">
											Forgot Password?
										</a>
									</label>
									<input id="password" type="password" className="form-control" name="password" required data-eye/>
								    <div className="invalid-feedback">
								    	Password is required
							    	</div>
								</div>

								<div className="form-group">
									<div className="custom-checkbox custom-control">
										<input type="checkbox" name="remember" id="remember" className="custom-control-input"/>
										<label htmlFor="remember" className="custom-control-label">Remember Me</label>
									</div>
								</div>

								<div className="form-group m-0">
									<button type="submit" className="btn btn-primary btn-block">
										Log In
									</button>
								</div>
								<div className="mt-4 text-center" >
									Don't have an account? <a onClick={() => props.onFormSwitch('register')} >Create One</a>
								</div>
							</form>
						</div>
					</div>
					<div className="footer">
						Copyright &copy; 2023 &mdash; Your Company 
					</div>
				</div>
			</div>
		</div>
	</section>

</body>


    </>
  );
}

export default Login;
