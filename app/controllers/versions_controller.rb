class VersionsController < ApplicationController
    def index
        versions = Version.where(character_id: version_params[:character_id] ).order('rank')
        render json: versions, status: :ok
    end

    def create
        puts version_params
        version = Version.create!(character_id: version_params[:character_id], name: "", alignment: "N")
        versionAncestry = VersionAncestry.create(version_id: version.id, ancestry_id: 1)
        versionHeritage = VersionHeritage.create(version_id: version.id, heritage_id: 1)
        versionCharacterClass= VersionCharacterClass.create(version_id: version.id, character_class_id: 1)
        versionBackground= VersionBackground.create(version_id: version.id, background_id: 1)
        versionDeity= VersionDeity.create(version_id: version.id, deity_id: 1)
        (1..20).each do |level| Level.create(version_id: version.id, level_number: level)
        end        
        render json: version, status: :created, serializer: ShowVersionSerializer
    end

    def update
        version = finder
        puts("updating ancestry")
        VersionAncestry.find(version.version_ancestry.id).update(ancestry_id: params[:ancestry_id])
        puts("updating Heritage")
        VersionHeritage.find(version.version_heritage.id).update(heritage_id: params[:heritage_id])
        puts("updating class")
        VersionCharacterClass.find(version.version_character_class.id).update(character_class_id: params[:character_class_id])
        puts("updating Background")
        VersionBackground.find(version.version_background.id).update(background_id: params[:background_id])
        puts("updating Deity")
        VersionDeity.find(version.version_deity.id).update(deity_id: params[:deity_id])
        puts("updating version base")
        version.update(name: params[:name], character_name: params[:character_name])
        render json: version, status: :ok, serializer: ShowVersionSerializer
    end

    def rank
        version = finder
        version.update(rank: params[:rank])
        render json: version, status: :ok
    end

    def destroy
        version = finder
        version.destroy
        render json: version, status: :no_content
    end

    def show
        version = finder
        render json: version, status: :ok, serializer: ShowVersionSerializer
    end


    private
    def version_params
        params.permit(:character_id, :rank)
    end

    def finder
        version = Version.find(params[:id])
    end
end
