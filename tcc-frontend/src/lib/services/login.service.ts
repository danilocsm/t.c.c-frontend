import toast from "react-hot-toast";
import { api } from "../api";

const loginService = async (username: string, password: string) => {
  try {
    const response = await api.post("/auth/login", {
      email: username,
      password: password,
    }, {withCredentials: true});
    if (response.data) {
      localStorage.setItem("auth-token", response.data.token);
      toast.success("Login realizado com sucesso!");
    }
    return true;
  } catch (error: any) {
    console.log(error.response.data);
    toast.error("Credenciais inválidas.");
    return false;
  }
};

export default loginService;
