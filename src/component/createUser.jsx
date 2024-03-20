import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const [users, setUsers] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getUserData = (event) => {
    setUsers((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('users :>> ', users);
    dispatch(createUser(users));
    navigate('/');
  };
  
  return (
    <>
      <div className="border m-3 p-3">
        <h2 className="my-2">Fill your details</h2>
        <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
          <div className="form">
            <div className="">
              <label htmlFor="validationCustom01">First name</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                id="validationCustom01"
                placeholder="First name"
                onChange={getUserData}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="">
              <label htmlFor="validationCustom02">Last name</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                id="validationCustom02"
                placeholder="Last name"
                onChange={getUserData}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="">
              <label htmlFor="validationCustomUsername">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend">
                    @
                  </span>
                </div>
                <input
                  type="text"
                  name="userName"
                  className="form-control"
                  id="validationCustomUsername"
                  placeholder="Username"
                  onChange={getUserData}
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <div className="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="">
              <label htmlFor="validationCustom03">City</label>
              <input
                type="text"
                name="city"
                className="form-control"
                id="validationCustom03"
                placeholder="City"
                onChange={getUserData}
                required
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
            <div className="">
              <label htmlFor="validationCustom04">State</label>
              <input
                type="text"
                name="state"
                className="form-control"
                id="validationCustom04"
                placeholder="State"
                onChange={getUserData}
                required
              />
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>
            <div className="">
              <label htmlFor="validationCustom05">Zip</label>
              <input
                type="text"
                name="zipCode"
                className="form-control"
                id="validationCustom05"
                placeholder="Zip"
                onChange={getUserData}
                required
              />
              <div className="invalid-feedback">
                Please provide a valid zip.
              </div>
            </div>
            <button className="btn btn-primary mt-3" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
