class AddScopeToExperiment < ActiveRecord::Migration
  def change
    add_column :experiments, :scope, :json
  end
end
