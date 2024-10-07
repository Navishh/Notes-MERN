import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/Input/PasswordInput";
import Navbar from "../../components/Navbar/Navbar";
import axiosInstance from "../../utils/axiosInstance";
import { validateEmail, validatePassword } from "../../utils/helper";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Please fill all the fields");
      return;
    }

    if (!name) {
      setError("Fill up your name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!validatePassword(password)) {
      setError(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }
    // Proceed with form submission
    setError("");
    console.log("Form submitted successfully");
    setError("");

    //Signup API call
    try {
      const response = await axiosInstance.post("/create-account", {
        fullName: name,
        email: email,
        password: password,
      });

      //Handle successful signup response
      if (response.data && response.data.error) {
        setError(response.data.message);
        return;
      }

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/dashboard");
      }
    } catch (error) {
      //Handle Signup error
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-28">
        <div className="py-10 bg-white border rounded w-96 px-7">
          {/* Properly call handleLogin in onSubmit */}
          <form onSubmit={handleSignup}>
            <h4 className="text-2xl mb-7">SignUp</h4>
            <input
              type="text"
              placeholder="Name"
              className="input-box"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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

            {error && <p className="pb-1 text-xs text-red-500">{error}</p>}

            <button className="btn-primary" type="submit">
              Sign Up
            </button>
            <p className="mt-4 text-sm text-center">
              Already have an account?{" "}
              <Link
                to={"/signin"}
                className="font-medium underline text-primary"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
