'use strict'

const Route = use('Route')

Route.get('/', 'JobController.home')

Route.on('/signup').render('auth.signup')
Route.post('/signup', 'UserController.create').validator('CreateUser')

Route.on('/login').render('auth.login')

Route.get('/logout', async({ auth, response }) => {
  await auth.logout()
  return response.redirect('/')
})





// Route.on('/').render('index')

// Route.get('/test', () => 'I am a test')

// Route.get('/test/:id', ({params}) => {
//  return `id # ${params.id}`
// })



