class AddWorkTitleToPerformances < ActiveRecord::Migration[6.1]
  def change
    add_column :performances, :workTitle, :string
  end
end
