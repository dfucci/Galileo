class CreateExperiments < ActiveRecord::Migration
  def change
    create_table :experiments do |t|
      t.string :title
      t.text :status
      t.date :start_day
      t.text :aim

      t.timestamps null: false
    end
  end
end
