import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../actions/actionCreator";
import load from "../assets/load.gif";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);
    dispatch(login(formData));
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 2000);
  };

  if (loading) {
    return (
      <div>
        <h1 className="flex flex-row h-screen w-screen justify-center items-center">
          <img src={load} alt="loading" className="bg-transparent" />
        </h1>
      </div>
    );
  }

  return (
    <div className="flex h-screen -mb-6 justify-center items-center">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-pink-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md">
            <div>
              <h1 className="text-2xl font-semibold">
                <span className="btn btn-ghost normal-case text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  TABLOID KUOTA
                </span>
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    value={formData.username}
                    onChange={handleChange}
                    autoComplete="off"
                    id="username"
                    name="username"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="username"
                  />
                  <label
                    htmlFor="username"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Username
                  </label>
                </div>
                <div className="relative">
                  <input
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                  <div className="mt-4 text-xs underline">
                    <NavLink to={"/register"}>Register</NavLink>
                  </div>
                </div>
                <div className="relative">
                  <button
                    type="submit"
                    onClick={handleLogin}
                    className="bg-blue-500 text-white rounded-md px-2 py-1"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
