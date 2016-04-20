class CreateScopes < ActiveRecord::Migration
  def change
    create_table :scopes do |t|
      t.string :analyze
      t.string :purpose
      t.string :focus
      t.string :perspective
      t.string :context

      t.timestamps null: false
    end
  end
end
