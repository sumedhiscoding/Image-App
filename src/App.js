import { createContext, useState } from "react";
import Images from "./components/Images";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import Search from "./components/Search";
import useAxios from "./hooks/useAxios";
import Search2 from "./components/Search2"
// Create Context
export const ImageContext = createContext();
export const ThemeContext= createContext();


function App() {
  const [theme,setTheme]=useState("cupcake");
  const themeChange=(theme)=>{
    setTheme(theme);
  }


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
    theme,
    themeChange
  };

  return (
    <div data-theme={theme}>
    
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

        </div>  
  );
}

export default App;
