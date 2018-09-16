'use strict'

const Job = use('App/Models/Job')

class JobController {
    async home({view}) {
     
    // create test render job data
    const job = new Job
      job.title = "Head of Awesome"
      job.link = "http://dormshed.com"
      job.description = "Doing amazing stuff daily"
    await job.save()

    // fetch a job
    const jobs = await Job.all()

    return view.render('index', { jobs: jobs.toJSON() })


  }
}

module.exports = JobController
