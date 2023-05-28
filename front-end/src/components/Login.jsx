import { useState } from "react";
import Joi from "joi-browser";
import userService from "../services/userService";
import authService from "../services/authService";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleSubmit = async () => {
    try {
      const { data } = await userService.login({ email, password });
      authService.setToken(data.token);
      window.location.href = "/";
    } catch (ex) {
      if (
        ex.response &&
        ex.response.status >= 400 &&
        ex.response.status < 500
      ) {
        const message = "Invalid email or password!";
        setErrors({ email: message, password: message });
      }
    }
  };

  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(6).required().label("Password"),
  });

  const handleInputChange = (e) => {
    if (e.target.type === "email") {
      setEmail(e.target.value);
      const { error } = schema.validate({ email: e.target.value, password });
      const message =
        error && error.details[0].context.key === "email"
          ? error.details[0].message
          : "";
      setErrors({ email: message, password: errors.password });
      return;
    }

    setPassword(e.target.value);
    const { error } = schema.validate({ email, password: e.target.value });
    const message =
      error && error.details[0].context.key === "password"
        ? error.details[0].message
        : "";
    setErrors({ email: errors.email, password: message });
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 px-10 py-5 border border-black rounded-md shadow-md">
        <p className="text-5xl font-semibold mb-4">Sign in</p>
        <form>
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="email"
              className="min-h-[auto] w-full rounded px-3 py-[0.32rem] leading-[2.15] border border-gray-500"
              id="exampleFormControlInput2"
              value={email}
              onChange={(e) => handleInputChange(e)}
              placeholder="Email address"
            />
            {errors.email && (
              <p className="text-md italic text-red-500">* {errors.email}</p>
            )}
          </div>

          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="password"
              className="min-h-[auto] w-full rounded px-3 py-[0.32rem] leading-[2.15] border border-gray-500"
              value={password}
              onChange={(e) => handleInputChange(e)}
              id="exampleFormControlInput22"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-md italic text-red-500">* {errors.password}</p>
            )}
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="h-5 w-5 mr-3"
                type="checkbox"
                value=""
                id="exampleCheck2"
              />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="exampleCheck2"
              >
                Remember me
              </label>
            </div>

            <a href="#!">Forgot password?</a>
          </div>

          <div className="text-center lg:text-left">
            <button
              disabled={errors.email || errors.password}
              type="button"
              className="rounded bg-blue-500 px-5 py-2 text-white font-semibold hover:bg-blue-600 hover:shadow-lg shadow-md disabled:bg-blue-300"
              data-te-ripple-init
              data-te-ripple-color="light"
              onClick={handleSubmit}
            >
              Login
            </button>

            <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
              Don't have an account?
              <a href="#!" className="text-red-500 ml-2">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
