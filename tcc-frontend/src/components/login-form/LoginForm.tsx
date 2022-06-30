import { FormEvent, useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form
      className="w-full p-4 flex items-center justify-center py-10"
      onSubmit={handleSubmit}
    >
      <div className="md:w-[1170px] md:h-[300px] w-3/4 h-2/3 bg-cerGreen flex flex-col items-center justify-start gap-6 rounded-[20px] shadow-cerShadow">
        <span className="text-[20px] mt-2">E-MAIL:</span>
        <input
          type="text"
          name="name"
          className="md:w-[1030px] md:h-[65px] bg-white rounded-[20px] pl-4"
          placeholder="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <span className="text-[20px]">SENHA:</span>
        <input
          type="text"
          name="email"
          className="md:w-[1030px] md:h-[65px] bg-white rounded-[20px] pl-4"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <button
          type="submit"
          disabled={
            email.length === 0 || password.length === 0
          }
          className="self-end rounded-[20px] bg-cerBlue w-[100px] h-[60px] mr-10 mb-2 hover:bg-cerPurple hovert:text-white focus:border-2 focus:border-cerPurple focus:text-white focus:outline-none disabled:opacity-50 disabled:hover:opacity-70 transition-all ease-in-out"
        >
          Entrar
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
