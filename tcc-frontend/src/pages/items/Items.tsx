import { useEffect, useState } from "react";
import GridObject from "../../components/grid-object/GridObject";
import ItemsOptionsLayout from "../../components/items-options-layout/ItemsOptionsButtons";

type ItemsType = {
  title: string;
  image: string;
  link: string;
};

const fetchToys = () => {
  const items = [
    {
      title: "Objeto 1",
      link: "http://www.google.com",
      image:
        "https://img.freepik.com/vetores-gratis/conjunto-de-brinquedos-infantis_74855-7019.jpg?size=626&ext=jpg",
    },
    {
      title: "Objeto 2",
      link: "http://www.google.com",
      image:
        "https://img.freepik.com/vetores-gratis/conjunto-de-brinquedos-infantis_74855-7019.jpg?size=626&ext=jpg",
    },
    {
      title: "Objeto 3",
      link: "http://www.google.com",
      image:
        "https://img.freepik.com/vetores-gratis/conjunto-de-brinquedos-infantis_74855-7019.jpg?size=626&ext=jpg",
    },
    {
      title: "Objeto 4",
      link: "http://www.google.com",
      image:
        "https://img.freepik.com/vetores-gratis/conjunto-de-brinquedos-infantis_74855-7019.jpg?size=626&ext=jpg",
    },
    {
      title: "Objeto 5",
      link: "http://www.google.com",
      image:
        "https://img.freepik.com/vetores-gratis/conjunto-de-brinquedos-infantis_74855-7019.jpg?size=626&ext=jpg",
    },
    {
      title: "Objeto 6",
      link: "http://www.google.com",
      image:
        "https://img.freepik.com/vetores-gratis/conjunto-de-brinquedos-infantis_74855-7019.jpg?size=626&ext=jpg",
    },
  ];
  return items;
};

const fetchMobil = () => {
  const items = [
    {
      title: "Mobiliário 1",
      link: "http://www.google.com",
      image:
        "https://img.freepik.com/vetores-gratis/conjunto-de-brinquedos-infantis_74855-7019.jpg?size=626&ext=jpg",
    },
    {
      title: "Mobiliário 2",
      link: "http://www.google.com",
      image:
        "https://img.freepik.com/vetores-gratis/conjunto-de-brinquedos-infantis_74855-7019.jpg?size=626&ext=jpg",
    },
    {
      title: "Mobiliário 3",
      link: "http://www.google.com",
      image:
        "https://img.freepik.com/vetores-gratis/conjunto-de-brinquedos-infantis_74855-7019.jpg?size=626&ext=jpg",
    },
    {
      title: "Mobiliário 4",
      link: "http://www.google.com",
      image:
        "https://img.freepik.com/vetores-gratis/conjunto-de-brinquedos-infantis_74855-7019.jpg?size=626&ext=jpg",
    },
    {
      title: "Mobiliário 5",
      link: "http://www.google.com",
      image:
        "https://img.freepik.com/vetores-gratis/conjunto-de-brinquedos-infantis_74855-7019.jpg?size=626&ext=jpg",
    },
    {
      title: "Mobiliário 6",
      link: "http://www.google.com",
      image:
        "https://img.freepik.com/vetores-gratis/conjunto-de-brinquedos-infantis_74855-7019.jpg?size=626&ext=jpg",
    },
  ];
  return items;
};

const fetchFoods = () => {
  const items = [
    {
      title: "Comida 1",
      link: "http://www.google.com",
      image:
        "https://www.cozinhandopara2ou1.com.br/wp-content/uploads/2019/12/ReceitasParaFerias_CozinhandoPara2ou1.jpg",
    },
    {
      title: "Comida 2",
      link: "http://www.google.com",
      image:
        "https://www.cozinhandopara2ou1.com.br/wp-content/uploads/2019/12/ReceitasParaFerias_CozinhandoPara2ou1.jpg",
    },
    {
      title: "Comida 3",
      link: "http://www.google.com",
      image:
        "https://www.cozinhandopara2ou1.com.br/wp-content/uploads/2019/12/ReceitasParaFerias_CozinhandoPara2ou1.jpg",
    },
    {
      title: "Comida 4",
      link: "http://www.google.com",
      image:
        "https://www.cozinhandopara2ou1.com.br/wp-content/uploads/2019/12/ReceitasParaFerias_CozinhandoPara2ou1.jpg",
    },
    {
      title: "Comida 5",
      link: "http://www.google.com",
      image:
        "https://www.cozinhandopara2ou1.com.br/wp-content/uploads/2019/12/ReceitasParaFerias_CozinhandoPara2ou1.jpg",
    },
    {
      title: "Comida 6",
      link: "http://www.google.com",
      image:
        "https://www.cozinhandopara2ou1.com.br/wp-content/uploads/2019/12/ReceitasParaFerias_CozinhandoPara2ou1.jpg",
    },
  ];
  return items;
};
const fetchCloath = () => {
  const items = [
    {
      title: "Roupa 1",
      link: "http://www.google.com",
      image:
        "https://img.freepik.com/vetores-gratis/conjunto-de-brinquedos-infantis_74855-7019.jpg?size=626&ext=jpg",
    },
    {
      title: "Roupa 2",
      link: "http://www.google.com",
      image:
        "https://img.freepik.com/vetores-gratis/conjunto-de-brinquedos-infantis_74855-7019.jpg?size=626&ext=jpg",
    },
    {
      title: "Roupa 3",
      link: "http://www.google.com",
      image:
        "https://img.freepik.com/vetores-gratis/conjunto-de-brinquedos-infantis_74855-7019.jpg?size=626&ext=jpg",
    },
    {
      title: "Roupa 4",
      link: "http://www.google.com",
      image:
        "https://img.freepik.com/vetores-gratis/conjunto-de-brinquedos-infantis_74855-7019.jpg?size=626&ext=jpg",
    },
    {
      title: "Roupa 5",
      link: "http://www.google.com",
      image:
        "https://img.freepik.com/vetores-gratis/conjunto-de-brinquedos-infantis_74855-7019.jpg?size=626&ext=jpg",
    },
    {
      title: "Roupa 6",
      link: "http://www.google.com",
      image:
        "https://img.freepik.com/vetores-gratis/conjunto-de-brinquedos-infantis_74855-7019.jpg?size=626&ext=jpg",
    },
  ];
  return items;
};

function Items() {
  const [itemType, setItemType] = useState<string>("");
  const [itemsToRender, setItemsToRender] = useState<ItemsType[]>([]);

  useEffect(() => {
    setItemsToRender(fetchToys());
  }, []);

  useEffect(() => {
    // loading
    switch (itemType) {
      case "Brinquedos":
        setItemsToRender(fetchToys());
        break;
      case "Mobiliário":
        setItemsToRender(fetchMobil());
        break;
      case "Vestuário":
        setItemsToRender(fetchCloath());
        break;
      case "Alimentação":
        setItemsToRender(fetchFoods());
        break;
    }
    // console.log(itemsToRender, itemType);
    // loadingDone
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
        />
      </div>
      <div className="w-screen h-fit flex items-center justify-center md:pl-10 mb-4">
        <div className="grid md:grid-cols-4 grid-cols-2  w-screen items-center justify-center gap-4 px-4 mt-10 overflow-x-hidden">
          {itemsToRender.map((item) => {
            return (
              <GridObject
                title={item.title}
                image={item.image}
                link={item.link}
                buttonText="clique aqui para comprar"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Items;
