class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :account_id
      t.string :performance_id
      t.string :comment

      t.timestamps
    end
  end
end
