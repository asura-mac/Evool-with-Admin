import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/authReducer";
const Sidebar = () => {
  const links = [
    { to: "/admin-dashboard", name: "Dashboard" },
    { to: "/admin-dashboard/add-blogs", name: "Add Blog" },
    { to: "/admin-dashboard/edit-blogs", name: "Edit Blogs" },
  ];

  const dispatch = useDispatch();
  const backendLink = useSelector((state) => state.prod.link);
  const history = useNavigate();
  const logoutHandler = async () => {
    const res = await axios.post(
      `${backendLink}/api/v1/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    //console.log(res);
    dispatch(authActions.logout());
    history("/");
  };
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Admin Page</h1>
      <hr className="my-4" />
      <div className="flex flex-col  gap-4">
        {links.map((items, i) => (
          <Link
            to={items.to}
            key={i}
            className="text-xl hover:scale-105 transition-all duration-300"
          >
            {items.name}
          </Link>
        ))}
      </div>
      <button
        className="mt-5 bg-black text-white px-4 py-2 w-[100%] rounded"
        onClick={logoutHandler}
      >
        Log Out
      </button>
    </div>
  );
};

export default Sidebar;
