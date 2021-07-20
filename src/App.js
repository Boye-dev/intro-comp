import React from "react";
import { useForm } from "react-hook-form";
import errorIcon from "./icon-error.svg";
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="container">
        <div className="text">
          <h1>Learn to code by watching others</h1>

          <p className="par">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.{" "}
          </p>
        </div>
        <div className="form-body">
          <button className="try">
            Try it free 7 days
            <span className="try-then"> then $20/mo. thereafter</span>
          </button>
          <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid-sys">
                <input
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <>
                    <div className="main-err">
                      <img className="error-icon" src={errorIcon} />
                      <p className="errors">First Name cannot be empty</p>
                    </div>
                  </>
                )}

                <input
                  type="text"
                  {...register("lastName", { required: true })}
                  placeholder="Last name"
                />
                {errors.lastName && (
                  <>
                    <div className="main-err">
                      <img className="error-icon" src={errorIcon} />
                      <p className="errors">Last Name cannot be empty</p>
                    </div>
                  </>
                )}

                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email", {
                    required: true,
                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  })}
                />
                {errors.email && (
                  <>
                    <div className="main-err">
                      <img className="error-icon" src={errorIcon} />
                      <p className="errors">Looks like this is not an email</p>
                    </div>
                  </>
                )}

                <input
                  type="password"
                  {...register("password", { required: true, minLength: 8 })}
                  placeholder="Password"
                />
                {errors.password && (
                  <>
                    <div className="main-err">
                      <img className="error-icon" src={errorIcon} />
                      <p className="errors">Please Enter A valid Password</p>
                    </div>
                  </>
                )}

                <button className="submit-button" type="submit">
                  CLAIM YOUR FREE TRIAL NOW{" "}
                </button>
              </div>
              <p className="bot">
                By clicking the button, you are agreeing to our{" "}
                <span className="terms">Terms and Services</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
