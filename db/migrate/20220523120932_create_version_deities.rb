class CreateVersionDeities < ActiveRecord::Migration[7.0]
  def change
    create_table :version_deities do |t|
      t.belongs_to :version, null: false, foreign_key: true
      t.belongs_to :deity, null: false, foreign_key: true

      t.timestamps
    end
  end
end
