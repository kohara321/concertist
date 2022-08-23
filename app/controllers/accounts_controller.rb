class AccountsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: Account.all
    end

    def email
        email = find_email
        render json: email
    end

    def show
        user = find_account
        render json: user
    end

    def create
        user = Account.create!(account_params)
        render json: user, status: :created
    end

    private

    def find_account
        Account.find_by(id: params[:id])
    end
 
    def find_email
        Account.find_by(email: params[:email])
    end

    def account_params
        params.permit(:email, :given_name, :family_name, :name, :picture, :password, :password_confirmation)
    end

    def render_not_found_response
        render json: { error: "User not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end