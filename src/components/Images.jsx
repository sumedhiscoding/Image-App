import { useContext } from "react";
import { ImageContext } from "../App";
import Img from "./Img";
import LoadingScreen from "./LoadingScreen";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Images = () => {
  // eslint-disable-next-line
  const { response, isLoading, searchImage } = useContext(ImageContext);
  return (
    <div className="flex justify-center">
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4"> */} 
    <div 
    className="w-3/4" 
    >
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 1000: 2, 1200: 3 }}>
        <Masonry gutter="10px">
          
          {isLoading ? (
            <LoadingScreen/>
          ) : (
            response.map((data, key) => <Img key={key} data={data}  />)
          )}
         
        </Masonry>
      </ResponsiveMasonry>
      </div>
      
      {/* </div> */}
    </div>
  );
};

export default Images;
