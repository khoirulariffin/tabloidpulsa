import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const NavBar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    Swal.fire("Success", "You are logged out", "success");
    navigate("/login");
  };

  return (
    <div>
      <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Post</a>
              </li>
              <li>
                <a>Category</a>
              </li>
              <li>
                <a>Tag</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <NavLink to={"/"}>
            <span className="btn btn-ghost normal-case text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              TABLOID KUOTA
            </span>
          </NavLink>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-36"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <span onClick={logout}>Logout</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
