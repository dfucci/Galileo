require 'rails_helper'

RSpec.describe Experiment, type: :model do
  it "has a valid factory" do
    experiment = FactoryGirl.build(:experiment)
    expect(experiment).to be_valid
  end
end
