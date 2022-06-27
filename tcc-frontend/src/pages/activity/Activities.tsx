import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import SearchBar from "../../components/searchbar/SearchBar";

function Activities() {
  return (
    <>
      <div className="w-100vw grid items-center justify-center">
        <div className="w-screen flex flex-col items-center justify-center mt-4">
          <h1 className="font-grandstander text-[30px] "> FAÇA SUA BUSCA </h1>
        </div>
        <div className="flex flex-col items-center justify-center w-screen h-1/5">
          <SearchBar />
        </div>
        <div className="md:w-[804px] md:h-[51px] w-2/3 h-1/5 flex items-center justify-center">
          <h1>{}</h1>
        </div>
      </div>
    </>
  );
}

export default Activities;
