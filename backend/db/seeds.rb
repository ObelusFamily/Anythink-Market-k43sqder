# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
User.destroy_all

100.times do |index|
    u=User.create!(
        username: Faker::Name.unique.first_name,
        email: Faker::Internet.email,
        password: Faker::Internet.password(min_length: 8, max_length: 12)
    )
    # puts u.id 
    item=Item.create!(
        title: Faker::TvShows::Friends.character,
        description: Faker::TvShows::Friends.quote,
        user_id: u.id,
        image: Faker::LoremFlickr.image(size: "50x60", search_terms: ['sports']),
    )
    Comment.create!(
        body: Faker::Coffee.notes,
        user_id:u.id,
        item_id: item.id,
    )
end



puts "Created #{User.count} users"
puts "Created #{Item.count} items"
puts "Created #{Comment.count} comments"