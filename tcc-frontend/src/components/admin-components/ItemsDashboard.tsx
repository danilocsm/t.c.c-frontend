import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { PublicApi } from "../../lib/api";
import LoadingIcon from "../LoadingIcon";
import ItemEditForm from "./ItemEditForm";

function ItemsDashboard() {
  const [items, setItems] = useState([]);
  const [isFecthingData, setIsFecthingData] = useState(false);

  const fetchActivities = async () => {
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

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <div className="w-screen flex flex-col items-center justify-center gap-y-8">
      <h1 className="text-[36px]">LISTA DE UTENSÍLIOS:</h1>
      {(isFecthingData && <LoadingIcon />) ||
        (items.length > 0 &&
          items.map((item: any) => {
            return <ItemEditForm {...item} key={item.id} />;
          })) || <h1 className="text-[36px]">Sem itens cadastrados</h1>}
    </div>
  );
}

export default ItemsDashboard;
