Rails.application.routes.draw do
  root to: "pages#index"
  get "/device-access", to: "pages#device_access"
  get "/statutory-obligations", to: "pages#statutory_obligations"

  get "/404", to: "errors#not_found", via: :all
  get "/422", to: "errors#unprocessable_entity", via: :all
  get "/500", to: "errors#internal_server_error", via: :all
end
