import { useEffect, useState } from "react";

function useUserFromLocalStorage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);

  return user;
}

export default useUserFromLocalStorage;
