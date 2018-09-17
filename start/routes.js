'use strict'

const Route = use('Route')

Route.get('/', 'JobController.home')

Route.on('/signup').render('auth.signup')
Route.on('/login').render('auth.login')


// Route.on('/').render('index')

// Route.get('/test', () => 'I am a test')

// Route.get('/test/:id', ({params}) => {
//  return `id # ${params.id}`
// })



