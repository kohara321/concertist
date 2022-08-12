class CreateAccounts < ActiveRecord::Migration[6.1]
  def change
    create_table :accounts do |t|
      t.string :email
      t.string :given_name
      t.string :family_name
      t.string :name
      t.string :picture
      t.string :password_digest

      t.timestamps
    end
  end
end
