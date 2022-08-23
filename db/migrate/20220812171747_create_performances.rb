class CreatePerformances < ActiveRecord::Migration[6.1]
  def change
    create_table :performances do |t|
      t.string :performance_url
      t.text :description
      t.string :workTitle

      t.timestamps
    end
  end
end
