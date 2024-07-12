import axios from "axios";
import { useState } from "react";

import List from './List'


function Delete() {
  const [id, setId] = useState("");
  const [error, setError] = useState("");


  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:4200/Delete",
        JSON.stringify({ id }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      alert("usuário deletado com sucesso")


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
          <h2>Delete</h2>
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

            <button
            type="submit"
            class="btn btn-primary"
            onClick={(e) => handleUpdate(e)}>
              Delete
            </button>

          </form>

          <p>{error}</p>
        </div>
        </div>
      
 
  )
}

export default Delete;
