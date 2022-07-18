import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { PrivateApi } from "../../lib/api";
import ActivityImageInput from "./ActivityImageInput";
import ActivityFormDifficulty from "./ActivityFormDifficulty";
import ActivityFormItemsInput from "./ActivityFormItemsInput";
import LoadingIcon from "../LoadingIcon";

type FormStringInputs = {
  name: string;
  illnesses: string;
  description: string;
  observations: string;
};

type FormActiviyItemInput = {
  image: string;
  name: string;
  description: string;
};

function ActivityForm() {
  const [inputs, setInputs] = useState<FormStringInputs>({
    name: "",
    illnesses: "",
    description: "",
    observations: "",
  });
  const [difficulty, setDifficulty] = useState("");
  const [activityItems, setActivityItems] = useState<FormActiviyItemInput[]>(
    []
  );
  const [base64, setBase64] = useState<string>();
  const [isSendingData, setIsSendingData] = useState<boolean>(false);

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSendingData(true);
    try {
      await PrivateApi.post(
        "/activities/create",
        {
          ...inputs,
          difficulty: difficulty,
          image: base64,
          items: activityItems,
        },
        { withCredentials: true }
      );
      toast.success("Atividade cadastrada com sucesso!");
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
    if (event.target !== "input#dropzone-file") return;
    if (event.target.files === undefined || event.target.files === null) return;
    let file = event?.target?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = _handleReaderLoaded;
      reader.readAsBinaryString(file);
    }
  };

  return (
    <div className="flex flex-col items-center justifty-center w-screen h-fit px-4 overflow-hidden">
      <h1 className="text-[36px] my-2">CADASTRO DE UMA ATIVIDADE</h1>
      <form
        id="activtyForm"
        className="w-[1030px] flex flex-col items-center justify-center gap-y-4"
        onSubmit={handleSubmit}
        onChange={(event) => onChange(event)}
      >
        <span className="text-[20px] self-start">NOME DA ATIVIDADE</span>
        <input
          autoFocus={true}
          type="text"
          name="name"
          onChange={handleChange}
          value={inputs.name || ""}
          className="md:w-[1030px] md:h-[61px] bg-white rounded-[20px] border-[1px] border-solid border-cerBlue p-2"
        />
        <span className="text-[20px] self-start">
          SÍNDROMES E DOENÇAS EM FOCO:
        </span>
        <textarea
          className="bg-white rounded-[20px] resize-none p-2 md:w-[1030px] md:h-[110px] border-[1px] border-solid border-cerBlue"
          name="illnesses"
          value={inputs.illnesses || ""}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <span className="text-[20px] self-start">Descrição:</span>
        <textarea
          className="bg-white rounded-[20px] resize-none p-2 md:w-[1030px] md:h-[225px] border-[1px] border-solid border-cerBlue"
          name="description"
          value={inputs.description || ""}
          onChange={handleChange}
        />
        <span className="text-[20px] self-start">SELECIONE A DIFICULDADE:</span>
        <div className="w-full">
          <ActivityFormDifficulty
            onSelected={(selected: string) => {
              setDifficulty(selected);
            }}
          />
        </div>
        <span className="text-[20px] self-start">
          INSERIR IMAGENS PASSO-A-PASSO:
        </span>
        <ActivityImageInput isFormSent={isSendingData} />
        <span className="text-[20px] self-start">INSERIR UTENSÍLIOS:</span>
        <ActivityFormItemsInput setItems={setActivityItems} />
        <Toaster position="top-right" />
        <span className="text-[20px] self-start">OBSERVAÇÕES:</span>
        <textarea
          className="bg-white rounded-[20px] resize-none p-2 md:w-[1030px] md:h-[225px] border-[1px] border-solid border-cerBlue"
          name="observations"
          value={inputs.observations || ""}
          onChange={handleChange}
        />
        <button
          disabled={
            inputs.name === "" ||
            inputs.description === "" ||
            inputs.illnesses === "" ||
            inputs.observations === ""
          }
          type="submit"
          className="my-4 bg-cerBlue text-white rounded-[20px] md:w-[566px] md:h-[61px] mb-4 hover:bg-cerPurple flex items-center justify-center disabled:opacity-70 disabled:hover:bg-cerBlue"
        >
          {(isSendingData && <LoadingIcon />) || `CADASTRAR`}
        </button>
      </form>
    </div>
  );
}

export default ActivityForm;
