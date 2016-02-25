class Experiment < ActiveRecord::Base
  has_many :notes
  has_and_belongs_to_many :users
end
