Rails.application.routes.draw do
  resources :version_deities
  resources :deities
  resources :version_backgrounds
  resources :backgrounds
  resources :version_character_classes
  resources :character_classes
  resources :version_heritages
  resources :version_ancestries
  resources :ancestry_heritages
  resources :heritages
  resources :feats
  resources :traits
  resources :sources
  resources :ancestries
  resources :level_feats
  resources :levels
  resources :characters
  resources :versions
  resources :users, only: :create
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get "/library", to: "application#library"
  patch "/versions/:id/rank", to: "versions#rank"
  get "/character_versions/:character_id", to: "versions#index"
  get "/auth", to: "users#show"
  post "/sessions", to: "session#create"
  delete "/sessions", to: "session#destroy"
  # Defines the root path route ("/")
  # root "articles#index"
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
