import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCPass] = useState("");

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center shadow-md bg-white sm:bg-gradient-to-r from-blue-200 to-cyan-200">
        <div className="p-2 w-[500px] h-[500px] flex flex-wrap content-center justify-center rounded-l-md rounded-r-md lg:rounded-r-none bg-white">
          <div className="p-5 w-[300px]">
            <h1 className="text-2xl font-semibold">Welcome back</h1>
            <small className="text-gray-400">
              Welcome back! Please enter your details
            </small>

            <form className="mt-4">
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div
                  className={`${
                    email.includes("@")
                      ? "hidden"
                      : email.length == 0
                      ? "hidden"
                      : ""
                  } text-xs text-red-500`}
                >
                  {email.includes("@") ? "" : "Please enter a valid email address"}
                </div>
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">
                  Password
                </label>
                <div className="flex flex-col relative justify-center">
                  <input
                    type="password"
                    placeholder="********"
                    required
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    onChange={(e) => setPass(e.target.value)}
                  />
                </div>
                <div
                  className={`${
                    pass.length > 7
                      ? "hidden"
                      : pass.length == 0
                      ? "hidden"
                      : ""
                  } text-xs text-red-500`}
                >
                  {cpass.length > 7 ? "" : "Password is less than 8 character"}
                </div>
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">
                  Confirm Password
                </label>
                <div className="flex flex-col relative justify-center">
                  <input
                    type="password"
                    placeholder="********"
                    required
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    onChange={(e) => setCPass(e.target.value)}
                  />
                </div>
                <div
                  className={`${
                    cpass === pass
                      ? cpass.length > 7
                        ? "hidden"
                        : ""
                      : cpass.length == 0
                      ? "hidden"
                      : ""
                  } text-xs text-red-500`}
                >
                  {cpass === pass
                      ? ""
                      : "Passwords don't match"}
                </div>
              </div>

              <div className="mb-7 flex flex-wrap content-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="mr-1 checked:bg-purple-700"
                />{" "}
                <label className="mr-auto text-xs font-semibold">
                  Remember for 30 days
                </label>
                <a href="#" className="text-xs font-semibold text-purple-700">
                  Forgot password?
                </a>
              </div>

              <div className="mb-3">
                <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md"
                onClick={(e) => e.preventDefault}>
                  Sign in
                </button>
              </div>
            </form>

            <div className="text-center">
              <span className="text-xs text-gray-400 font-semibold">
                Don't have account?
              </span>
              <a href="#" className="text-xs font-semibold text-purple-700">
                Sign up
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-r-md hidden transition-all duration-100 ease-in lg:block">
          <img
            className="w-300 h-500 bg-center bg-no-repeat bg-contain rounded-r-md"
            src="https://picsum.photos/500"
          />
        </div>
      </div>
    </>
  );
}

export default App;
