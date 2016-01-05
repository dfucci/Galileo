class ExperimentsController < ApplicationController
  def index
    @experiments = Experiment.all
  end

  def show
    @experiment = Experiment.find(params[:id]).as_json(include: :notes)
  end
end
