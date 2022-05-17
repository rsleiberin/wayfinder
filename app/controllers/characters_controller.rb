class CharactersController < ApplicationController
    def create
        character = Character.create!(character_params)
        Version.create!(character_id: character.id)
        render json: character, status: :created
    end

    def index
        render json: Character.where(user_id: session[:user_id]), status: :ok
    end
    
    private
    
    def character_params
        params.permit(:user_id)
    end
end
