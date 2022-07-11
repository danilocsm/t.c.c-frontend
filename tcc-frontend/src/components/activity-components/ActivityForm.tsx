import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { api } from "../../lib/api";
import ActivityImageInput from "./ActivityImageInput";
import ActivityFormDifficulty from "./ActivityFormDifficulty";
import ActivityFormItemsInput from "./ActivityFormItemsInput";

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

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log(inputs);
    toast.promise(
      api.post("/activities/create", {
        ...inputs,
        difficulty: difficulty,
        image: base64,
        items: activityItems,
      }),
      {
        loading: "Cadastrando nova atividade...",
        success: "Atividade cadastrada com sucesso!",
        error: "Erro ao tentar cadastrar nova atividade.",
      }
    );
    setInputs({ name: "", illnesses: "", description: "", observations: "" });
  };

  const _handleReaderLoaded = (readerEvt: any) => {
    let binaryString = readerEvt.target.result;
    setBase64(btoa(binaryString));
  };

  const onChange = (event: any) => {
    if (event.target.files === undefined || event.target.files === null) return;
    let file = event?.target?.files[0];
    console.log(file);
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
        <ActivityImageInput />
        <span className="text-[20px] self-start">INSERIR UTENSÍLIOS:</span>
        <ActivityFormItemsInput setItems={setActivityItems} />
        <span className="text-[20px] self-start">OBSERVAÇÕES:</span>
        <textarea
          className="bg-white rounded-[20px] resize-none p-2 md:w-[1030px] md:h-[225px] border-[1px] border-solid border-cerBlue"
          name="observations"
          value={inputs.observations || ""}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-cerBlue text-white rounded-[20px] md:w-[566px] md:h-[61px] mb-4 hover:bg-cerPurple"
        >
          CADASTRAR
        </button>
      </form>
      <Toaster position="top-right" />
    </div>
  );
}

export default ActivityForm;
