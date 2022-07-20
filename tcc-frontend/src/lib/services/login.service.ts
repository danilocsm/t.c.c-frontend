import toast from "react-hot-toast";
import { PublicApi } from "../api";

const loginService = async (username: string, password: string) => {
  try {
    const response = await PublicApi.post("/auth/login", {
      email: username,
      password: password,
    });
    if (response.data) {
      localStorage.setItem("userId", response.data.user);
      localStorage.setItem("auth-token", response.data.token);
      toast.success("Login realizado com sucesso!");
    }
  } catch (error: any) {
    console.log(error);
    if (error.response.status === 400) toast.error("Credenciais inválidas.");
    else if (error.response.status === 500) toast.error("Erro do servidor");
    else toast.error("Não foi possível realizar o login.");
  }
};

export default loginService;
