class PerformancesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: Performance.all
    end

    def show
        performance = find_performance
        render json: performance
    end

    def create
        post = Performance.create!(performance_params)
        render json: post, status: :created
    end

    def destroy
        post = find_performance
        post.delete
        head :no_content
    end

    private

    def find_performance
        Performance.find_by(id: params[:id])
    end

    def performance_params
        params.permit(:performance_url, :description, :workTitle)
    end

    def render_not_found_response
        render json: { error: "Performance not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
