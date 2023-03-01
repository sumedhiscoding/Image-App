import { createContext, useState } from "react";
import Images from "./components/Images";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import Search from "./components/Search";
import useAxios from "./hooks/useAxios";
import Search2 from "./components/Search2"
import Modal from "./components/Modal";
// Create Context
export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState("");
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=wallpaper&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  );

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  return (

        <ImageContext.Provider value={value}>
          <Header>
             <Search />
           </Header>
           <Header2>
             <Search2/>
          </Header2>
          <div>
          <Images/>
        </div>
          
        </ImageContext.Provider>

      
  );
}

export default App;
