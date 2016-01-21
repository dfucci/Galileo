require 'rails_helper'
RSpec.feature "Experiment", type: :feature do
  scenario "Visit an experiment page" do
    visit "/experiments/1"
    expect(page).to have_text("Home")
  end
end
