const {response} = require('express');
const Eventos = require('../models/EventosModel');




const obtenerEventos =  async(req,res = response) => {
    const eventos = await Eventos.find();


    res.json({
        ok:true,
        eventos


    })



}
const crearEventos = async(req,res = response) => {
    const evento = new Eventos(req.body);

    try {
        const eventoGuardado = await evento.save();
        res.json({
            ok:true,
            msg:'Crear eventos',
            evento:eventoGuardado
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:'hable con el administrador'
        })
    }
}

const actualizarEventos = async(req,res = response) => {
    const eventoId = req.params.id
    try {
        const evento = await Eventos.findById(eventoId)

        if(!evento){
            res.status(404).json({
                ok:false,
                msg:'no existe este elemento'
            })
        }
        const newEvento = {
            ...req.body
            
        }
       
        const eventoActualizado = await Eventos.findByIdAndUpdate(eventoId,newEvento,{new:true});

        res.json({
            ok:true,
            eventoActualizado
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:'hable con el administrador'

        })
    }

   
}

const borrarEventos = (req,res = response) => {

    res.json({
        ok:true,
        msg:'Borrar eventos',

    })


}

module.exports = {
    obtenerEventos,
    crearEventos,
    actualizarEventos,
    borrarEventos
}