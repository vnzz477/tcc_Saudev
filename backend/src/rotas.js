import usuarioController from './controller/usuarioController.js'
import consultarController from './controller/consultarController.js'
import agendaController from './controller/agendaController.js'
import medicoController from './controller/medicoController.js'


export default function adicionarRotas(servidor){
    servidor.use(usuarioController)
    servidor.use(consultarController)
    servidor.use(medicoController)
    servidor.use(agendaController)
}