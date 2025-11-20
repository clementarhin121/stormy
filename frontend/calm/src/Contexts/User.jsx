import React, { createContext, useState } from "react";

export const UserContext = createContext();

const User = ({ children }) => {
  const [user, setUser] = useState("User001");

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default User;
