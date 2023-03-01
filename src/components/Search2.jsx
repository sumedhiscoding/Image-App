import React from "react";
import { ImageContext } from "../App";
import { BsSearch } from "react-icons/bs";
import { Button} from "antd";
import { useState, useContext } from "react";
const Search2 = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleButtonSearch = () => {
    fetchData(
      `search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    setSearchValue("");
    setSearchImage(searchValue);
  };
  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      fetchData(
        `search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
      );
      setSearchValue("");
      setSearchImage(searchValue);
    }
  };
  return (
    <div>
      <div className="flex">
        <input
          className="bg-gray-50 border placeholder-slate-400 focus:placeholder-black border-gray-300 text-sm w-96 pr-20 indent-2 outline-none focus:border-pink-900 rounded-md "
          type="search"
          placeholder=" Search high resolution Images, categories..."
          value={searchValue}
          onChange={handleInputChange}
          onKeyDown={handleEnterSearch}
        />
       
         
            <Button
              shape="square"
              onClick={handleButtonSearch}
              disabled={!searchValue}
              className="m-1  inline-flex items-center justify-center"
              color="white"
              icon={<BsSearch className=" text-white " />}
            />
          
        
      </div>
    </div>
  );
};

export default Search2;
