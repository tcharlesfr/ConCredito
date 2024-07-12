function Home() {
  return (
    <div className="container text-center">
      <br />
      <div class="card ">
        <div class="card-body">
          <h5 class="card-title">Página inicial</h5>
          <p class="card-text">
            Você está na página inicial da aplicação, caso queira criar uma
            conta ou fazer o login navegue pelo botões abaixo
          </p>
          <a href="/create" class="card-link">
            <button type="submit" class="btn btn-primary">
              Cadastro
            </button>
          </a>
          <a href="/login" class="card-link">
            <button type="submit" class="btn btn-primary">
              Login
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
