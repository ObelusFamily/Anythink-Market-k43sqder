class AddIsVerifiedToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :isVerified, :bool, default: false
  end
end
