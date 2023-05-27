import { toast } from "react-toastify";
import userService from "../services/userService";
import authService from "../services/authService";

const Navbar = ({ user }) => {
  const handleLogout = async () => {
    try {
      await userService.logoutUser();
      authService.deleteToken();
      window.location.href = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500
      )
        toast.error("Token is invalid!");
    }
  };

  return (
    <div className="w-full h-16 bg-slate-50 border-b-2 border-gray-200 shadow-sm flex flex-row justify-between items-center px-5">
      <p className="text-2xl">Todo list</p>
      <div className="flex flex-row gap-5">
        <p className="text-gray-700 hover:text-gray-900 hover:cursor-pointer">
          {user.name}
        </p>
        <button
          className="text-gray-700 hover:text-gray-900"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
