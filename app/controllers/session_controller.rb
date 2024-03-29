class SessionController < ApplicationController
    skip_before_action :authorized, only: :create
    #log in
    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {error: {login: "Invalid username or password"}}, status: :unauthorized
        end
    end
    #log out
    def destroy
        session.delete :user_id
        head :no_content
    end
end
