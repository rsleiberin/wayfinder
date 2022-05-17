class Character < ApplicationRecord
    belongs_to :user
    has_many :versions, dependent: :destroy
end
