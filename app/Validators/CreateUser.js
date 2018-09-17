'use strict'

class CreateUser {
  get rules () {
    return {
      'username': 'required|unique:users',
      'email': 'required|unique:users',
      'password': 'required'
    }
  }

  get message (){
    return {
      'required': '{{ field }} is required',
      'unique': 'This {{ field }} already exists'
    }
  }

  async fails (error){
    this.ctx.session.withErrors(error) 
      .flashAll()
    return this.ctx.response.redirect('back')
  }

}

module.exports = CreateUser
