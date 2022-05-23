class CreateVersionCharacterClasses < ActiveRecord::Migration[7.0]
  def change
    create_table :version_character_classes do |t|
      t.belongs_to :version, null: false, foreign_key: true
      t.belongs_to :character_class, null: false, foreign_key: true

      t.timestamps
    end
  end
end
