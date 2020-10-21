class PagesController < ApplicationController
  def index; end
  def statutory_requirements; end
  def device_access; end

  def show
    render template: "pages/#{params[:page]}"
  end
end
