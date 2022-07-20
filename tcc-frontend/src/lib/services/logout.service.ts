import toast from "react-hot-toast";
import { PublicApi } from "../api";
import { getUser } from "./auth.service";

const logoutService = async () => {
  try {
    const userId = getUser();
    const response = await PublicApi.post("/auth/logout", { userId: userId });
    localStorage.removeItem("auth-token");
    localStorage.removeItem("userId");
    if (response.data) {
      toast.success("Logout realizado com sucesso!");
    }
  } catch (error: any) {
    toast.error("Erro inesperado.");
  }
};

export default logoutService;
