Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "pages#show", page: "home"
  get "/pages/:page" => "pages#show"
  get "about", to: "pages#about"
  get "resume", to: "pages#resume"
  get "podcast", to: "pages#podcast"
  get "youtube", to: "pages#youtube"
end
