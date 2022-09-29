import React, { useState } from 'react';
import '../componentCss/SignIn.css';
import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import auth from '../firebase';
import { signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const SignIn = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const [classes, setClasses] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
    navigate('/');
  };

  const handleChange = (e) => {
    if (e.target.checked) {
      setClasses(false);
    } else {
      setClasses(true);
    }
  };

  const myFunction = () => {
    let x = document.getElementById('myInput');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  };

  const myFetch = (e) => {
    e.preventDefault();

    fetch('/login', {
      method: 'POST',
      body: new FormData(e.target),
    })
      .then((response) => response.json())
      .then((data) => alert(data.message));

    console.log(e.target);
  };

  return (
    <div className="sign-in-box">
      <h3 className="title text-white mt-3">Sign in</h3>
      <form onSubmit={myFetch}>
        <div className="divInp">
          <h4 className="text-white mb-3">User name</h4>
          <input
            className="inp"
            name="userName"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <h4 className="text-white mb-3">Password</h4>
          <input
            id="myInput"
            name="userPassword"
            className="inp"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className="checkBox">
          <input className="form-check-input" type="checkbox" onClick={myFunction} />
          <label className="form-check-label mx-2" for="flexCheckDefault">
            Show Password
          </label>
        </div>
        <div className="checkBox">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={handleChange}
            name="checkBox"
          />
          <label className="form-check-label mx-2" for="flexCheckDefault">
            Remember Me
          </label>
        </div>
        <button
          onClick={() => navigate('/')}
          className="btn btn-success btn-doc"
          type="submit"
          disabled={classes}>
          Sign in
        </button>
      </form>
      <div className="register-link">
        <span className="text-white">
          You are not registered?
          <Link to="/registration" className="text-warning">
            Registration
          </Link>
        </span>
      </div>
      <Button className="mx-5" variant="primary" onClick={handleShow}>
        Вход по другому
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <GoogleButton style={{ marginLeft: '1rem' }} onClick={signIn} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignIn;
