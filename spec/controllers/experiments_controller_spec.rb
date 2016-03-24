require 'rails_helper'
include Devise::TestHelpers
RSpec.describe ExperimentsController, type: :controller do
  before(:each) do
    @user = FactoryGirl.create(:user)
    sign_in @user
  end
  describe 'GET #show' do
    it 'assigns the requested experiment to @experiment variable' do
      sign_in
      experiment = FactoryGirl.create(:experiment)
      get :show, id: experiment
      expect(assigns(:experiment)).to eq experiment.as_json(include: :notes)
    end
  end
end
