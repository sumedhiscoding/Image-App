import React from "react";
import { useContext } from "react";
import { SlLike } from "react-icons/sl";
import { ImageContext } from "../App";
import {AiOutlineTwitter,AiOutlineInstagram} from "react-icons/ai"
import useAxios from "../hooks/useAxios";
const CustomModal = ({ data }) => {
  return (
    <>
      <img
        className="w-full px-0 rounded-lg  "
        src={data.urls.regular}
        alt={data.alt_description}
      />
      <p>
        <div className="flex flex-row justify-between my-5">
          <div className="flex">
            <div className="avatar">
              <div className="w-10 rounded-full ">
                <img src={data.user.profile_image.medium} alt="profile pic" />
              </div>
            </div>
            <div className="px-1.5">
              <div className="px-1 text-sm font-bold">{data.user.name}</div>
              <div className="text-xs "> @{data.user.username}</div>
            </div>
            <div className="flex  items-baseline">
              <div className="flex items-center px-2"><span>
                <AiOutlineTwitter/>
                </span>
               / {data.user.twitter_username}</div>
              <div className="flex items-center px-2">
                <span>
                <AiOutlineInstagram/>
                </span>
               / {data.user.instagram_username}
                </div>
            </div>
          </div>
          <div className="flex font-thin ">
            <SlLike className="mx-2 my-1" /> {data.likes}
          </div>
        </div>
      </p>
    </>
  );
};

export default CustomModal;
