import { useState } from "react";
import toast from "react-hot-toast";
import { PrivateApi } from "../../lib/api";
import { LoadingIcon } from "../icons/index";

interface DoubtCardProps {
  id: string;
  name: string;
  email: string;
  text: string;
}

function DoubtCard({ id, name, email, text }: DoubtCardProps) {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string>("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsSending(true);
    try {
      await PrivateApi.patch("/questions/" + id, {
        answer: answer,
        contactEmail: email,
      });
      toast.success("Dúvida respondida com sucesso!");
      setAnswer("");
    } catch (error: any) {
      if (error.response.data.status === 403) {
        toast.error("Usuário não autenticado");
      } else toast.error("Erro inesperado!");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="shadow-cerShadow bg-cerGreen rounded-[20px] flex flex-col items-center justify-center md:w-[1030px] md:h-[600px] ">
      <div className="flex flex-col h-[250px] py-4 md:w-[900px] justify-start items-start">
        <span className="text-[30px] self-start">{email}</span>
        <span className="text-[30px] self-start ">{name}</span>
        <p className="text-[18px] self-start pl-4 overflow-y-auto scrollbar-thin scrollbar-track-cerBlue">
          {text}
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-auto h-auto gap-y-4"
      >
        <label className="text-[20px] self-start">RESPOSTA:</label>
        <textarea
          value={answer}
          onChange={(event: any) => setAnswer(event.target.value)}
          className="resize-none p-4 bg-white rounded-[20px] md:w-[900px] md: h-[220px]"
          placeholder="Escreva a mensagem aqui..."
        />
        <button
          disabled={answer.length === 0}
          className="flex items-center justify-center rounded-[20px] bg-cerBlue self-end md:w-[230px] md:h-[50px] hover:bg-cerPurple hover:text-white focus:outline-none focus:bg-cerPurple focus:text-white disabled:opacity-70 disabled:hover:bg-cerBlue"
        >
          {(isSending && <LoadingIcon />) || `ENVIAR`}
        </button>
      </form>
    </div>
  );
}

export default DoubtCard;
