const Menu = require('../models/menu');

exports.insert = function (req, res, next) {

    const nome = req.body.nome;

    Menu.findOne( { nome }, (err, existingMenu) => {

        if (err) { return next(err); }
        
        if (existingMenu) {
          return res.status(422).send({ error: `${nome} já cadastrato, escolha outro.` });
        }
        const menu = new Menu( req.body );
        menu.save((err, m ) => {
          if (err) { return next(err); }
          res.status(200).json(m);
        });

    });
};

exports.list = function (req, res, next) {
 
  Menu.find( 
    (err,menus)=>{
      if (err) return console.error(err);
      res.status(200).json(menus);
   });

};

exports.search = function (req, res, next) {
  Menu.find( { nome: req.params.menu }, 
    (err,menus)=>{
      if (err) return console.error(err);
      res.status(200).json(menus);
   });
};




// criar
// const filtro = new Menu({
//   nome: req.query['menu']
// });
