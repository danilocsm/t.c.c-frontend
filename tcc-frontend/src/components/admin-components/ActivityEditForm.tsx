import { Popover } from "@headlessui/react";
import { ToteSimple, UploadSimple } from "phosphor-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { PrivateApi } from "../../lib/api";
import ActivityFormItemsInput from "../activity-components/ActivityFormItemsInput";
import LoadingIcon from "../LoadingIcon";

type FormStringInputs = {
  name: string;
  illnesses: string;
  description: string;
  observations: string;
};

type Item = {
  name: string;
  description: string;
  image: string;
};

interface ActivityEditFormProps {
  id: string;
  name: string;
  illnesses: string;
  description: string;
  image: string;
  observations: string;
  items: Item[];
  sideEffect: () => void;
}

function ActivityEditForm({
  id,
  name,
  illnesses,
  description,
  image,
  observations,
  items,
  sideEffect,
}: ActivityEditFormProps) {
  const [newItems, setNewItems] = useState([]);
  const [inputs, setInputs] = useState<FormStringInputs>({
    name: "",
    illnesses: "",
    description: "",
    observations: "",
  });
  const [base64, setBase64] = useState<string>("");
  const [isSendingData, setIsSendingData] = useState<boolean>(false);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsSendingData(true);
    try {
      await PrivateApi.patch("/activities/" + id, {
        name: inputs.name || undefined,
        description: inputs.description || undefined,
        illnesses: inputs.illnesses || undefined,
        observations: inputs.observations || undefined,
        image: base64 || undefined,
        items: newItems || undefined,
      });
      sideEffect();
      toast.success("Atividade atualizada com sucesso!");
    } catch (error: any) {
      if (error.response.data.status === 403) {
        toast.error("Usuário não autenticado");
      } else toast.error(error.response.data.message);
    } finally {
      setIsSendingData(false);
    }
    setInputs({ name: "", illnesses: "", description: "", observations: "" });
  };

  const _handleReaderLoaded = (readerEvt: any) => {
    let binaryString = readerEvt.target.result;
    setBase64(btoa(binaryString));
  };

  const onChange = (event: any) => {
    if (event.target.files === undefined || event.target.files === null) return;
    let file = event?.target?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = _handleReaderLoaded;
      reader.readAsBinaryString(file);
    }
  };

  const onNewImageUploaded = (event: any) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];
    if (reader !== undefined && file !== undefined) {
      reader.onloadend = () => {
        setIsImageLoaded(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const onDeleteClicked = async (event: any) => {
    event.preventDefault();
    toast.promise(PrivateApi.delete("activities/" + id), {
      success: "Atividade deletada com sucesso",
      loading: "Deletando atividade",
      error: "Erro ao tentar deletar atividade.",
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-center rounded-[20px] bg-cerGreen shadow-cerShadow w-[calc(100%-8rem)] h-[calc(100vh-2rem)]">
      <form
        className="flex flex-col items-center justify-center w-full h-full gap-y-4 mt-4"
        onSubmit={handleSubmit}
        onChange={onChange}
      >
        <input
          type="text"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
          className=" w-[calc(100%-10rem)] rounded-[20px] p-4"
          placeholder={name}
        />
        <input
          type="text"
          name="illnesses"
          value={inputs.illnesses || ""}
          onChange={handleChange}
          className=" w-[calc(100%-10rem)] rounded-[20px] p-4"
          placeholder={illnesses}
        />

        <textarea
          name="description"
          value={inputs.description || ""}
          onChange={handleChange}
          className="resize-none rounded-[20px] bg-white p-4 w-[calc(100%-10rem)] h-[calc(25%-1rem)] mx-4"
          placeholder={description}
        />

        <label
          htmlFor="new-image-input"
          className="bg-cerBlue rounded-[20px] hover:bg-cerPurple hover:text-white w-1/6 h-[50px] group flex flex-row items-center justify-center cursor-pointer"
        >
          {(isImageLoaded && <span>Imagem carregada com sucesso</span>) || (
            <>
              <UploadSimple className="w-6 h-6 group-hover:hidden" />
              <span className="max-w-0 group-hover:max-w-full text-center overflow-hidden transition-all duration-500 ease-linear">
                Adicionar imagem
              </span>
            </>
          )}
          <input
            onChange={onNewImageUploaded}
            id="new-image-input"
            type="file"
            className="hidden"
            accept=".jpeg, .png, .jpg"
            name="image"
          />
        </label>

        <textarea
          name="observations"
          value={inputs.observations || ""}
          onChange={handleChange}
          className="resize-none rounded-[20px] bg-white p-4 w-[calc(100%-10rem)] h-[calc(25%-1rem)]"
          placeholder={observations}
        />

        <div className="relative w-full flex items-center justify-center">
          <Popover className="flex flex-col items-center justify-center w-1/6">
            <Popover.Panel className="absolute bottom-10 w-full self-center">
              <ActivityFormItemsInput setItems={setNewItems} />
            </Popover.Panel>
            <Popover.Button className="bg-cerBlue rounded-[20px] hover:bg-cerPurple hover:text-white w-full h-[50px] group flex items-center justify-center">
              <ToteSimple className="w-6 h-6 group-hover:hidden" />
              <span className="max-w-0 group-hover:max-w-full overflow-hidden transition-all duration-500 ease-linear">
                Adicionar item
              </span>
            </Popover.Button>
          </Popover>
        </div>

        <div className="flex flex-row w-full gap-x-4 justify-end pr-10 mb-2">
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

export default ActivityEditForm;
