import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { api } from "../../lib/api";
import UploadIcon from "../UploadIcon";

function ItemForm() {
  const [inputs, setInputs] = useState<{
    name: string;
    price: number;
    link: string;
  }>({ name: "", price: 0, link: "" });
  const [imagePreview, setImagePreview] = useState<any>("");
  const [base64, setBase64] = useState<string>("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    toast.promise(
      api.post("/items/create", {
        ...inputs,
        image: base64,
      }),
      {
        loading: "Cadastrando novo utensílio...",
        success: "Utensílio cadastrado com sucesso!",
        error: "Erro ao tentar cadastrar novo utensílio.",
      }
    );
    setInputs({ name: "", price: 0, link: "" });
    setImagePreview("");
  };

  const onInputChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onChange = (event: any) => {
    if (event.target.files === undefined || event.target.files === null) return;
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = _handleReaderLoaded;
      reader.readAsBinaryString(file);
    }
  };

  const _handleReaderLoaded = (readerEvt: any) => {
    let binaryString = readerEvt.target.result;
    setBase64(btoa(binaryString));
  };

  const photoUpload = (event: any) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];

    if (reader !== undefined && file !== undefined) {
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center justifty-center w-screen px-4 overflow-hidden gap-y-8">
      <h1 className="text-[36px] my-2">CADASTRO DE UM UTENSÍLIO</h1>
      <form
        onChange={onChange}
        onSubmit={handleSubmit}
        className="w-screen flex flex-row h-full"
        id="itemForm"
      >
        <div className="w-1/4 flex flex-col items-center justify-center gap-y-4">
          <label
            htmlFor="pictureInput"
            className="bg-cerBlue rounded-[20px]  cursor-pointer flex items-center justify-center w-[250px] h-[250px]"
          >
            {imagePreview === "" ? (
              <div className="hover:animate-bounce flex flex-row items-center">
                <UploadIcon />
                <span className="font-semibold text-[14px]">
                  Adicionar imagem
                </span>
              </div>
            ) : (
              <img
                src={imagePreview}
                className="w-full h-full rounded-[20px]"
              />
            )}
            <input
              type="file"
              id="pictureInput"
              className="hidden"
              accept=".jpeg, .png, .jpg"
              onChange={(event) => photoUpload(event)}
              name="image"
            />
          </label>
        </div>
        <div className="w-3/4 flex flex-col items-start justify-center">
          <label htmlFor="name" className="text-[20px]">
            NOME DO PRODUTO:
          </label>
          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={onInputChange}
            id="name"
            className="w-[872px] h-[59px] rounded-[20px] border-[1px] border-cerBlue bg-white p-4"
          />
          <label htmlFor="price" className="text-[20px]">
            PREÇO:
          </label>
          <input
            type="number"
            name="price"
            value={inputs.price || ""}
            onChange={onInputChange}
            id="price"
            step="0.1"
            className="w-[872px] h-[59px] rounded-[20px] border-[1px] border-cerBlue bg-white p-4"
          />
          <label htmlFor="link" className="text-[20px]">
            LINK PARA COMPRA:
          </label>
          <input
            type="url"
            name="link"
            value={inputs.link || ""}
            onChange={onInputChange}
            id="link"
            className="w-[872px] h-[59px] rounded-[20px] border-[1px] border-cerBlue bg-white p-4"
            placeholder="http://example.com"
          />
        </div>
      </form>
      <button
        form="itemForm"
        type="submit"
        className="bg-cerBlue text-white rounded-[20px] md:w-[566px] md:h-[61px] mb-4 hover:bg-cerPurple"
      >
        CADASTRAR
      </button>
      <Toaster position="top-right" />
    </div>
  );
}

export default ItemForm;
