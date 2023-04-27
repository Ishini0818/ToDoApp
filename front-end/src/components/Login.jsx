const Login = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
    <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 px-10 py-5 border border-black rounded-md shadow-md">
      <p className="text-5xl font-semibold mb-4">Sign in</p>
      <form>
        <div class="relative mb-6" data-te-input-wrapper-init>
          <input
            type="text"
            class="min-h-[auto] w-full rounded px-3 py-[0.32rem] leading-[2.15] border border-gray-500"
            id="exampleFormControlInput2"
            placeholder="Email address"
          />
        </div>

        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            type="password"
            className="min-h-[auto] w-full rounded px-3 py-[0.32rem] leading-[2.15] border border-gray-500"
            id="exampleFormControlInput22"
            placeholder="Password"
          />
        </div>

        <div class="mb-6 flex items-center justify-between">
          <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
            <input
              class="h-5 w-5 mr-3"
              type="checkbox"
              value=""
              id="exampleCheck2"
            />
            <label
              className="inline-block pl-[0.15rem] hover:cursor-pointer"
              for="exampleCheck2"
            >
              Remember me
            </label>
          </div>

          <a href="#!">Forgot password?</a>
        </div>

        <div class="text-center lg:text-left">
          <button
            type="button"
            class="rounded bg-blue-500 px-5 py-2 text-white font-semibold hover:bg-blue-600 hover:shadow-lg shadow-md"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Login
          </button>

          <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
            Don't have an account?
            <a
              href="#!"
              class="text-red-500 ml-2"
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
