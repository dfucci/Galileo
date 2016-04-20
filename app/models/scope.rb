class Scope < ActiveRecord::Base
  has_many :notes
  # belongs_to :experiment
  has_one :experiment
end
