# frozen_string_literal: true

class FollowsController < ApplicationController
  before_action :authenticate_user!

  def create
    puts "INSIDE FOLLOW USER"
    @user = User.find_by!(username: params[:profile_username])
    current_user.follow(@user) if current_user.id != @user.id
<<<<<<< HEAD
    
=======
    puts current_user.following?(@user)
>>>>>>> b08a75419f5e24dd60a3b1c9e5fd7bc7837ac133
    render 'profiles/show'
  end

  def destroy
    puts "INSIDE UNFOLLOW USER"
    @user = User.find_by!(username: params[:profile_username])
    current_user.stop_following(@user) if current_user.id != @user.id

    render 'profiles/show'
  end
end
