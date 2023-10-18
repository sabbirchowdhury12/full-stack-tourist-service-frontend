import { useEffect, useState } from "react";

function useUserFromLocalStorage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      const user = JSON.parse(localStorage.getItem("user"));
      setUser(user);
    } else {
      setUser(null);
    }
  }, []);

  return user;
}

export default useUserFromLocalStorage;
