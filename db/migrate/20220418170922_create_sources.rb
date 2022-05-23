class CreateSources < ActiveRecord::Migration[7.0]
  def change
    create_table :sources do |t|
      t.string :name
      t.string :source_type
      t.date :release_date

      t.timestamps
    end
  end
end
