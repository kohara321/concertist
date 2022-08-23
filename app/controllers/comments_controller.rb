class CommentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: Comment.all
    end

    def show
        comment = find_comment
        render json: comment
    end

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    private

    def find_comment
        Comment.find_by(id: params[:id])
    end

    def comment_params
        params.permit(:account_id, :performance_id, :comment)
    end

    def render_not_found_response
        render json: { error: "Comment not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
