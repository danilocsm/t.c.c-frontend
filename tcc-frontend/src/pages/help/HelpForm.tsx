import { FormEvent, useState } from "react";

function HelpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // send doubt to default email
  };

  return (
    <form
      className="w-full p-4 flex items-center justify-center"
      onSubmit={handleSubmit}
    >
      <div className="md:w-[1170px] md:h-[628px] w-3/4 h-2/3 bg-cerGreen flex flex-col items-center justify-start gap-6 rounded-[20px]">
        <span className="text-[20px] mt-2">ESCREVA SEU NOME:</span>
        <input
          type="text"
          name="name"
          className="md:w-[1030px] md:h-[59px] bg-white rounded-[20px] pl-2"
          placeholder="ex: Maria José Soares Silva"
          onChange={(event) => {setName(event.target.value)}}
        />
        <span className="text-[20px]">E-MAIL PARA CONTATO:</span>
        <input
          type="text"
          name="email"
          className="md:w-[1030px] md:h-[59px] bg-white rounded-[20px] pl-2"
          placeholder="ex: mariajose@email.com.br"
          onChange={(event) => setEmail(event.target.value)}
        />
        <span className="text-[20px]">SUA DÚVIDA:</span>
        <textarea
          name="comment"
          placeholder="Escreva sua dúvida aqui"
          className="md:w-[1030px] md:h-[225px] bg-white resize-none rounded-[20px] px-2 py-2"
          onChange={(event) => setComment(event.target.value)}
        ></textarea>
        <button
          type="submit"
          disabled={comment.length === 0 || name.length === 0 || email.length === 0}
          className="self-end rounded-[20px] bg-cerBlue w-[100px] h-[60px] mr-10 mb-2 hover:bg-cerPurple hovert:text-white focus:border-2 focus:border-cerPurple focus:text-white focus:outline-none disabled:opacity-50 disabled:hover:opacity-70 transition-all ease-in-out"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}

export default HelpForm;