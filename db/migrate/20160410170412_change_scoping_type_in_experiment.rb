class ChangeScopingTypeInExperiment < ActiveRecord::Migration
  def self.up
    remove_column :experiments, :scope
  end
end
