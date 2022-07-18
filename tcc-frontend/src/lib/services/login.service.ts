import toast from "react-hot-toast";
import { PrivateApi } from "../api";

const loginService = async (username: string, password: string) => {
  try {
    const response = await PrivateApi.post("/auth/login", {
      email: username,
      password: password,
    });
    if (response.data) {
      console.log(response.data.token);
      localStorage.setItem("auth-token", response.data.token);
      toast.success("Login realizado com sucesso!");
    }
    return true;
  } catch (error: any) {
    toast.error("Credenciais inválidas.");
    return false;
  }
};

export default loginService;
