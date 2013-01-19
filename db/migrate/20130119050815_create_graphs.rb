class CreateGraphs < ActiveRecord::Migration
  def change
    create_table :graphs do |t|
      t.string :permalink
      t.string :excel_url
      t.string :graph_type
      t.string :category
      t.string :visualization_name

      t.timestamps
    end
  end
end
