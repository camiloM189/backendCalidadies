const {Router} = require('express');
const { obtenerEventos, crearEventos, actualizarEventos, borrarEventos } = require('../controllers/events');
const { validarToken } = require('../middlewares/validarToken');
const {check} = require('express-validator');
const { validarCampos } = require('../middlewares/validarCampos');
const { validarListItem, validarIndicador, validarTitleItem, validarFechaDeInicio, validarFechaDeFinalizacion, validarMetas, validarMetasTitle, validarMetasFechaInicio, validarMetasFechaFinalizacion } = require('../middlewares/validarEventos');

const router = Router()

router.use(validarToken)

router.get('/',obtenerEventos)

router.post('/' ,[
        // check('title','El titulo es obligatorio').not().isEmpty(),
        // validarCampos,

        // check('list','es necesario que tenga minimo una accion a cumplir').not().isEmpty(),
        // validarCampos,

        // check('listItem','Tiene que tener euna oportunidad de mejora').not().isEmpty(),
        // // validarListItem,
        // validarCampos,
        // check('start','Es necesario una fecha de inicio').not().isEmpty(),
        // // validarFechaDeInicio,
        // validarCampos,
        // check('indicador','Es necesario que el indicador').not().isEmpty(),
        // // validarIndicador,
        // validarCampos,
        // check('titleItem','Es necesario que titleItem tenga titulo').not().isEmpty(),
        // // validarTitleItem,
        // validarCampos,
        // check('end','Es necesario que tenga una fecha de finalizacion').not().isEmpty(),
        // // validarFechaDeFinalizacion,
        // validarCampos,
        // check('metas','Es necesario que tenga una meta').not().isEmpty(),
        // // validarMetas,
        // validarCampos,
        // check('metasTitle','Es necesario que tenga un titulo').not().isEmpty(),
        // // validarMetasTitle,
        // validarCampos,
        // check('metasStart','Es necesario que las metas tengan una fecha').not().isEmpty(),
        // // validarMetasFechaInicio,
        // validarCampos,
        // check('metasEnd','Es necesario que las metas tengan una fecha de finalizacion').not().isEmpty(),
        // // validarMetasFechaFinalizacion,
        // validarCampos,
],
crearEventos)

router.put('/:id',actualizarEventos)

router.delete('/:id',borrarEventos)



module.exports = router;