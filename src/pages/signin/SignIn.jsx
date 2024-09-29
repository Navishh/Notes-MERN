import { useState } from "react";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/Input/PasswordInput";
import Navbar from "../../components/Navbar/Navbar";
import { validateEmail, validatePassword } from "../../utils/helper";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

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

    //login API call here
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="flex items-center justify-center mt-28">
          <div className="py-10 bg-white border rounded w-96 px-7">
            {/* Properly call handleLogin in onSubmit */}
            <form onSubmit={handleLogin}>
              <h4 className="text-2xl mb-7">SignIn</h4>

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
                Sign in
              </button>
              <p className="mt-4 text-sm text-center">
                Not registered yet?{" "}
                <Link
                  to={"/signup"}
                  className="font-medium underline text-primary"
                >
                  Log in to your account
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
