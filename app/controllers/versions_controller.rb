class VersionsController < ApplicationController
    def index
        versions = Version.where(character_id: version_params[:character_id] ).order('rank')
        render json: versions, status: :ok
    end

    def create
        puts version_params
        render json: Version.create!(version_params), status: :created
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


    private
    def version_params
        params.permit(:character_id, :rank)
    end

    def finder
        version = Version.find(params[:id])
    end
end
