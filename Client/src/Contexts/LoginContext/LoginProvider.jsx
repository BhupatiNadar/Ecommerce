import React, { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
 
  const [allUsers, setAllUsers] = useState([]);
  
  const [loggedInUser, setLoggedInUser] = useState(null); 

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/LoginUser");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setAllUsers(data);
      } catch (e) {
        setError(e.message);
        console.error("Failed to fetch users:", e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const contextValue = {
    allUsers, 
    loggedInUser, 
    setLoggedInUser, 
    loading, 
    error, 
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
