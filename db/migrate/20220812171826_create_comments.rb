class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.integer :account_id
      t.integer :performance_id
      t.string :comment

      t.timestamps
    end
  end
end
