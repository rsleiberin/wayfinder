class UsersController < ApplicationController
    skip_before_action :authorized, only: :create
    #Session authentication on page load
    def show
        current_user = User.find(session[:user_id])
        render json: current_user, serializer: UserSerializer
    end

    #Creating a user, password is digested due to "has_secure_password" class trait
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private
    #Strong params
    def user_params
        params.permit(:email, :password, :password_confirmation)
    end
end
