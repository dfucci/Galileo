require 'rails_helper'
RSpec.describe Note, type: :model do
  it "has a valid factory" do
    note = FactoryGirl.build(:note)
    expect(note).to be_valid
  end
end
