import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { UploadIcon } from "../icons/index";

interface ActivityFormItemsInputProps {
  setItems: (items: any) => void;
}

function ActivityFormItemsInput({ setItems }: ActivityFormItemsInputProps) {
  const [inputs, setInputs] = useState<{ name: string; description: string }>({
    name: "",
    description: "",
  });
  const [itemImagePreview, setItemImagePreview] = useState<any>("");
  const [itemImageBase64, setItemImageBase64] = useState<string>("");

  const handleClick = (event: any) => {
    event.preventDefault();
    setItems((items: any) => [
      ...items,
      {
        name: inputs.name,
        description: inputs.description,
        image: itemImageBase64,
      },
    ]);
    setItemImagePreview("");
    setInputs({ name: "", description: "" });
    setTimeout(() => {
      toast.success("Item adicionado com sucesso!");
    }, 300);
  };

  const onTextInputChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const _handleItemReaderLoaded = (readerEvt: any) => {
    let binaryString = readerEvt.target.result;
    setItemImageBase64(btoa(binaryString));
  };

  const onItemFormChange = (event: any) => {
    if (event.target.files === undefined || event.target.files === null) return;
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = _handleItemReaderLoaded;
      reader.readAsBinaryString(file);
    }
  };

  const photoUpload = (event: any) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];

    if (reader !== undefined && file !== undefined) {
      reader.onloadend = () => {
        setItemImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="flex flex-row md:w-[1030px] md:h-[225px] rounded-[20px] border-[1px] border-solid border-cerBlue bg-white my-4"
      onChange={onItemFormChange}
    >
      <div className="flex flex-col items-center justify-center h-full w-1/4">
        <label
          htmlFor="imageUploadInput"
          className="rounded-full bg-cerGreen cursor-pointer w-[159px] h-[159px] flex flex-col items-center justify-center"
        >
          {itemImagePreview === "" ? (
            <div className="hover:animate-bounce flex flex-row items-center">
              <UploadIcon />
              <span className="font-semibold text-[14px]">
                {" "}
                Adicionar imagem
              </span>
            </div>
          ) : (
            <img
              src={itemImagePreview}
              className="w-full h-full rounded-full"
            />
          )}
          <input
            type="file"
            id="imageUploadInput"
            className="hidden"
            accept=".jpeg, .png, .jpg"
            onChange={photoUpload}
            name="image"
          />
        </label>
      </div>
      <div className="flex flex-col items-center justify-center h-full w-2/4 gap-y-2">
        <input
          type="text"
          name="name"
          value={inputs.name || ""}
          onChange={onTextInputChange}
          placeholder="Adicione nome do objeto..."
          className="p-4 border-[1px] border-cerBlue rounded-[20px] w-full"
        />
        <textarea
          name="description"
          value={inputs.description || ""}
          onChange={onTextInputChange}
          placeholder="Adicione a descrição do objeto..."
          className="w-full h-2/4 p-4 resize-none border-[1px] border-cerBlue rounded-[20px]"
        />
      </div>
      <div className="flex items-center justify-center h-full w-1/4 p-2">
        <button
          onClick={handleClick}
          disabled={inputs.name === "" || inputs.description === ""}
          className="rounded-[20px] bg-cerBlue w-full h-1/3 hover:bg-cerPurple hover:text-white focus:outline-none focus:bg-cerPurple focus:border-[1px] focus:border-white focus:text-white transition ease-in-out disabled:opacity-80 disabled:hover:bg-cerBlue disabled:hover:text-black"
        >
          Adicionar
        </button>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}

export default ActivityFormItemsInput;
