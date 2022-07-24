import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { PrivateApi } from "../../lib/api";
import LoadingIcon from "../LoadingIcon";

function EditAgentForm() {
  const [inputs, setInputs] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });
  const [base64, setBase64] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // TODO atualizar para o componente receber o Id do usuário que vai ser atualizado
  const id = 1;

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      await PrivateApi.post("/users/" + id);
      toast.success("Usuário editado com sucesso!");
    } catch (error: any) {
      toast.error("Erro ao enviar formulário");
    } finally {
      setIsLoading(false);
    }
  };

  const onChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onProfilePictureFormChange = (event: any) => {
    if (event.target.files === undefined || event.target.files === null) return;
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = _handleProfilePictureLoaded;
      reader.readAsBinaryString(file);
    }
  };

  const _handleProfilePictureLoaded = (readerEvt: any) => {
    let binaryString = readerEvt.target.result;
    setBase64(btoa(binaryString));
  };

  const profilePictureUpload = (event: any) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];

    if (reader !== undefined && file !== undefined) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onChange={onProfilePictureFormChange} onSubmit={handleSubmit}>
      <label
        htmlFor="profilePictureInput"
        className="rounded-[20px] w-[202px] h-[50px] shadow-cerShadow bg-cerBlue items-center justify-center flex cursor-pointer hover:bg-cerPurple"
      >
        Inserir foto
        <input
          type="file"
          className="hidden"
          id="profilePictureInput"
          onChange={profilePictureUpload}
        />
      </label>
      <label htmlFor="nameInput"></label>
      <input
        type="text"
        id="nameInput"
        name="name"
        className="hidden"
        value={inputs.name || ""}
        onChange={onChange}
      />
      <label htmlFor="emailInput"></label>
      <input
        type="email"
        id="emailInput"
        name="email"
        className="hidden"
        value={inputs.email || ""}
        onChange={onChange}
      />
      <Toaster position="top-right" />
      <button
        type="submit"
        className="rounded-[20px] bg-cerBlue grid place-items-center hover:bg-cerPurple hover:text-white  focus:outline-none focus:border-[1px] focus:border-white focus:bg-cerPurple focus:text-white"
      >
        {(isLoading && <LoadingIcon />) || "Editar"}
      </button>
    </form>
  );
}

export default EditAgentForm;
