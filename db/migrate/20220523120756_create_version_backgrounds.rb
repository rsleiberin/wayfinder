class CreateVersionBackgrounds < ActiveRecord::Migration[7.0]
  def change
    create_table :version_backgrounds do |t|
      t.belongs_to :version, null: false, foreign_key: true
      t.belongs_to :background, null: false, foreign_key: true

      t.timestamps
    end
  end
end
