import React, { useState } from 'react';

const Registrarion = () => {
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const [rePass, setRePass] = useState('');
  const [classes, setClasses] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    const newWindow = window.open();
    newWindow.location.href =
      'https://balance.ua/assets/files/2016/12/02/post_preview_59fa1c6491bc3148068868132880.jpg';
  };

  const handleChange = (e) => {
    if (e.target.checked) {
      setClasses(false);
    } else {
      setClasses(true);
    }
  };

  const myFetch = (e) => {
    e.preventDefault();

    fetch('/signUp', {
      method: 'POST',
      body: new FormData(e.target),
    })
      .then((response) => response.json())
      .then((data) => alert(data.message));

    console.log(e.target);
  };

  return (
    <div className="sign-in-box">
      <h3 className="title text-white mt-3">Registration</h3>
      <form onSubmit={myFetch}>
        <div className="divInp">
          <h4 className="text-white mb-3">User name</h4>
          <input
            className="inp"
            name="userName"
            value={userName}
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
          <h4 className="text-white mb-3">Password</h4>
          <input
            className="inp"
            name="userPassword"
            value={pass}
            type="password"
            onChange={(e) => setPass(e.target.value)}
          />
          <h4 className="text-white mb-3">Repeat password</h4>
          <input
            className="inp"
            name="rePassword"
            value={rePass}
            type="password"
            onChange={(e) => setRePass(e.target.value)}
          />
        </div>
        <div className="checkBox" onChange={handleChange}>
          <input className="form-check-input" type="checkbox" />
          <label className="form-check-label mx-2" for="flexCheckDefault">
            I agree
          </label>
          <button className="btn btn-primary mx-5" onClick={handleClick}>
            Doc
          </button>
        </div>
        <button className="btn btn-success btn-doc" type="submit" disabled={classes}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Registrarion;
