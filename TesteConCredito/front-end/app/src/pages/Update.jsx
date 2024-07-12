import axios from "axios";
import { useState } from "react";
import List from './List'


function Update() {
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState("");


  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:4200/Update",
        JSON.stringify({ id, nome, senha }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      alert("usuário atualizado com sucesso")


    } catch (error) {
      if (!error?.response) {
        setError("Erro ao acessar o servidor");
      } else if (error.response.status === 401) {
        setError("Usuário ou senha inválidos");
      }
    }
  };

  return (
    <div className="login-form-wrap">
        <div class="container">
          <h2>Update</h2>
          {/* <List></List> */}
          <form>
          <div class="mb-2">
              <label for="exampleInputEmail1" class="form-label">
                id
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="id"
                placeholder="id"
                required
                onChange={(e) => setId(e.target.value)}
              />
            </div>

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
            onClick={(e) => handleUpdate(e)}>
              Update
            </button>

          </form>

          <p>{error}</p>
        </div>
        </div>
      
 
  )
}

export default Update;
