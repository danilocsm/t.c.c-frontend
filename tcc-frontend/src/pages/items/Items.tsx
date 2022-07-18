import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ItemGridObject from "../../components/grid-object/ItemGridObject";
import ItemsOptionsLayout from "../../components/item-components/ItemsOptionsButtons";
import LoadingIcon from "../../components/LoadingIcon";
import { PublicApi } from "../../lib/api";

type ItemsType = {
  name: string;
  imageUrl: string;
  link: string;
  itemType: string;
};

function Items() {
  const [itemType, setItemType] = useState<string>("");
  const [itemsToRender, setItemsToRender] = useState<ItemsType[]>([]);
  const [isGettingItems, setIsGettingItems] = useState<boolean>(false);

  const fetchItems = async (filter: string) => {
    setIsGettingItems(true);
    try {
      const response = await PublicApi.get("/items/all/" + filter);
      setItemsToRender(response.data);
      toast.success("Items recuperados com sucesso");
    } catch (error: AxiosError | any) {
      console.log(error.response.data.message);
      toast.error("Falha recuperando os itens: " + error.response.data.message);
    } finally {
      setIsGettingItems(false);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    switch (itemType) {
      case "Brinquedos":
        fetchItems("TOY");
        break;
      case "Mobiliário":
        fetchItems("ACCESSORY");
        break;
      case "Vestuário":
        fetchItems("CLOATHING");
        break;
      case "Alimentação":
        fetchItems("FOOD");
        break;
    }

    return () => {
      abortController.abort();
    };
  }, [itemType]);

  return (
    <div className="w-100vw grid items-center justify-center overflow-x-hidden">
      <h1 className="text-center text-[36px] mt-2">UTENSÍLIOS</h1>
      <div className="w-screen flex flex-row h-1/7 justify-center items-center overflow-x-hidden">
        <p className="text-center text-[20px] px-[135px]">
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
          esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
        </p>
      </div>
      <div className="w-screen my-4">
        <ItemsOptionsLayout
          onOptionSelected={(selected: string) => {
            setItemType(selected);
          }}
          autoSelectFirst={true}
        />
      </div>
      <div className="w-screen h-fit flex items-center justify-center md:pl-10 mb-4">
        {isGettingItems ? (
          <div className="justify-self-center mt-6">
            <LoadingIcon />
          </div>
        ) : itemsToRender.length === 0 ? (
          <h1 className="text-[36px] mt-4">{`Nenhum item do tipo ${itemType} cadastrado.`}</h1>
        ) : (
          <div className="grid md:grid-cols-4 grid-cols-2  w-screen items-center justify-center gap-4 px-4 mt-10 overflow-x-hidden">
            {itemsToRender.map((item) => {
              return (
                <ItemGridObject
                  title={item.name}
                  image={item.imageUrl}
                  link={item.link}
                  buttonText="clique aqui para comprar"
                />
              );
            })}
          </div>
        )}
      </div>
      <Toaster position="top-right" />
    </div>
  );
}

export default Items;
