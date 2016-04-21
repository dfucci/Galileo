class AddExperimentIdToScope < ActiveRecord::Migration
  def change
    add_reference :scopes, :experiment, index: true, foreign_key: true
  end
end
