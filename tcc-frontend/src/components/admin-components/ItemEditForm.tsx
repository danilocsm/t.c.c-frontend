import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { PrivateApi } from "../../lib/api";
import LoadingIcon from "../LoadingIcon";
import UploadIcon from "../UploadIcon";

interface ItemEditFormProps {
  id: string;
  name: string;
  price: number;
  link: string;
  image: string;
}

function ItemEditForm({ id, name, price, link, image }: ItemEditFormProps) {
  const [inputs, setInputs] = useState<{
    name: string;
    price: string;
    link: string;
  }>({ name: "", price: "", link: "" });
  const [imagePreview, setImagePreview] = useState<any>("");
  const [base64, setBase64] = useState<string>("");
  const [isSendingData, setIsSendingData] = useState<boolean>(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsSendingData(true);
    try {
      await PrivateApi.patch("/items/" + id, {
        name: inputs.name || undefined,
        price: inputs.price || undefined,
        link: inputs.link || undefined,
        imageUrl: base64 || undefined,
      });
      toast.success("Item editado com sucesso!");
    } catch (error: any) {
      if (error.response.data.status === 403) {
        toast.error("Usuário não autenticado");
      } else toast.error(error.response.data.message);
    } finally {
      setIsSendingData(false);
    }

    setInputs({ name: "", price: "", link: "" });
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

  const onDeleteClicked = async (event: any) => {
    event.preventDefault();
    toast.promise(PrivateApi.delete("items/" + id), {
      success: "Item deletado com sucesso",
      loading: "Deletando Item",
      error: "Erro ao tentar deletar Item.",
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-center rounded-[20px] bg-cerGreen shadow-cerShadow w-[calc(75%-8rem)] h-[calc(45vh-2rem)]">
      <form
        onChange={onChange}
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center justify-center gap-y-2"
        id="itemForm"
      >
        <div className="w-full flex flex-row items-center justify-center gap-y-4 gap-x-4">
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
          <div className="w-3/4 flex flex-col items-start justify-center gap-y-4">
            <input
              autoFocus={true}
              type="text"
              name="name"
              placeholder={name}
              value={inputs.name || ""}
              onChange={onInputChange}
              id="name"
              className="w-[calc(100%-5rem)] h-[59px] rounded-[20px] border-[1px] border-cerBlue bg-white p-4"
            />
            <input
              type="number"
              name="price"
              value={inputs.price || ""}
              onChange={onInputChange}
              placeholder={price.toString()}
              id="price"
              step="0.1"
              className="w-[calc(100%-5rem)] h-[59px] rounded-[20px] border-[1px] border-cerBlue bg-white p-4"
            />
            <input
              type="url"
              name="link"
              value={inputs.link || ""}
              onChange={onInputChange}
              id="link"
              className="w-[calc(100%-5rem)] h-[59px] rounded-[20px] border-[1px] border-cerBlue bg-white p-4"
              placeholder={link}
            />
          </div>
        </div>
        <div className="flex flex-row w-full gap-x-4 justify-end pr-14 mb-2">
          <button
            type="submit"
            className="rounded-[20px] bg-cerBlue w-[200px] h-[50px] hover:bg-cerPurple hover:text-white flex items-center justify-center"
          >
            {(isSendingData && <LoadingIcon />) || `EDITAR`}
          </button>
          <button
            onClick={onDeleteClicked}
            className="rounded-[20px] bg-cerPurple w-[200px] h-[50px] text-white hover:bg-cerBlue hover:text-black"
          >
            EXCLUIR
          </button>
        </div>
      </form>
      <Toaster position="top-right" />
    </div>
  );
}

export default ItemEditForm;
