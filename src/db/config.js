
//importando o sqlite3
const sqlite3 = require('sqlite3')

//importando apenas a funcionalidade open do sqlite
const { open } = require('sqlite')

module.exports = () => {
  // para usar o open é obrigatório colocá-lo dentro de uma estrutura de função
  open({
    //nome do arquivo que as informações são salvas
    filename: './database.sqlite',
  
    //recebe as informações e passa para o filename 
    driver: sqlite3.Database
  });
};

