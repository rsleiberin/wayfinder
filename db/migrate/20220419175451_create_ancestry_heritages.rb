class CreateAncestryHeritages < ActiveRecord::Migration[7.0]
  def change
    create_table :ancestry_heritages do |t|
      t.belongs_to :ancestry, null: false, foreign_key: true
      t.belongs_to :heritage, null: false, foreign_key: true

      t.timestamps
    end
  end
end
