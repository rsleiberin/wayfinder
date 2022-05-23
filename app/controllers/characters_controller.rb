class CharactersController < ApplicationController
    def create
        character = Character.create!(character_params)
        version = Version.create!(character_id: character.id, name: "bob", alignment: "Lawful Good")
        (1..20).each do |level| Level.create(version_id: version.id, level_number: level)
        end
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
