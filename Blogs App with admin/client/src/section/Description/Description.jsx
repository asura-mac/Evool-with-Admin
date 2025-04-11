import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const Description = () => {
  const [Data, setData] = useState();
  const [Favorites, setFavorites] = useState(false);
  const { id } = useParams();
  const backendLink = useSelector((state) => state.prod.link);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${backendLink}/api/v1/getDescById/${id}`, {
        withCredentials: true,
      });
      setFavorites(res.data.favourite);
      setData(res.data.blog);
    };
    fetch();
  }, [id]);
  const FavouriteHandler = async () => {
    if (!Favorites) {
      const res = await axios.put(
        `${backendLink}/api/v1/addBlogsToFavourite/${id}`,
        {},
        {
          withCredentials: true,
        }
      );
      toast.success(res.data.message);
    } else {
      const res = await axios.put(
        `${backendLink}/api/v1/removeBlogsFromFavourite/${id}`,
        {},
        {
          withCredentials: true,
        }
      );
      toast.success(res.data.message);
    }

    setFavorites(!Favorites);
  };
  return (
    <div>
      {Data && (
        <>
          <div className="Ww-full flex items-center justify-center">
            <h1 className="text-2xl font-semibold w-5/6">{Data.title}</h1>
            <div className=" w-1/6 text-2xl lg:text-3xl  flex justify-end">
              <button onClick={FavouriteHandler}>
                {Favorites ? (
                  <FaHeart className="hover:cursor-pointer text-yellow-400" />
                ) : (
                  <FaRegHeart className="hover:cursor-pointer" />
                )}
              </button>
            </div>
          </div>
          <img
            className="mt-4 w-full h-[400px] object-cover rounded"
            src={`${Data.image}`}
            alt="blog-image"
          />
          <p className="mt-4">{Data.description}</p>
        </>
      )}
    </div>
  );
};

export default Description;
