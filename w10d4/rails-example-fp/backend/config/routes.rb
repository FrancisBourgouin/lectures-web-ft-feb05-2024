Rails.application.routes.draw do
  
  
  scope :api do
    resources :users

    namespace :v1 do 
      resources :users
    end
    namespace :v2 do 
      resources :users
    end
    namespace :v3 do 
      resources :users
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
