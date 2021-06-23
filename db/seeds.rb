# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: 'CJ', level:1)
User.create(name: 'Ty', level:3)
User.create(name: 'Morgan', level:3)
User.create(name: 'Jake', level:5)
User.create(name: 'Edward', level:2)
User.create(name: 'Sera', level:9)

puts "seeded users size: #{User.all.size}"

