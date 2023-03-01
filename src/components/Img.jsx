import React from "react";
import { useState } from "react";
import { SlLike } from "react-icons/sl";
import { Modal } from "antd";
import CustomModal from "./CustomModal";
const Img = ({ data }) => {
  let [likes,setLikes]=useState(data.likes)
  let [likesstring,setLikesString]=useState("")
  const likesCalculator=(likes)=>{
    if(likes>1000){
      likes =likes/1000
     likes=likes.toPrecision(2)
      return likesstring=likes.toString()+"k"
    }
    else{
      return likes
    }
  }
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="card w-72 bg-base-100 shadow-xl scale-95">
      <figure>
        {/* <a href={data.urls.regular} target="_blank" rel="noreferrer"> */}
        <button onClick={showModal}>
          <img
            className="w-full rounded-lg "
            src={data.urls.small}
            alt={data.alt_description}
          />
        </button>
        {/*_1 adding this before img tag was not working */}
        {/* modal code */}
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          okButtonProps={{ type: "dashed" }}
          onCancel={handleCancel}
          width={700}
          centered
          className="object-cover"
        >
          <p>
            <CustomModal data={data}/>
          </p>
        </Modal>
        {/* modal code finishes */}

        {/* </a> */}
      </figure>
      <div className="card-body px-4">
        <div className="flex flex-row justify-between">
          <div className="flex">
            <div className="avatar">
              <div className="w-10 rounded-full ">
                <img src={data.user.profile_image.medium} alt="profile pic" />
              </div>
            </div>
            <div className="px-1.5 flex-row items-center">
              <div className="px-1 text-sm font-semibold">{data.user.name}</div>
              <div className="text-xs font-thin"> @{data.user.username}</div>
            </div>
          </div>
          <div className="flex font-thin ">
            <SlLike className="mx-2 my-1" /> {likesCalculator(data.likes)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Img;
