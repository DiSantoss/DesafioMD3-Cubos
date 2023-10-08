const {pool} = require('../conexao/conexao');
const bcrypt = require('bcrypt')






const cadastrarUsuario = async (req,res)=>{

    const {nome,email,senha} = req.body;

    if(!nome || !email || !senha) {
        return res.status(401).json({mensagem:'Dados obrigatórios não enviados.'})
    }

    if(nome || email || senha) {
        return res.status(401).json({mensagem:'Nome, email ou senha já cadastrados.'})
    }

    try {
        const senhaCriptografada = await bcrypt.hash(senha,10)

        const novoUsuario = await pool.query('insert into usuarios (nome,email,senha) values ($1,$2,$3) returning *', [nome,email,senhaCriptografada]);

        


        return res.status(201).json(novoUsuario.rows[0]);

    } catch (error) {
            return res.status(500).json({mensagem:'Erro interno no servidor.'})
    }


}


const login = async (req,res)=>{
    const {email,senha} = req.body;

    try {

        const usuario = await pool.query('select * from usuarios where email = $1',[email])

        if(usuario.rowCount < 1) {
            return res.status(404).json({mensagem:'Email ou senha inválida'})
        }

        const senhaValida = await bcrypt.compare(senha,usuario.rows[0].senha)

        if(!senhaValida) {
            return res.status(400).json({mensagem:'Email ou senha inválida.'})
        }

        return res.json(usuario.rows[0])


        

    } catch (error) {
        console.log(error);
        return res.status(500).json({mensagem:'Erro interno no servidor'});
    }
}



module.exports = {
    cadastrarUsuario,
    login
}