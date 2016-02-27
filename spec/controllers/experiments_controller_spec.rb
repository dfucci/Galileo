require 'rails_helper'
include Warden::Test::Helpers
RSpec.describe ExperimentsController, type: :controller do
  before(:each) do
    @user = FactoryGirl.create(:user)
    login_as @user, :scope => :user
  end
  describe 'GET #show' do
    it 'assigns the requested experiment to @experiment variable' do
      experiment = FactoryGirl.create(:experiment)
      get :show, id: experiment
      expect(assigns(:experiment)).to eq experiment.as_json(include: :notes)
    end
  end
end
