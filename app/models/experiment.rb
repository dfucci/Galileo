class Experiment < ActiveRecord::Base
  has_many :notes
  has_and_belongs_to_many :users
  belongs_to :scope
  accepts_nested_attributes_for :scope
end
