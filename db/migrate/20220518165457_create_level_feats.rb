class CreateLevelFeats < ActiveRecord::Migration[7.0]
  def change
    create_table :level_feats do |t|
      t.belongs_to :level, null: false, foreign_key: true
      t.belongs_to :feats, null: false, foreign_key: true
      t.string :type

      t.timestamps
    end
  end
end
