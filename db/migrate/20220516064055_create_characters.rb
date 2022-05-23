class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.text :concept

      t.timestamps
    end
  end
end
