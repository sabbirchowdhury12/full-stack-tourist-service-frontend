// UserContext.js
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState("");

  const logout = () => {
    // Perform the logout logic, e.g., clear local storage.
    localStorage.removeItem("user");
    setUser("");
  };

  const userinfo = {
    user,
    logout,
  };

  return (
    <UserContext.Provider value={userinfo}>{children}</UserContext.Provider>
  );
}

export function useUserFromContext() {
  return useContext(UserContext);
}
