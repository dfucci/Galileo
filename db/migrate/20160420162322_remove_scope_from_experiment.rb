class RemoveScopeFromExperiment < ActiveRecord::Migration
  def change
    remove_column :experiments, :scope, :text
  end
end
