import { useContext, useState } from "react";
import { ImageContext } from "../App";
import { Button, Tooltip } from "antd";
import { BsSearch } from "react-icons/bs";
const SearchField = () => {
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
    <div className="flex ">
      <div className="flex justify-end">
        <input
          className="bg-gray-50 border placeholder-slate-300 border-gray-300 text-sm w-full  px-20 outline-none focus:border-pink-500 "
          type="search"
          placeholder=" Search Images here"
          value={searchValue}
          onChange={handleInputChange}
          onKeyDown={handleEnterSearch}
        />
      </div>
      <Tooltip title="search">
        <Button
          shape="square"
          onClick={handleButtonSearch}
          // disabled={!searchValue}
          className="m-1 inline-flex p-2  items-center justify-center"
          color="white"
          icon={<BsSearch className=" text-slate-600 " />}
        />
      </Tooltip>
    </div>
  );
};

export default SearchField;
