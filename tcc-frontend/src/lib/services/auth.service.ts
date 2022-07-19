export const TOKEN_KEY = "@airbnb-token";
export const isAuthenticated = () =>
  !localStorage.getItem("auth-token");
export const getToken = () => localStorage.getItem("auth-token");

export const login = (token: any) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
