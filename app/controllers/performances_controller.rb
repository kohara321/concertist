class PerformancesController < ApplicationController

    def index
        render json: Performance.all
    end
end
