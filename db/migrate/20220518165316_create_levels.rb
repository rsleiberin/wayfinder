class CreateLevels < ActiveRecord::Migration[7.0]
  def change
    create_table :levels do |t|
      t.belongs_to :version, null: false, foreign_key: true
      t.integer :level_number

      t.timestamps
    end
  end
end
