import { FormEvent, useState } from "react";
import { Toaster } from "react-hot-toast";
import loginService from "../../lib/services/login.service";
import { LoadingIcon } from "../icons/index";

interface LoginFormProps {
  sideEffect: () => void;
}

function LoginForm({ sideEffect }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSigningIn(true);
    await loginService(email, password);
    setIsSigningIn(false);
    sideEffect();
  };

  return (
    <form
      className="w-full p-4 flex items-center justify-center py-10"
      onSubmit={handleSubmit}
    >
      <div className="w-[calc(60%-2rem)] bg-cerGreen flex flex-col items-center justify-start gap-6 rounded-[20px] shadow-cerShadow">
        <h1 className="text-center text-[36px] font-bold">
          LOGIN PARA AGENTES DE SAÚDE
        </h1>
        <span className="text-center text-[20px] mt-2">E-MAIL:</span>
        <input
          type="text"
          name="email"
          className="w-[calc(90%-2rem)] h-[calc(9vh-2rem)] bg-white rounded-[20px] pl-4"
          placeholder="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <span className="text-center text-[20px]">SENHA:</span>
        <input
          type="password"
          name="password"
          className="w-[calc(90%-2rem)] h-[calc(9vh-2rem)] bg-white rounded-[20px] pl-4"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <button
          type="submit"
          disabled={email.length === 0 || password.length === 0}
          className="self-end rounded-[20px] bg-cerBlue w-[100px] h-[60px] mr-10 mb-2 hover:bg-cerPurple hovert:text-white focus:border-2 focus:border-cerPurple focus:text-white focus:outline-none disabled:opacity-50 disabled:hover:opacity-70 transition-all ease-in-out grid place-items-center"
        >
          {(isSigningIn && <LoadingIcon />) || "Entrar"}
        </button>
      </div>
      <Toaster position="top-right" />
    </form>
  );
}

export default LoginForm;
