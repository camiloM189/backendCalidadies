const {Schema,model} = require('mongoose')


const EventoSchema = Schema({
    title:{
        type:String,
        
    },
    list:[{
     listItem:{
        indicador:{
            type:String,
          
        },
        titleItem:{
            type:String,
          
            
        },
        metas:[{
            metaTitle:{
              
                type:String
            },
            start:Date,
            end:Date,
         
           
        }] 
     },
    }]


});

module.exports = model('Evento', EventoSchema);