import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

export default function LoginScreen() {
  const navigate = useNavigate();

  const handleSignIn = () => navigate('/', { replace: true });

  return (
    <div className="d-lg-flex half">
      <div
        className="bg order-1 order-md-2"
        style={{
          backgroundImage: `url(${`${process.env.PUBLIC_URL}/assets/images/bg_1.jpg`})`,
        }}
      />
      <div className="contents order-2 order-md-1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7">
              <h3>
                Login to
                {' '}
                <strong>HeroesApp</strong>
              </h3>
              <p className="mb-4">Welcome to heroes app, feel free to explore your favorite heroes industries.</p>
              <form action="#" method="post">
                <div className="form-group first">
                  <label htmlFor="username-form">Username</label>
                  <input id="username-form" type="text" className="form-control" placeholder="your-email@gmail.com" />
                </div>
                <div className="form-group last mb-3">
                  <label htmlFor="password">Password</label>
                  <input id="password" type="password" className="form-control" placeholder="Your Password" />
                </div>
                <div className="d-flex mb-5 align-items-center">
                  <label className="control control--checkbox mb-0">
                    <span className="caption">Remember me</span>
                    <input type="checkbox" checked onChange={() => {}} />
                    <div className="control__indicator" />
                  </label>
                  <span className="ml-auto"><a href="/" className="forgot-pass">Forgot Password</a></span>
                </div>
                <div className="d-grid gap-2">
                  <button
                    type="button"
                    onClick={handleSignIn}
                    className="btn btn-block btn-primary"
                  >
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
