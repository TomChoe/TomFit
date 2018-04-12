class WorkoutlogsController < ApplicationController
	before_action :authenticate_user
	before_action :set_workoutlog, only: [:show, :update, :destroy]

	def index
		@workoutlogs = Workoutlog.all
		render json: @workoutlogs
	end

	def show
		render json: @workoutlog
	end



	private

	def set_workoutlog
      @workoutlog = Workoutlog.find(params[:id])
    end

end
