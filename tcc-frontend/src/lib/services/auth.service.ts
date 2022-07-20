export const isAuthenticated = () =>
  localStorage.getItem("auth-token") !== null;
export const getToken = () => localStorage.getItem("auth-token");

export const getUser = () => localStorage.getItem("userId");
