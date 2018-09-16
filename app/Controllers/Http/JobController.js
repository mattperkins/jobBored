'use strict'

const Job = use('App/Models/Job')

class JobController {
    async home({view}) {
     
    // create a job
    const job = new Job
      job.title = "Head of Awesome"
      job.link = "http://dormshed.com"
      job.description = "Doing amazing stuff daily"
    await job.save()
  }
}

module.exports = JobController
