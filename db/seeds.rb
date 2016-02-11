# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
  # Mayor.sreate(name: 'Emanuel', city: cities.first)
experiment = Experiment.create({title:"The effects of usability on web framework acceptance", aim: "Understanding what use thing of webframework", status: "planning", start_day: Date.today})
experiment.notes.create({content: "just a note"})
