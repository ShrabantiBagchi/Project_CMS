import React, { useState } from 'react';
import Login from './login.js';
//import logo from '../components/logo_img.jpg';
import logo from '../logo.svg';
import '../App.css';

function Register(props) {
	const[email, setEmail] = useState('');
	const[pass, setPass] = useState('');
	const[name, setName] = useState('');

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
							<h4 className="card-title">Register</h4>
							<form method="POST" className="my-login-validation" novalidate="">
                                <div className="form-group">
									<label htmlFor="first_name">First name</label>
									<input id="fname" type="text" className="form-control" name="fname" value="" required autofocus/>
									<div className="invalid-feedback">
										Shouldn't contain space and special characters or punctuations
									</div>
								</div>

                                <div className="form-group">
									<label htmlFor="last_name">Last name</label>
									<input id="lname" type="text" className="form-control" name="lname" value="" required autofocus/>
									<div className="invalid-feedback">
										Shouldn't contain space and special characters or punctuations
									</div>
								</div>

                                <div className="form-group">
									<label htmlFor="dob">Date of Birth</label>
									<input id="dob" type="date" className="form-control" name="dob" value="" required autofocus/>
									<div className="invalid-feedback">
										Shouldn't contain space and special characters or punctuations
									</div>
								</div>

								<div className="form-group">
									<label htmlFor="email">E-Mail Address</label>
									<input id="email" type="email" className="form-control" name="email" value="" required autofocus/>
									<div className="invalid-feedback">
										Email is invalid
									</div>
								</div>

								<div className="form-group">
									<label htmlFor="create_password">Create Password
										{/* <a href="forgot.html" class="float-right">
											Forgot Password?
										</a> */}
									</label>
									<input id="cr_password" type="password" className="form-control" name="cr_password" required data-eye/>
								    <div className="invalid-feedback">
								    	Please create a password
							    	</div>
								</div>

                                <div className="form-group">
									<label htmlFor="confirm_password">Confirm Password
										{/* <a href="forgot.html" class="float-right">
											Forgot Password?
										</a> */}
									</label>
									<input id="cnfm_password" type="password" className="form-control" name="cnfm_password" required data-eye/>
								    <div className="invalid-feedback">
								    	Please confirm the password
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
										Register
									</button>
								</div>
								<div className="mt-4 text-center">
									Already have an account? <a onClick={() => props.onFormSwitch('login')} href="" >Login</a>
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

	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<script src="js/my-login.js"></script>
</body>


    </>
  );
}

export default Register;
