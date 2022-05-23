class CreateVersions < ActiveRecord::Migration[7.0]
  def change
    create_table :versions do |t|
      t.belongs_to :character, null: false, foreign_key: true
      t.integer :rank
      t.string :name
      t.string :character_name
      t.string :alignment

      t.timestamps
    end
  end
end
