const ModelProduto = require("../models/pessoa");
const jwt = require("jsonwebtoken");

module.exports = {
  async Login(req, res) {

    const prod = await ModelProduto.findOne({
      where: { nome: req.body.nome },
    });

    if (prod) {
      
    }

    const token = jwt.sign(
      {
        nome: prod.nome,
      },
      "nossosecret",
      {expiresIn: '3h' } //expira em 3h

    );
    
    const refreshToken = jwt.sign({
      username: userCredentials.username,
  }, 'nossosecret', { expiresIn: '1d' })
    
    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      sameSite: 'None', secure: true,
      maxAge: 24 * 60 * 60 * 1000
  })

  return res.status(200).json({ prod: prod, token: token });

    
  },

  async List(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    try {
      const produtos = await ModelProduto.findAll();
      return res.json(produtos);
    } catch (erro) {
      return console.error("Erro na List : ", erro);
    }
  },

  async Create(req, res) {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    try {
      const produtos = await ModelProduto.create({
        //Codigo: req.body.Codigo, // Comentado para gerar automatico
        nome: req.body.nome,
        senha: req.body.senha,
      });
      return res.json(produtos);
    } catch (erro) {
      return console.error("Erro na Create : ", erro);
    }
  },

  async Update(req, res) {
    try {
      const prod = await ModelProduto.findByPk(req.body.id);
      if (prod) {
        prod.nome = req.body.nome;
        prod.senha = req.body.senha;
        await prod.save();
      }

      return res.json(prod);
    } catch (erro) {
      return console.error("Erro na Update : ", erro);
    }
  },

  async GetOne(req, res) {
    try {
      const prod = await ModelProduto.findByPk(req.body.id);

      return res.json(prod);
    } catch (erro) {
      return console.error("Erro na Update : ", erro);
    }
  },

  async Delete(req, res) {
    try {
      const prod = await ModelProduto.findByPk(req.body.id);
      await prod.destroy();
      return res.json(prod);
    } catch (erro) {
      return console.error("Erro na Update : ", erro);
    }
  },
};
