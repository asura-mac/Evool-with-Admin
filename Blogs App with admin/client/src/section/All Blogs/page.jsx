import React, { useEffect, useState } from "react";
import AllBlogsComponent from "../../components/All Blogs/AllBlogsComponent";
import { useSelector } from "react-redux";
import axios from "axios";

const AllBlogs = () => {
  const backendLink = useSelector((state) => state.prod.link);
  const [Data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${backendLink}/api/v1/fetchAllBlogs`, {
        withCredentials: true,
      });
      setData(res.data.blogs);
    };
    fetch();
  }, []);
  return (
    <div className="mb-4 py-4">
      {Data && (
        <>
          <h1 className="text-xl font-semibold mb-4">All Blogs</h1>
          <AllBlogsComponent data={Data} />
        </>
      )}
    </div>
  );
};

export default AllBlogs;
