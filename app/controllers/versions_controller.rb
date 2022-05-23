class VersionsController < ApplicationController
    def index
        versions = Version.where(character_id: version_params[:character_id] ).order('rank')
        render json: versions, status: :ok
    end

    def create
        puts version_params
        version = Version.create!(version_params)
        ancestrySlot = VersionAncestry.create(version_id: version.id, ancestry_id: 1)
        heritageSlot = VersionHeritage.create(version_id: version.id, heritage_id: 1)
        (1..20).each do |level| Level.create(version_id: version.id, level_number: level)
        end        
        render json: version, status: :created, serializer: ShowVersionSerializer
    end

    def update
        version = finder
        version.update(version_params)
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
