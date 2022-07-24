import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { PublicApi } from "../../lib/api";
import { LoadingIcon } from "../icons/index";
import UpdateButton from "../UpdateButton";
import ItemEditForm from "./ItemEditForm";

function ItemsDashboard() {
  const [items, setItems] = useState([]);
  const [isFecthingData, setIsFecthingData] = useState(false);

  const fetchItems = async () => {
    setIsFecthingData(true);
    try {
      const response = await PublicApi.get("/items/all");
      setItems(response.data);
      toast.success("Items recuperados com sucesso!");
    } catch (error: any) {
      toast.error("Erro ao tentar recuperar items");
    } finally {
      setIsFecthingData(false);
    }
  };

  const sideEffect = () => {
    setTimeout(() => {
      fetchItems();
    }, 200);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="w-screen flex flex-col items-center justify-center gap-y-8">
      <div className="relative grid grid-flow-col place-items-center w-full">
        <h1 className="text-[36px]">LISTA DE UTENSÍLIOS:</h1>
        <UpdateButton
          onClick={() => fetchItems()}
          style={`top-0 right-4 bg-cerBlue rounded-[20px] h-[calc(10vh-2rem)] w-[calc(15vw-2rem)] hover:bg-cerPurple hover:text-white focus:outline-none focus:bg-cerPurple focus:text-white focus:border-[1px] focus:border-white`}
        />
      </div>
      {(isFecthingData && <LoadingIcon />) ||
        (items.length > 0 &&
          items.map((item: any) => {
            return <ItemEditForm {...item} key={item.id} />;
          })) || <h1 className="text-[36px]">Sem itens cadastrados</h1>}
      <Toaster position="top-right" />
    </div>
  );
}

export default ItemsDashboard;
