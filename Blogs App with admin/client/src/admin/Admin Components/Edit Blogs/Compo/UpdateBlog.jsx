import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const UpdateBlog = () => {
  const [Data, setData] = useState({ title: "", description: "" });
  const { id } = useParams();
  const backendLink = useSelector((state) => state.prod.link);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${backendLink}/api/v1/getDescById/${id}`, {
        withCredentials: true,
      });
      setData(res.data.blog);
    };
    fetch();
  }, [id]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${backendLink}/api/v1/editBlog/${id}`,
        Data,
        {
          withCredentials: true,
        }
      );
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-4 h-screen">
      <h1 className="text-2xl font-semibold">Update Blog</h1>
      {Data && (
        <form action="" className="my-4 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Title"
            className="borde-none outline-none p-4 bg-transparent text-3xl border-b border-zinc-400 font-semibold w-full"
            name="title"
            value={Data.title}
            onChange={changeHandler}
          />
          <textarea
            type="text"
            placeholder="Description"
            className="borde-none outline-none p-4 bg-transparent text-xl border-b border-zinc-400 font-semibold w-full"
            name="description"
            value={Data.description}
            onChange={changeHandler}
          />
          <div>
            <button
              className="bg-blue-600  text-white rounded px-4 py-2 shadow-xl hover:bg-blue-700 transition-all duration-300"
              onClick={updateHandler}
            >
              Update Blog
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UpdateBlog;
