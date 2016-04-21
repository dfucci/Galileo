class Scope < ActiveRecord::Base
  has_many :notes
  belongs_to :experiment
end
