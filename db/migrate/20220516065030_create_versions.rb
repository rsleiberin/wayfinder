class CreateVersions < ActiveRecord::Migration[7.0]
  def change
    create_table :versions do |t|
      t.belongs_to :character
      t.string :character_name
      t.integer :rank

      t.timestamps
    end
  end
end
