// import { Context } from "../Context/AuthProvider";

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import Nav from "./Nav";
import List from "./List";
import Update from "./Update";
import Delete from "./Delete";

function Login() {
  //   const { authenticated, handleLogin2 } = useContext(Context);
  const [authenticated, setAuthenticated] = useState(false);

  const [user, setUser] = useState("");

  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // console.log(nome, senha);

    try {
      const response = await axios.post(
        "http://localhost:4200/Login",
        JSON.stringify({ nome, senha }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // const token = localStorage.getItem('token');
      localStorage.setItem("token", JSON.stringify(response.data.token));
      setAuthenticated(true);

      setUser(response.data.prod);
    } catch (error) {
      if (!error?.response) {
        setError("Erro ao acessar o servidor");
      } else if (error.response.status === 401) {
        setError("Usuário ou senha inválidos");
      }
    }
  };

  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setUser(null);
    setError("");
    navigate("/");
  };

  return (
    <div className="login-form-wrap">
      {authenticated === false ? (
        <div class="container-sm">
          <br />
          <h2>Login</h2>
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
              onClick={(e) => handleLogin(e)}
            >
              Login
            </button>
          </form>
          <p>{error}</p>
        </div>
      ) : (
        <div>
          <br />
          <div className="container text-center">
            <div class="card ">
              <div class="card-body">
                <h5 class="card-title">Olá {nome}</h5>
                <p class="card-text">Você realizou o login com sucesso</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => handleLogout(e)}
                >
                  Logout
                </button>
              </div>
            </div>
            <br />
            {nome === "adm" ? (
              <div class="row">
                <div class="col">
                  <div class="card ">
                    <div class="card-body">
                      <List></List>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card ">
                    <div class="card-body">
                      <Update></Update>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card ">
                    <div class="card-body">
                      <Delete></Delete>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
