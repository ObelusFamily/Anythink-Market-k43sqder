# frozen_string_literal: true
puts "SHOW USER!!!!!!"
puts user.username
puts signed_in?
puts current_user.username
puts current_user.following?(user)

json.call(user, :username, :bio)
json.image user.image || 'https://static.productionready.io/images/smiley-cyrus.jpg'
<<<<<<< HEAD
json.following signed_in? ? current_user.following?(user) : false
=======
json.following signed_in? ? current_user.following?(user) : false
#json.following signed_in? ? true : false
json.anuserspspspps "hehehejejkdfjk"
>>>>>>> b08a75419f5e24dd60a3b1c9e5fd7bc7837ac133
