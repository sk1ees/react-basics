import React, { createContext } from "react";
export const DataContext = createContext();
const UserContext = ({ children }) => {
  const userName = "Singha";
  const age = 98;
  const user = { userName, age };
  return (
    <DataContext.Provider value={user}>
      <div className="">{children}</div>
    </DataContext.Provider>
  );
};

export default UserContext;
