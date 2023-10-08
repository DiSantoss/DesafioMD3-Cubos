const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host:'localhost',
    database :'dindin',
    password:'@Dd96leandro',
    port:'5432'
})




module.exports = {
    pool
}