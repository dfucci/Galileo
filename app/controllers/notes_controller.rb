class NotesController < ApplicationController
  before_filter :get_experiment

  def get_experiment
    @experiment = Experiment.find(params[:experiment_id])
  end

  def index
    @notes = @experiment.notes
    respond_to do |format|
      format.json {render json: @notes}
    end
  end

  def update
    @note = @experiment.notes.find(params[:id])
    if @note.update(note_params)
      render json: @note
    else
      render json: @note.errors, status: :unprocessable_entity
    end
  end

  private
  def note_params
    params.require(:note).permit(:content)
  end
end
