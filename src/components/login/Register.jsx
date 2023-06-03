import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import instance from '../../API/axiosInstance';
import { setUser, clearUser, setToken } from '../../redux/auth';

function Register() {
  const authUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { register, reset, handleSubmit } = useForm();
  const handleRegister = async (data) => {
    await instance.post('/auth/register', data).then((res) => {
      console.log(res.data.data);
      dispatch(setUser(res.data.data.user));
      dispatch(setToken(res.data.data.token));
    });
    reset();
  };
  useEffect(() => {
    // console.log(authUser);
  }, []);
  return (
    <div className="create-fertilizer">
      <div className="create-form">
        <h3>
          <strong> Register here </strong>
        </h3>

        <div>
          <div className="form-container">
            <form
              name="seedCreateFrm"
              className="form"
              onSubmit={handleSubmit(handleRegister)}
            >
              <div>
                <label htmlFor="username"> Names </label>
                <input
                  type="text"
                  name="names"
                  id="names"
                  placeholder="names"
                  required
                  {...register('names')}
                />
              </div>
              <div>
                <label htmlFor="telphone"> Telphone </label>
                <input
                  type="text"
                  name="telphone"
                  id="telphone"
                  placeholder="telphone"
                  required
                  {...register('telphone')}
                />
              </div>

              <div>
                <label htmlFor="email"> Email </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="email"
                  {...register('email')}
                />
              </div>
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
                <label
                  style={{
                    display: 'inline-block',
                    margin: '5px 3px',
                  }}
                  htmlFor="farmer"
                >
                  {' '}
                  <input
                    type="radio"
                    name="role"
                    id="farmer"
                    value="farmer"
                    {...register('role')}
                  />{' '}
                  Farmer
                </label>

                <label
                  style={{
                    display: 'inline-block',
                    margin: '5px 3px',
                  }}
                  htmlFor="store-keeper"
                >
                  {' '}
                  <input
                    type="radio"
                    name="role"
                    id="store-keeper"
                    value="store-keeper"
                    {...register('role')}
                  />{' '}
                  Store keeper
                </label>
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
                  Register{' '}
                </button>
              </div>
              <p>
                {' '}
                Already have an account?
                <NavLink to="/"> Login </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
