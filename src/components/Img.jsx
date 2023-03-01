import React from "react";
import { SlLike } from "react-icons/sl";
const Img = ({ data }) => {
  return (
    //href we want to a modal for this
    <div className="card w-72 bg-base-100 shadow-xl scale-95">
      <figure>
        <a href={data.urls.regular} target="_blank" rel="noreferrer">
          <img
            className="w-full rounded-lg "
            src={data.urls.small}
            alt={data.alt_description}
          />
        </a>
      </figure>
      <div className="card-body px-4">
        <div className="flex flex-row justify-between">
          <div className="flex">
            <div className="avatar">
              <div className="w-10 rounded-full ">
                <img src={data.user.profile_image.medium} alt="profile pic" />
              </div>
            </div>
            <div className="px-1.5">
              <div className="px-1 text-sm font-thin">{data.user.name}</div>
              <div className="text-xs font-thin"> @{data.user.username}</div>
            </div>
          </div>
          <div className="flex font-thin ">
            <SlLike className="mx-2 my-1" /> {data.likes}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Img;
