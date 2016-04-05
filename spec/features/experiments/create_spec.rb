require 'rails_helper'
include Warden::Test::Helpers
RSpec.feature 'User inserts the scoping of the experiment', type: :feature, :js => true do
  before(:each) do
    @experiment = FactoryGirl.create(:experiment_with_user)
    @user = @experiment.users.first
    login_as @user, :scope => :user
  end
  scenario 'she is on the experiment page' do
    visit experiment_path @experiment
    p page
    fill_in 'object', with: 'Bla'
    fill_in 'purpose', with: 'Bla'
    fill_in 'focus', with: 'Bla'
    fill_in 'perspective', with: 'Bla'
    fill_in 'context', with: 'Bla'

    click_button 'Save'
    expect(page).to have_content 'Bla'

  end
end
