import { useState, createContext } from "react";
import axios from "axios";

const Context = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  async function handleLogin2 (){
    const {data} = await axios.post('http://localhost:4200/Login')
    setAuthenticated(true)
  }

  return (
    <Context.Provider value={{ authenticated, handleLogin2 }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
