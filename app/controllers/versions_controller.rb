class VersionsController < ApplicationController
    def index
        render json: Version.where(character_id: version_params[:character_id] ), status: :ok
    end

    def create
        puts version_params
        render json: Version.create!(version_params), status: :created
    end

    private
    def version_params
        params.permit(:character_id)
    end
end
