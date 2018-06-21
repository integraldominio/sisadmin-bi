
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MenuSchema = new Schema( {

    nome: 
    { 
        type: String,
        unique: true,
        required: true
    },
    descricao: String,
    fotos: [ { foto: String }] ,
    cardapio: 
        [
            { 
             nome: String,
             descricao: String, 
             precoNormal: Number,
             precoPromocao: Number,
             promocao: Boolean,
             ativo: Boolean,
             stars: Number, 
             fotos: [{ foto: String }] 
            }
        ]

});

module.exports = mongoose.model('Menu', MenuSchema);