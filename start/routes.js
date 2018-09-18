'use strict'

const Route = use('Route')

Route.get('/', 'JobController.home')

Route.on('/signup').render('auth.signup')
Route.post('/signup', 'UserController.create').validator('CreateUser')

Route.on('/login').render('auth.login')
Route.post('/login', 'UserController.login').validator('LoginUser')

Route.get('/logout', async({ auth, response }) => {
  await auth.logout()
  return response.redirect('/')
})


// Display all Jobs
Route.get('/post-a-job', 'JobController.userIndex')

Route.group(() => {
  Route.get('/delete/:id', 'JobController.delete')
  Route.get('/edit/:id', 'JobController.edit')
  Route.post('/update/:id', 'JobController.update').validator('CreateJob')
}).prefix('/post-a-job')

// Post a Job
Route.post('/post-a-job', 'JobController.create').validator('CreateJob')




// Route.on('/').render('index')

// Route.get('/test', () => 'I am a test')

// Route.get('/test/:id', ({params}) => {
//  return `id # ${params.id}`
// })



