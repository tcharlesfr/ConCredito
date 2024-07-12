import axios from "axios";
import { useState } from "react";
// import List from "./List"
import Login from "./Login";

function Create() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    // console.log(nome, senha);

    try {
      const response = await axios.post(
        "http://localhost:4200/Create",
        JSON.stringify({ nome, senha }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response.data);
      setCargo(response.data.cargo)
      console.log(response.data);
      setUser(response.data);

    } catch (error) {
      if (!error?.response) {
        setError("Erro ao acessar o servidor");
      } else if (error.response.status === 401) {
        setError("Usuário ou senha inválidos");
      }
    }
  };

  // const handleLogout = async (e) => {
  //   e.preventDefault();
  //   setUser(null);
  //   setError("");
  // };

  return (
    <div className="login-form-wrap">
      {user == null ? (
        <div class="container">
          <br />
          <h2>Cadastro</h2>
          <form>
            <div class="mb-2">
              <label for="exampleInputEmail1" class="form-label">
                Nome
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="nome"
                placeholder="nome"
                required
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div class="mb-2">
              <label for="exampleInputPassword1" class="form-label">
                Senha
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                name="senha" 
                placeholder="senha" 
                required
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <button
            type="submit"
            class="btn btn-primary"
            onClick={(e) => handleLogin(e)}>
              Cadastro
            </button>

          </form>

          <p>{error}</p>
        </div>
      ) : (
        <div>
          <Login></Login>
        </div>
      )}
    </div>
  );
}

export default Create;
