"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/Input/PasswordInput";
import Navbar from "../../components/Navbar/Navbar";
import { validateEmail } from "../../utils/helper";

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Please enter the password!");
      return;
    }
    setError("");

    //login api call
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="flex items-center justify-center mt-28">
          <div className="w-96 border rounded bg-white px-7 py-10">
            <form
              onSubmit={() => {
                handleLogin;
              }}
            >
              <h4 className="text-2xl mb-7">Sign in</h4>

              <input
                type="text"
                placeholder="Email"
                className="input-box"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

              <button className="btn-primary" type="submit">
                Sign in
              </button>
              <p className="text-sm text-center mt-4">
                Not registered yet?
                <Link
                  to={"/signup"}
                  className="font-medium text-primary underline"
                >
                  Create an Account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
