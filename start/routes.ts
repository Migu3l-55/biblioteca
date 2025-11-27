/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import LivrosController from '#controllers/livros_controller'
import UsuariosController from '#controllers/usuarios_controller';
import router from '@adonisjs/core/services/router'

router.resource('livros', LivrosController).apiOnly();
router.resource('usuarios', UsuariosController).apiOnly();
//router.get('/', LivrosController.index(0));