/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const VocabsController = () => import('#controllers/vocabs_controller')

import router from '@adonisjs/core/services/router'
router.route('/', ['GET', 'POST'], [VocabsController, 'index'])
router.get('/ping', [VocabsController, 'index'])
