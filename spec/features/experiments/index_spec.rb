require 'rails_helper'
include Warden::Test::Helpers
RSpec.feature "A list of experiments", type: :feature, :js => true do
  before(:each) do
    @user = FactoryGirl.create(:user)
    login_as @user, :scope => :user
  end
  scenario 'a user visits the page of its experiments' do
    visit "/experiments"  do
      expect(page).to have_content "Experiments"
    end
  end
end
