import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import instance from '../../API/axiosInstance';
import { setUser, clearUser, setToken } from '../../redux/auth';

const Login = () => {
  const authUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { register, reset, handleSubmit } = useForm();
  const handleLogin = async (data) => {
    await instance.post('/auth/login', data).then((res) => {
      dispatch(setUser(res.data.data.user));
      dispatch(setToken(res.data.data.token));
    });
    reset();
  };
  useEffect(() => {
    // console.log(authUser);
  });
  return (
    <div className="create-fertilizer">
      <div className="create-form">
        <h3>
          <strong> Login here </strong>
        </h3>
        <div>
          <div className="form-container">
            <form
              name="seedCreateFrm"
              className="form"
              onSubmit={handleSubmit(handleLogin)}
            >
              <div>
                <label htmlFor="username"> Username </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username"
                  required
                  {...register('username')}
                />
              </div>
              <div>
                <label htmlFor="password"> Password </label>
                <input
                  type="password"
                  name="password"
                  className="form"
                  id="password"
                  required
                  {...register('password')}
                />
              </div>

              <div className="button-container">
                <button type="submit" className="add-button">
                  Login{' '}
                </button>
              </div>
              <p>
                {" Don't have an account ? "}

                <NavLink to="/register">Register</NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
