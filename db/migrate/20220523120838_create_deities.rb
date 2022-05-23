class CreateDeities < ActiveRecord::Migration[7.0]
  def change
    create_table :deities do |t|
      t.string :name
      t.string :alignment

      t.timestamps
    end
  end
end
