require 'rails_helper'
RSpec.describe ExperimentsController, type: :controller do
  describe 'GET #show' do
    it 'assigns the requested experiment to @experiment variable' do
      experiment = FactoryGirl.create(:experiment)
      get :show, id: experiment
      expect(assigns(:experiment)).to eq experiment.as_json(include: :notes)
    end
  end
end
