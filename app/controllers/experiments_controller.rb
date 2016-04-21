class ExperimentsController < ApplicationController
  before_action :authenticate_user!
  def index
    @experiments = current_user.experiments.all
  end

  def show
    @experiment = Experiment.find(params[:id]).as_json(include: [ :notes, :scope ])
  end

  def scope
    @experiment = Experiment.find(params[:id])
    @experiment.scope = build_scope
    if @experiment.save!
      render json: @experiment
    else
      render json: @experiment.errors, status: :unprocessable_entity
    end
  end

  private

  def build_scope
    analyze, purpose, focus, perspective, context = params[:payload].values_at(:analyze, :purpose, :focus, :perspective, :context)
    Scope.create(analyze: analyze, purpose: purpose, focus: focus, perspective: perspective, context: context)
  end
end
