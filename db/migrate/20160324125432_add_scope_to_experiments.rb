class AddScopeToExperiments < ActiveRecord::Migration
  def change
    add_column :experiments, :scope, :string
  end
end
