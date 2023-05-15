import { useState } from "react";

async function loginUser(credentials) {
    return fetch('http://localhost:5000/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json());

}

const Login = (props) => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = async() => {
        const { token, user } = await loginUser({email, password});
        props.setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
    }

  return (
    <div className="h-screen w-full flex justify-center items-center">
    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 px-10 py-5 border border-black rounded-md shadow-md">
      <p className="text-5xl font-semibold mb-4">Sign in</p>
      <form>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            type="text"
            className="min-h-[auto] w-full rounded px-3 py-[0.32rem] leading-[2.15] border border-gray-500"
            id="exampleFormControlInput2"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email address"
          />
        </div>

        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            type="password"
            className="min-h-[auto] w-full rounded px-3 py-[0.32rem] leading-[2.15] border border-gray-500"
            value={password}
            onChange={e => setPassword(e.target.value)}
            id="exampleFormControlInput22"
            placeholder="Password"
          />
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
            type="button"
            className="rounded bg-blue-500 px-5 py-2 text-white font-semibold hover:bg-blue-600 hover:shadow-lg shadow-md"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={handleSubmit}
          >
            Login
          </button>

          <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
            Don't have an account?
            <a
              href="#!"
              className="text-red-500 ml-2"
            >
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
