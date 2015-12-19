class ExperimentsController < ApplicationController
  def index
    @experiments = Experiment.all
  end
end
