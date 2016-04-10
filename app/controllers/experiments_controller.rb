class ExperimentsController < ApplicationController
  before_action :authenticate_user!
  def index
    @experiments = current_user.experiments.all
  end

  def show
    @experiment = Experiment.find(params[:id]).as_json(include: :notes)
  end

  def scope
    p params
    @experiment = Experiment.find(params[:id])
   if  @experiment.update(scope: params[:payload])
     render json: @experiment
   else
     render json: @experiment.errors, status: :unprocessable_entity
   end
  end
end
