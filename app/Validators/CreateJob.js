'use strict'

class CreateJob {
  get rules () {
    return {
      title: 'required',
      link: 'required'  
    }
  }
  get messages () {
    return {
      'required': 'This {{ field }} is required.'
    }
  }

  async fails (error){
    this.ctx.session.withErrors(error) 
      .flashAll()
    return this.ctx.response.redirect('back')
  }

}

module.exports = CreateJob
