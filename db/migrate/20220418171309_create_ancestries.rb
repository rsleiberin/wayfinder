class CreateAncestries < ActiveRecord::Migration[7.0]
  def change
    create_table :ancestries do |t|
      t.string :name
      t.integer :hit_points
      t.string :size
      t.integer :speed
      t.string :vision

      t.timestamps
    end
  end
end
