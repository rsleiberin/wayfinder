Rails.application.routes.draw do
  resources :users, only: [:show, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get "/auth", to: "users#show"
  post "/sessions", to: "session#create"
  delete "/sessions", to: "session#destroy"
  # Defines the root path route ("/")
  # root "articles#index"
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
