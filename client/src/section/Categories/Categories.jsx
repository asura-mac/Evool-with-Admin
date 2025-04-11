import React, { useEffect, useState } from "react";
import BlogCard from "../../components/Blog Card/BlogCard";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
const Categories = () => {
  const backendLink = useSelector((state) => state.prod.link);
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        `${backendLink}/api/v1/getCategoriesById/${id}`,
        {
          withCredentials: true,
        }
      );
      setData(res.data.blogs);
    };
    fetch();
  }, []);
  return (
    <div className="flex flex-col gap-8 lg:gap-4">
      {data &&
        data.map((items, i) => (
          <div key={i} className="flex flex-col lg:flex-row gap-2 lg:gap-4">
            <BlogCard items={items} />
          </div>
        ))}
    </div>
  );
};

export default Categories;
