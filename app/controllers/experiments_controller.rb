class ExperimentsController < ApplicationController
  before_action :authenticate_user!
  def index
    @experiments = current_user.experiments.all
  end

  def show
    @experiment = Experiment.find(params[:id]).as_json(include: :notes)
  end
end
