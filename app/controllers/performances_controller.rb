class PerformancesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: Performance.all
    end

    def show
        perfomance = find_performance
        render json: perfomance
    end

    def create
        perfomance = Performance.create!(perfomance_params)
        render json: perfomance, status: :created
    end

    private

    def find_performance
        Performance.find_by(id: params[:id])
    end

    def perfomance_params
        params.permit(:performance_url, :description)
    end

    def render_not_found_response
        render json: { error: "Performance not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
