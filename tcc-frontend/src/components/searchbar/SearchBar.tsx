import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/api";
import SearchButton from "./SearchButton";
import SearchIcon from "./SearchIcon";

function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const onSearchClick = async () => {
    toast.promise(
      api.get("/activities/" + inputValue).then((response) => {
        if (response.data.name !== undefined) 
          navigate("/activities/detail/" + response.data.name, { replace: true, state: {...response.data} });
      }),
      {
        loading: "Buscando atividade...",
        success: "Atividade recuperada com sucesso",
        error: "Atividade não encontrada",
      }
    );
  };

  return (
    <div className="flex flew-row w-screen items-center justify-center gap-x-4">
      <div
        className={`flex flex-row md:w-[770px] md:h-[61px] w-3/4 h-1/7 bg-white rounded-[20px] shadow-cerShadow p-0 `}
      >
        <SearchIcon />
        <input
          className={`text-[20px] p-2 w-full h-full rounded-[20px] focus:outline-none focus:underline focus:decoration-cerBlue focus:underline-offset-2`}
          type="text"
          placeholder="Digite o nome de uma atividade..."
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
        />
      </div>
      <SearchButton onClick={onSearchClick} />
      <Toaster position="top-right" />
    </div>
  );
}

export default SearchBar;
