- post a description of your current boring job
- post a description of the job you would like to be doing
- post a list of your skills 
- or a list of skills you would like to learn

# DEV
## adonis server --dev

# DB
```
npm i pg

psql -h dumbo.db.elephantsql.com -p 5432 -U peuerqpi + pword at prompt
\d 
SELECT * FROM jobs;
```

# CLI
## adonis make:view home // creates a .edge file
## adonis migration:run // add table/s to db
## adonis migration:rollback // remove tables
## adonis make:migration tableName (create table)
## adonis make:model Job
## adonis make:controller JobController (for http requests)

## adonis install @adonisjs/validator
### and then add the following to start/app.js:
```
 '@adonisjs/validator/providers/ValidatorProvider'
```
## adonis make:validator CreateUser

# Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
