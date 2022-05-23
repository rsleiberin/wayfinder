class CharactersController < ApplicationController
    def create
        character = Character.create!(character_params)
        version = Version.create!(character_id: character.id, name: "", alignment: "N")
        versionAncestry = VersionAncestry.create(version_id: version.id, ancestry_id: 1)
        versionHeritage = VersionHeritage.create(version_id: version.id, heritage_id: 1)
        versionCharacterClass= VersionCharacterClass.create(version_id: version.id, character_class_id: 1)
        versionBackground= VersionBackground.create(version_id: version.id, background_id: 1)
        versionDeity= VersionDeity.create(version_id: version.id, deity_id: 1)
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
