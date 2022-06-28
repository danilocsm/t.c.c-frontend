import { useState } from "react";
import ItemsOptionsLayout from "../../components/items-options-layout/ItemsOptionsButtons";
import SearchBar from "../../components/searchbar/SearchBar";

function Items() {
  const [itemType, setItemType] = useState<string>("");

  return (
    <>
      <div className="w-100vw grid items-center justify-center">
        <h1 className="text-center text-[36px] mt-2">UTENSÍLIOS</h1>
        <div className="w-screen flex flex-row h-fit">
          <p className="text-center text-[20px] px-[135px]">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex
            duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt
            mollit dolore cillum minim tempor enim. Elit aute irure tempor
            cupidatat incididunt sint deserunt.
          </p>
        </div>
        <div className="w-screen my-4">
          <ItemsOptionsLayout
            onOptionSelected={(selected: string) => {
              setItemType(selected);
            }}
          />
        </div>
        <div className="flex flex-row items-center justify-center w-screen h-2/3">
          <SearchBar />
        </div>
        <div className="grid grid-cols-3 w-screen items-center justify-center gap-4">
            {/* ItemObject */}
        </div>
      </div>
    </>
  );
}

export default Items;
