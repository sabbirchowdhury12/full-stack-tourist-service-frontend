import jwt from "jsonwebtoken";

export const setLocalStorage = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};
export const getLocalStorage = (name) => {
  if (typeof window !== "undefined") {
    const result = JSON.parse(localStorage.getItem(name));
    return result;
  }
  return null;
};

export const getAccessToken = () => {
  if (typeof window !== "undefined") {
    // Check if we're on the client side
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    if (accessToken) {
      const decodedToken = jwt.decode(accessToken);
      return decodedToken;
    }
  }
  return null; // Return null if localStorage is not available
};
